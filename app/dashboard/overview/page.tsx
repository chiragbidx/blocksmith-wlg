import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth/session";

export default async function DashboardOverviewPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  return (
    <section className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-extrabold tracking-tight mb-2">Overview</h1>
      <p className="text-muted-foreground mb-8">
        Your team's activity and pipeline at a glance.
      </p>
      <div className="bg-card p-8 rounded-lg flex flex-col items-center justify-center shadow">
        <p className="text-center text-muted-foreground mb-4">
          No recent activity yet. Add contacts or deals to see updates here.
        </p>
      </div>
    </section>
  );
}