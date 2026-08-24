import { updatePatchEmployee } from "@/app/lib/actions";
import { Employee } from "@/app/lib/definitions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EditForm({ employee }: { employee: Employee }) {
  const updateEmployeeWithId = updatePatchEmployee.bind(null, employee.id);

  return (
    <form action={updateEmployeeWithId} className="w-full max-w-md">
      <section className="flex flex-col gap-4 rounded-2xl bg-secondary p-5">
        <div>
          <p className="text-sm text-muted-foreground">Employee</p>
          <p className="font-medium">{employee.name}</p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="role">Role</label>
          <input
            id="role"
            name="role"
            type="text"
            defaultValue={employee.role}
            placeholder="role"
            className="rounded-md border-none bg-background px-3 py-1"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="salary">Salary</label>
          <input
            id="salary"
            name="salary"
            type="number"
            step="0.01"
            defaultValue={employee.salary}
            placeholder="salary"
            className="rounded-md border-none bg-background px-3 py-1"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            defaultValue={employee.status}
            className="rounded-md border-none bg-background px-3 py-1"
          >
            <option value="EM_ANALISE">Em analise</option>
            <option value="APROVADO">Aprovado</option>
            <option value="REPROVADO">Reprovado</option>
            <option value="CONTRATADO">Contratado</option>
          </select>
        </div>
      </section>
      <div className="mt-4 flex justify-end gap-2">
        <Button
          variant="outline"
          nativeButton={false}
          render={<Link href="/">Cancel</Link>}
        />
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}
