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
    <main className="flex flex-col min-h-screen items-center p-20">
      <h1 className="w-full max-w-md text-2xl">Edit Employee</h1>
      <div className="mt-4 flex w-full justify-center">
        <EditForm employee={employee} />
      </div>
    </main>
  );
}
