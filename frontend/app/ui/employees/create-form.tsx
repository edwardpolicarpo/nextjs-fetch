import { createEmployee } from "@/app/lib/actions";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";

export default function CreateForm() {
  return (
    <form action={createEmployee}>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="name"
            className="rounded-md border border-input bg-background px-3 py-1"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email"
            className="rounded-md border border-input bg-background px-3 py-1"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="phone"
            className="rounded-md border border-input bg-background px-3 py-1"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="role">Role</label>
          <input
            id="role"
            name="role"
            type="text"
            placeholder="role"
            className="rounded-md border border-input bg-background px-3 py-1"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="department">Department</label>
          <input
            id="department"
            name="department"
            type="text"
            placeholder="department"
            className="rounded-md border border-input bg-background px-3 py-1"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="city"
            className="rounded-md border border-input bg-background px-3 py-1"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="salary">Salary</label>
          <input
            id="salary"
            name="salary"
            type="number"
            step="0.01"
            placeholder="salary"
            className="rounded-md border border-input bg-background px-3 py-1"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            defaultValue=""
            className="rounded-md border border-input bg-background px-3 py-1"
          >
            <option value="" disabled>
              Select a status
            </option>
            <option value="EM_ANALISE">Em analise</option>
            <option value="APROVADO">Aprovado</option>
            <option value="REPROVADO">Reprovado</option>
            <option value="CONTRATADO">Contratado</option>
          </select>
        </div>
      </div>
      <DialogFooter className="mt-6">
        <DialogClose render={<Button type="button" variant="outline">Cancel</Button>} />
        <Button type="submit">Create</Button>
      </DialogFooter>
    </form>
  );
}
