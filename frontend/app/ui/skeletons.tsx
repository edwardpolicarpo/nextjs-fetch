const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none">
      {/* Name */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="h-6 w-24 rounded bg-gray-200"></div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-200"></div>
      </td>
      {/* Phone */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-200"></div>
      </td>
      {/* Role */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-24 rounded bg-gray-200"></div>
      </td>
      {/* Department */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-24 rounded bg-gray-200"></div>
      </td>
      {/* City */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-24 rounded bg-gray-200"></div>
      </td>
      {/* Salary */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-24 rounded bg-gray-200"></div>
      </td>
      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-200"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-10 w-10 rounded bg-gray-200"></div>
          <div className="h-10 w-10 rounded bg-gray-200"></div>
        </div>
      </td>
    </tr>
  );
}

export function TableSkeleton() {
  return (
    <section className="mt-6 flex min-w-full items-center justify-center bg-blue-50 rounded-t-2xl">
      <table className="min-w-full hidden text-gray-900 md:table">
        <thead className="text-left text-sm rounded-t-full">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              Name
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Email
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Phone
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Role
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Department
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              City
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Salary
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Status
            </th>
            <th scope="col" className="relative py-3 pl-6 pr-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <TableRowSkeleton />
          <TableRowSkeleton />
          <TableRowSkeleton />
          <TableRowSkeleton />
          <TableRowSkeleton />
          <TableRowSkeleton />
        </tbody>
      </table>
    </section>
  );
}
