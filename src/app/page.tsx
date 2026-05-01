import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role?.toLowerCase();

  if (role) {
    redirect(`/${role}`);
  }

  // If no role, redirect to sign-in
  redirect("/sign-in");
}
