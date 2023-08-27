import { authOptions } from "@/app/utilities/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login/?callbackUrl=/my/dashboard");
  }
  return <main></main>;
}
