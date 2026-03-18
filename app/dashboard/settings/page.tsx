import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth/session";
import dynamic from "next/dynamic";

const SettingsClient = dynamic(() => import("./client"), { ssr: false });

export default async function DashboardSettingsPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  return <SettingsClient />;
}