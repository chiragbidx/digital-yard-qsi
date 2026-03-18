"use client";
import * as React from "react";
import { forgotPasswordAction } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordClient() {
  const [status, setStatus] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async (formData: FormData) => {
    setError(null);
    setStatus(null);
    try {
      const res = await forgotPasswordAction(formData);
      if (res?.error) {
        setError(res.error);
      } else {
        setStatus("We’ll email you instructions to reset your password.");
      }
    } catch (err: any) {
      setError(err.message || "Unknown error");
    }
  };

  return (
    <div className="max-w-md mx-auto pt-16">
      <div className="mb-8 text-center space-y-2">
        <h1 className="text-3xl font-bold">Reset your TeamNest Password</h1>
        <p className="text-muted-foreground">
          Your internal workspace for projects and tasks.
        </p>
      </div>
      <form
        className="space-y-4"
        action={onSubmit}
        autoComplete="off"
      >
        <Input
          name="email"
          type="email"
          placeholder="Email address"
          required
          autoComplete="username"
        />
        <Button type="submit" className="w-full">
          Send Reset Link
        </Button>
        <div className="text-xs text-muted-foreground mt-1">
          We’ll email you instructions to reset your password.
        </div>
      </form>
      <div className="mt-4 text-sm text-green-600 text-center">{status}</div>
      <div className="mt-2 text-sm text-destructive text-center">{error}</div>
    </div>
  );
}