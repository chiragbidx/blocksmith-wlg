import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth/session";
import dynamic from "next/dynamic";

const TeamClient = dynamic(() => import("./client"), { ssr: false });

export default async function DashboardTeamPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  return <TeamClient />;
}