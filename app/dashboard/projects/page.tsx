export default function DashboardProjectsPage() {
  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <p className="mb-6 text-muted-foreground">
        Manage all your internal projects.
      </p>
      <div className="flex flex-col items-center justify-center border border-dashed border-muted rounded-lg py-12 px-4 bg-muted/30">
        <span className="mb-2 text-lg">No projects found. Start by creating a new project.</span>
        <a
          href="/dashboard/projects/new"
          className="mt-3 inline-block rounded-md bg-primary px-5 py-2 text-background font-medium hover:bg-primary/90 transition-colors"
        >
          New Project
        </a>
      </div>
    </section>
  );
}