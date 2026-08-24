import { createEmployee } from "@/app/lib/actions";
import { Button } from "@base-ui/react";
import Link from "next/link";

export default function Form() {
  return (
    <form action={createEmployee}>
      <section className="bg-secondary p-5 rounded-2xl">
        {"{"}
        <div className="ml-10 flex flex-col">
          <div>
            <label htmlFor="name">name: </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="name"
              className="border-none py-1 px-3"
            />
          </div>
          <div>
            <label htmlFor="email">email: </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="email"
              className="border-none py-1 px-3"
            />
          </div>
          <div>
            <label htmlFor="phone">phone: </label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="phone"
              className="border-none py-1 px-3"
            />
          </div>
          <div>
            <label htmlFor="role">role: </label>
            <input
              id="role"
              name="role"
              type="text"
              placeholder="role"
              className="border-none py-1 px-3"
            />
          </div>
          <div>
            <label htmlFor="department">department: </label>
            <input
              id="department"
              name="department"
              type="text"
              placeholder="department"
              className="border-none py-1 px-3"
            />
          </div>
          <div>
            <label htmlFor="city">city: </label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder="city"
              className="border-none py-1 px-3"
            />
          </div>
          <div>
            <label htmlFor="salary">salary: </label>
            <input
              id="salary"
              name="salary"
              type="number"
              step="0.01"
              placeholder="salary"
              className="peer border-none py-1 px-3"
            />
          </div>
          <div>
            <label htmlFor="status">status: </label>
            <select
              name="status"
              id="status"
              defaultValue=""
              className="border-none py-1 px-3"
            >
              <option value="" disabled>
                Select a status
              </option>
              <option value="em analise">em analise</option>
              <option value="aprovado">aprovado</option>
              <option value="reprovado">reprovado</option>
              <option value="contratado">contratado</option>
            </select>
          </div>
        </div>
        {"}"}
      </section>
      <Link href="/">Cancel</Link>
      <Button type="submit">Create</Button>
    </form>
  );
}
