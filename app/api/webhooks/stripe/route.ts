import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!endpointSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not set");
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 },
    );
  }

  const payload = await req.text();
  const signature = req.headers.get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, endpointSecret);
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 },
    );
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const subscriptionId = session.subscription as string;
        const customerId = session.customer as string;

        if (subscriptionId && customerId) {
          // Récupérer les détails de la souscription et calculer la fin de période
          const stripeSubscription = await stripe.subscriptions.retrieve(
            subscriptionId,
            {
              expand: ["latest_invoice"],
            },
          );

          // Calculer la fin de période à partir du billing_cycle_anchor et de l'intervalle
          const periodEnd = stripeSubscription.cancel_at
            ? new Date(stripeSubscription.cancel_at * 1000)
            : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 jours par défaut

          await prisma.user.updateMany({
            where: { stripeCustomerId: customerId },
            data: {
              stripeSubscriptionId: subscriptionId,
              stripeCurrentPeriodEnd: periodEnd,
            },
          });

          // Mise à jour par userId si disponible dans les metadata
          const userId = session.metadata?.userId;
          if (userId) {
            await prisma.user.update({
              where: { id: userId },
              data: {
                stripeSubscriptionId: subscriptionId,
                stripeCurrentPeriodEnd: periodEnd,
              },
            });
          }
        }
        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;
        const subscriptionId =
          invoice.parent?.subscription_details?.subscription;
        const customerId =
          typeof invoice.customer === "string"
            ? invoice.customer
            : invoice.customer?.id;

        if (subscriptionId && customerId) {
          const subId =
            typeof subscriptionId === "string"
              ? subscriptionId
              : subscriptionId.id;

          // Utiliser la date de fin de la période de l'invoice
          const periodEnd = invoice.period_end
            ? new Date(invoice.period_end * 1000)
            : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

          await prisma.user.updateMany({
            where: { stripeCustomerId: customerId },
            data: {
              stripeSubscriptionId: subId,
              stripeCurrentPeriodEnd: periodEnd,
            },
          });
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const deletedSubId = subscription.id;
        await prisma.user.updateMany({
          where: { stripeSubscriptionId: deletedSubId },
          data: {
            stripeSubscriptionId: null,
            stripeCurrentPeriodEnd: null,
          },
        });
        break;
      }

      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (err: any) {
    console.error(`Error managing subscription: ${err.message}`);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 },
    );
  }

  return NextResponse.json({ received: true });
}
