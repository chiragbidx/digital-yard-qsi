import { redirect } from "next/navigation";
export default function DashboardPage() {
  // Redirect to /dashboard/overview by default
  redirect("/dashboard/overview");
}