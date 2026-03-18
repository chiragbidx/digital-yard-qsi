export default function DashboardOverviewPage() {
  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Overview</h1>
      <p className="mb-6 text-muted-foreground">
        See a summary of all your active projects and tasks here.
      </p>
      <div className="flex flex-col items-center justify-center border border-dashed border-muted rounded-lg py-12 px-4 bg-muted/30">
        <span className="mb-2 text-lg">No projects yet. Create your first project to get started.</span>
        <a
          href="/dashboard/projects/new"
          className="mt-3 inline-block rounded-md bg-primary px-5 py-2 text-background font-medium hover:bg-primary/90 transition-colors"
        >
          Create Project
        </a>
      </div>
    </section>
  );
}