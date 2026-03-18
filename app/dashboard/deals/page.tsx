import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth/session";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function DashboardDealsPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  return (
    <section className="max-w-4xl mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight">Deals</h1>
        <Link href="/dashboard/deals/new">
          <Button>Add Deal</Button>
        </Link>
      </div>
      <div className="bg-card p-8 rounded-lg flex flex-col items-center justify-center shadow">
        <p className="text-center text-muted-foreground mb-4">
          No deals yet.
        </p>
      </div>
    </section>
  );
}