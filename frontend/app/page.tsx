import { TableSkeleton } from "@/app/ui/skeletons";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-20">
      <TableSkeleton />
    </main>
  );
}
