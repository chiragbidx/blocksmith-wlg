import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth/session";

export default async function DashboardDealsNewPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  return (
    <section className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-2">Add New Deal</h1>
      <p className="text-muted-foreground mb-8">
        Enter deal information to start tracking opportunities.
      </p>
      <div className="bg-card rounded-lg shadow p-8 flex flex-col items-center justify-center">
        {/* Form coming soon */}
      </div>
    </section>
  );
}