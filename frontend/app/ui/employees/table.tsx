import { UpdateButton, DeleteButton } from "@/app/ui/employees/buttons";
import EmployeeStatus from "@/app/ui/employees/status";
import { fetchFilteredEmployees } from "@/app/lib/data";
import { formatCurrency } from "@/app/lib/utils";
import { IconMapPinFilled, IconPhoneFilled, IconMoodUnamused } from "@tabler/icons-react";

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const employees = await fetchFilteredEmployees(query, currentPage);

  if (!employees || employees.length === 0) {
    return (
      <div className="mt-6 flex min-w-full items-center justify-center rounded-lg bg-gray-50 p-4 text-gray-500">
        <IconMoodUnamused className="w-10 text-gray-500" />
        <span className="ml-2 text-sm">
          No employees found.
        </span>
      </div>
    );
  }

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {employees?.map((employee) => (
              <div
                key={employee.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p>{employee.name}</p>
                    <p className="text-sm text-gray-500">{employee.email}</p>
                  </div>
                  <EmployeeStatus status={employee.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    <div>
                      <p className="text-xl font-medium">
                        {formatCurrency(employee.salary)}
                      </p>
                    </div>
                    <UpdateButton id={employee.id} />
                    <DeleteButton id={employee.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
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
              {employees?.map((employee) => (
                <tr
                  key={employee.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <p>{employee.name}</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {employee.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <IconPhoneFilled className="h-5 w-5 text-gray-500" />
                    {employee.phone}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {employee.role}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {employee.department}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <IconMapPinFilled className="h-5 w-5 text-gray-500" />
                    {employee.city}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(employee.salary)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <EmployeeStatus status={employee.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateButton id={employee.id} />
                      <DeleteButton id={employee.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
