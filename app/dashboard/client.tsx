"use client";
export default function DashboardClient() {
  // This component exists for compatibility with traditional pattern, but /dashboard redirects.
  return (
    <main className="flex flex-col gap-8 items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold">Welcome to TeamNest</h1>
      <p className="text-muted-foreground text-lg text-center max-w-xl">
        Get a quick overview of your projects and tasks, and start collaborating with your team.
      </p>
    </main>
  );
}