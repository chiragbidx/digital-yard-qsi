"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { signInWithPassword, signUpWithPassword } from "./actions";
import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { homeContent } from "@/content/home";

export default function AuthClient() {
  // Determine mode based on hash or query
  const params = useSearchParams();
  const [mode, setMode] = React.useState(
    typeof window !== "undefined" && window.location.hash === "#signup"
      ? "signup"
      : "signin"
  );
  React.useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "signup" || hash === "signin") setMode(hash);
  }, []);

  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async (formData: FormData) => {
    setError(null);
    try {
      if (mode === "signup") {
        const res = await signUpWithPassword(formData);
        if (res?.error) setError(res.error);
      } else {
        const res = await signInWithPassword(formData);
        if (res?.error) setError(res.error);
      }
      // redirect handled on server if successful
    } catch (err: any) {
      setError(err.message || "Unknown error");
    }
  };

  return (
    <div className="max-w-md mx-auto pt-8 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          {mode === "signup"
            ? "Create your TeamNest Account"
            : "Sign in to TeamNest"}
        </h1>
        <div className="text-muted-foreground">
          Your internal workspace for projects and tasks.
        </div>
      </div>
      <form
        action={onSubmit}
        className="space-y-5"
        autoComplete="off"
      >
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          autoComplete="username"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          minLength={6}
          required
          autoComplete={mode === "signin" ? "current-password" : "new-password"}
        />
        {mode === "signup" && (
          <Input
            name="fullName"
            type="text"
            placeholder="Full Name"
            required
          />
        )}
        <Button type="submit" className="w-full">
          {mode === "signup" ? "Get Started" : "Sign In"}
        </Button>
      </form>
      <div className="text-sm text-destructive text-center">
        {error}
      </div>
      <div className="mt-6 text-center">
        {mode === "signup" ? (
          <span>
            Already have an account?{" "}
            <button
              className="underline font-medium"
              onClick={() => {
                setMode("signin");
                window.location.hash = "#signin";
              }}
            >
              Sign In
            </button>
          </span>
        ) : (
          <span>
            Don&apos;t have an account?{" "}
            <button
              className="underline font-medium"
              onClick={() => {
                setMode("signup");
                window.location.hash = "#signup";
              }}
            >
              Get Started
            </button>
          </span>
        )}
      </div>
      <div className="mt-4 text-xs text-muted-foreground text-center">
        {mode === "signup"
          ? "Start collaborating with your team in minutes."
          : "Access your internal TeamNest dashboard."}
      </div>
    </div>
  );
}