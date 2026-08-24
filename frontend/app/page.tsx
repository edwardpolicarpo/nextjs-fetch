import { fetchEmployeesPages } from "@/app/lib/data";
import Search from "./ui/search";
import { CreateButton } from "./ui/employees/buttons";
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
    <main className="flex flex-col min-h-screen items-center p-20">
      <h1 className="text-2xl text-left w-full">Employees</h1>
      <aside className="my-4 flex items-center justify-between gap-2 md:my-8 w-full">
        <Search placeholder="Search employees..." />
        <CreateButton />
      </aside>
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
        <Pagination totalPages={totalPages} />
      </Suspense>
    </main>
  );
}
