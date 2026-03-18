export default function DashboardProjectsNewPage() {
  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Create New Project</h1>
      <p className="mb-6 text-muted-foreground">
        Set up a new project for your team.
      </p>
      <div className="flex flex-col items-center justify-center border border-dashed border-muted rounded-lg py-12 px-4 bg-muted/30">
        <a
          href="#"
          className="mt-3 inline-block rounded-md bg-primary px-5 py-2 text-background font-medium opacity-50 cursor-not-allowed"
          aria-disabled="true"
        >
          Create Project
        </a>
        <span className="mt-2 text-muted-foreground text-sm">
          (Project creation coming soon!)
        </span>
      </div>
    </section>
  );
}