import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth/session";

export default async function DashboardContactsNewPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  return (
    <section className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-2">Add New Contact</h1>
      <p className="text-muted-foreground mb-8">
        Fill in contact details to add to your CRM.
      </p>
      <div className="bg-card rounded-lg shadow p-8 flex flex-col items-center justify-center">
        {/* Form coming soon */}
      </div>
    </section>
  );
}