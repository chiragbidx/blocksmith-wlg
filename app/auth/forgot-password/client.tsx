"use client";
import React, { useState } from "react";
import { sendForgotPasswordEmail } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordClient() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await sendForgotPasswordEmail({ email });
    if (result.error) {
      setError(result.error);
    } else {
      setSent(true);
    }
    setLoading(false);
  }

  return (
    <div className="w-full max-w-md mx-auto mt-12">
      <div className="mb-8 text-center">
        <span className="text-3xl font-bold text-primary">RelateCRM</span>
      </div>
      <div className="bg-card rounded-lg shadow px-8 py-6">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">Reset your RelateCRM password</h1>
          <p className="text-muted-foreground mt-1">
            Enter your email to receive password reset instructions.
          </p>
        </div>
        {sent ? (
          <div className="text-center text-success">
            If an account exists, a reset link was sent.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            {error && <div className="text-destructive text-sm mt-2 text-center">{error}</div>}
            <Button type="submit" className="w-full mt-4" disabled={loading}>
              {loading ? "Please wait..." : "Send Reset Link"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}