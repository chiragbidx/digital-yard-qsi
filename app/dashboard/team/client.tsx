"use client";
export default function DashboardTeamClient() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Team</h1>
      <p className="mb-6 text-muted-foreground">
        Manage your team members and roles.
      </p>
      <div className="flex flex-col items-center justify-center border border-dashed border-muted rounded-lg py-12 px-4 bg-muted/30">
        <span className="mb-2 text-lg">No team members yet. Invite your team to join TeamNest.</span>
        <a
          href="#"
          className="mt-3 inline-block rounded-md bg-primary px-5 py-2 text-background font-medium opacity-50 cursor-not-allowed"
          aria-disabled="true"
        >
          Invite Team Member
        </a>
        <span className="mt-2 text-muted-foreground text-sm">
          (Team invite flow coming soon!)
        </span>
      </div>
    </div>
  );
}