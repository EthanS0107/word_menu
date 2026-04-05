import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import ProfileClient from "./ProfileClient";

const AUTH_DISABLED = true;

export default async function ProfilePage() {
  const session = AUTH_DISABLED
    ? {
        user: {
          id: "guest-user",
          email: "invite@worldmenu.local",
          name: "Invité",
          firstName: "Invité",
          lastName: "",
          phone: "",
          city: "",
          country: "",
          isActive: true,
          isAdmin: false,
        },
      }
    : await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  return <ProfileClient user={session.user} />;
}
