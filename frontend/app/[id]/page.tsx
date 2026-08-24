import { fetchEmployeeById } from "@/app/lib/data";
import EditForm from "@/app/ui/employees/edit-form";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const employee = await fetchEmployeeById(id).catch(() => null);

  if (!employee) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen bg-background p-4 sm:p-8 lg:p-20">
      <div className="max-w-2xl mx-auto w-full">
        <EditForm employee={employee} />
      </div>
    </main>
  );
}
