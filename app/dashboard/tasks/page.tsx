export default function DashboardTasksPage() {
  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Tasks</h1>
      <p className="mb-6 text-muted-foreground">
        View and manage all tasks across your projects.
      </p>
      <div className="flex flex-col items-center justify-center border border-dashed border-muted rounded-lg py-12 px-4 bg-muted/30">
        <span className="mb-2 text-lg">No tasks assigned yet. Select a project to add tasks.</span>
        <a
          href="#"
          className="mt-3 inline-block rounded-md bg-primary px-5 py-2 text-background font-medium opacity-50 cursor-not-allowed"
          aria-disabled="true"
        >
          Add Task
        </a>
        <span className="mt-2 text-muted-foreground text-sm">
          (Task creation coming soon!)
        </span>
      </div>
    </section>
  );
}