"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signInWithPassword, signUpWithPassword } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AuthClient() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash === "#signup") setMode("signup");
    else setMode("signin");
    window.onhashchange = () => {
      if (window.location.hash === "#signup") setMode("signup");
      else setMode("signin");
    };
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await signInWithPassword({ email, password });
    setLoading(false);
    if (result.error) setError(result.error);
    else router.push("/dashboard");
  }

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await signUpWithPassword({ firstName, lastName, email, password });
    setLoading(false);
    if (result.error) setError(result.error);
    else router.push("/dashboard");
  }

  return (
    <div className="w-full max-w-md mx-auto mt-12">
      <div className="mb-8 text-center">
        <span className="text-3xl font-bold text-primary">RelateCRM</span>
      </div>
      <div className="bg-card rounded-lg shadow px-8 py-6">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">
            {mode === "signin" ? "Sign in to RelateCRM" : "Create your RelateCRM account"}
          </h1>
          <p className="text-muted-foreground mt-1">
            {mode === "signin"
              ? "Access your team's dashboard and manage your customer relationships."
              : "Start organizing your contacts and deals today."}
          </p>
        </div>
        <form onSubmit={mode === "signin" ? handleSignIn : handleSignUp} className="space-y-4">
          {mode === "signup" && (
            <>
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  disabled={loading}
                />
              </div>
            </>
          )}
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
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>
          {error && <div className="text-destructive text-sm mt-2 text-center">{error}</div>}
          <Button type="submit" className="w-full mt-4" disabled={loading}>
            {loading
              ? "Please wait..."
              : mode === "signin"
              ? "Sign In"
              : "Create Account"}
          </Button>
        </form>
        <div className="mt-6 text-center">
          <button
            className="text-sm text-accent-foreground hover:underline focus:outline-none"
            onClick={() => {
              setMode(mode === "signin" ? "signup" : "signin");
              window.location.hash = mode === "signin" ? "signup" : "signin";
            }}
            type="button"
            tabIndex={-1}
          >
            {mode === "signin"
              ? "Don't have an account? Create one now."
              : "Already have an account? Sign in here."}
          </button>
        </div>
      </div>
    </div>
  );
}