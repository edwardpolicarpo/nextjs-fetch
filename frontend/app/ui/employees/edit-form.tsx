import { updatePatchEmployee } from "@/app/lib/actions";
import { Employee } from "@/app/lib/definitions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EditForm({ employee }: { employee: Employee }) {
  const updateEmployeeWithId = updatePatchEmployee.bind(null, employee.id);

  const statusColors: Record<string, { bg: string; text: string }> = {
    EM_ANALISE: { bg: "bg-gray-100 dark:bg-gray-800", text: "text-gray-700 dark:text-gray-300" },
    APROVADO: { bg: "bg-green-100 dark:bg-green-900", text: "text-green-700 dark:text-green-300" },
    REPROVADO: { bg: "bg-red-100 dark:bg-red-900", text: "text-red-700 dark:text-red-300" },
    CONTRATADO: { bg: "bg-blue-100 dark:bg-blue-900", text: "text-blue-700 dark:text-blue-300" },
  };

  return (
    <form action={updateEmployeeWithId} className="w-full space-y-6">
      {/* Employee Header */}
      <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Editing</p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">{employee.name}</h2>
            <p className="text-sm text-muted-foreground mt-1">{employee.email}</p>
          </div>
          <div className={`inline-flex rounded-full px-4 py-2 text-sm font-medium w-fit ${statusColors[employee.status]?.bg || "bg-gray-100"} ${statusColors[employee.status]?.text || "text-gray-700"}`}>
            {employee.status === "EM_ANALISE" && "Em Análise"}
            {employee.status === "APROVADO" && "✓ Aprovado"}
            {employee.status === "REPROVADO" && "✗ Reprovado"}
            {employee.status === "CONTRATADO" && "⭐ Contratado"}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Department</p>
            <p className="text-sm font-medium mt-1">{employee.department}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">City</p>
            <p className="text-sm font-medium mt-1">{employee.city}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Phone</p>
            <p className="text-sm font-medium mt-1">{employee.phone}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Current Salary</p>
            <p className="text-sm font-medium mt-1 text-primary">{employee.salary.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          </div>
        </div>
      </div>

      {/* Edit Fields */}
      <div className="rounded-lg border border-border bg-card p-6 sm:p-8 space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Update Information</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="role" className="text-sm font-semibold">New Role</label>
            <input
              id="role"
              name="role"
              type="text"
              defaultValue={employee.role}
              placeholder="e.g., Senior Developer"
              className="rounded-lg border border-input bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 transition"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="salary" className="text-sm font-semibold">New Salary</label>
            <input
              id="salary"
              name="salary"
              type="number"
              step="0.01"
              defaultValue={employee.salary}
              placeholder="0.00"
              className="rounded-lg border border-input bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 transition"
              required
            />
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="status" className="text-sm font-semibold">New Status</label>
            <select
              name="status"
              id="status"
              defaultValue={employee.status}
              className="rounded-lg border border-input bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 transition cursor-pointer"
              required
            >
              <option value="EM_ANALISE">Em Análise</option>
              <option value="APROVADO">Aprovado</option>
              <option value="REPROVADO">Reprovado</option>
              <option value="CONTRATADO">Contratado</option>
            </select>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
        <Button
          variant="outline"
          nativeButton={false}
          className="w-full sm:w-auto"
          render={<Link href="/" className="block">Cancel</Link>}
        />
        <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
          Save Changes
        </Button>
      </div>
    </form>
  );
}
