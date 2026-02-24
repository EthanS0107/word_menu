import { DefaultSession } from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      stripeCustomerId?: string | null;
      isActive?: boolean;
      isAdmin?: boolean;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      city?: string | null;
      country?: string | null;
    } & DefaultSession["user"];
  }

  interface User {
    stripeCustomerId?: string | null;
    stripeSubscriptionId?: string | null;
    isAdmin?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id?: string;
    isActive?: boolean;
    isAdmin?: boolean;
  }
}
