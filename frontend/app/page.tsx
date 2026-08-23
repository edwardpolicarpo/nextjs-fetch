import { TableSkeleton } from "@/app/ui/skeletons";
import { fetchEmployeesPages } from "@/app/lib/data";
import Search from "./ui/search";
import { CreateButton } from "./ui/employees/buttons";
import { Suspense } from "react";
import Table from "./ui/employees/table";
import Pagination from "./ui/employees/pagination";

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
    <main className="flex flex-col min-h-screen items-center justify-center px-20">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Employees</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search employees..." />
        <CreateButton />
      </div>
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
        <Pagination totalPages={totalPages} />
      </Suspense>
    </main>
  );
}
