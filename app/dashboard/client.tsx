"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardClient() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-extrabold tracking-tight mb-3">
        Welcome to RelateCRM
      </h1>
      <p className="text-muted-foreground mb-8">
        Centralize your contacts and deals to keep your team aligned.
      </p>
      <div className="bg-card rounded-lg shadow p-8 flex flex-col items-center justify-center">
        <p className="text-center text-muted-foreground mb-4">
          No contacts or deals yet. Add your first contact to get started.
        </p>
        <Link href="/dashboard/contacts/new">
          <Button>Add Contact</Button>
        </Link>
      </div>
    </section>
  );
}