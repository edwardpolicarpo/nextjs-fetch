import { UpdateButton, DeleteButton } from "@/app/ui/employees/buttons";
import EmployeeStatus from "@/app/ui/employees/status";
import { Employee } from "@/app/lib/definitions";
import { fetchFilteredEmployees } from "@/app/lib/data";
import { formatCurrency } from "@/app/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IconDots } from "@tabler/icons-react";

const employeeKeys: Array<keyof Employee> = [
  "name",
  "email",
  "phone",
  "role",
  "department",
  "city",
  "salary",
  "status"
];

export default async function EmployeeTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const employees = await fetchFilteredEmployees(query, currentPage);

  if (!employees || employees.length === 0) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            {employeeKeys.map((key) => (
              <TableHead key={key} className="capitalize">
                {key}
              </TableHead>
            ))}
            <TableHead className="text-right capitalize">actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell
              colSpan={employeeKeys.length + 1}
              className="text-center h-20"
            >
              No employees found.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {employeeKeys.map((key) => (
            <TableHead key={key} className="capitalize">
              {key}
            </TableHead>
          ))}
          <TableHead className="text-right capitalize">actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>{employee.phone}</TableCell>
            <TableCell>{employee.department}</TableCell>
            <TableCell>{employee.role}</TableCell>
            <TableCell>{employee.city}</TableCell>
            <TableCell>{formatCurrency(employee.salary)}</TableCell>
            <TableCell>
              <EmployeeStatus status={employee.status} />
            </TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="ghost" size="icon" className="size-8">
                      <IconDots />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  }
                />
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <UpdateButton id={employee.id} />
                  </DropdownMenuItem>
                  <DropdownMenuItem variant="destructive">
                    <DeleteButton id={employee.id} />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function TableSkeleton() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {employeeKeys.map((key) => (
            <TableHead key={key} className="capitalize">
              {key}
            </TableHead>
          ))}
          <TableHead className="text-right capitalize">actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRowSkeleton />
        <TableRowSkeleton />
        <TableRowSkeleton />
        <TableRowSkeleton />
        <TableRowSkeleton />
        <TableRowSkeleton />
      </TableBody>
    </Table>
  );
}

export function TableRowSkeleton() {
  return (
    <TableRow>
      {employeeKeys.map((key) => (
        <TableCell key={key}>
          <div className="h-4 w-full bg-accent rounded-full"></div>
        </TableCell>
      ))}
    </TableRow>
  );
}
