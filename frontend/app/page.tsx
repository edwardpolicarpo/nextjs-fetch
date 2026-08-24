import { fetchEmployeesPages } from "@/app/lib/data";
import Search from "./ui/search";
import { CreateEmployeeDialog } from "./ui/employees/create-dialog";
import { Suspense } from "react";
import Table from "./ui/employees/table";
import Pagination from "./ui/employees/pagination";
import { TableSkeleton } from "./ui/employees/table";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchEmployeesPages(query);

  return (
    <main className="flex flex-col min-h-screen items-center p-4 sm:p-8 lg:p-20">
      <h1 className="text-2xl sm:text-3xl text-left w-full font-semibold">Employees</h1>
      <aside className="my-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 md:my-8 w-full">
        <Search placeholder="Search employees..." />
        <CreateEmployeeDialog />
      </aside>
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <div className="w-full overflow-x-auto">
          <Table query={query} currentPage={currentPage} />
        </div>
        <Pagination totalPages={totalPages} />
      </Suspense>
    </main>
  );
}
