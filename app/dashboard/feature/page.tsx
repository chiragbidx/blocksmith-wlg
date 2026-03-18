import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth/session";
import dynamic from "next/dynamic";

const FeatureClient = dynamic(() => import("./client"), { ssr: false });

export default async function FeatureDashboardPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  return <FeatureClient />;
}