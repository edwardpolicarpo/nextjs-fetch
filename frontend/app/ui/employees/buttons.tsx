import { IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';
import Link from 'next/link';
import { deleteEmployee } from '@/app/lib/actions';

export function CreateButton() {
  return (
    <Link
      href="/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500"
    >
      <span className="hidden md:block">Create Employee</span>{' '}
      <IconPlus className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateButton({ id }: { id: string }) {
  return (
    <Link
      href={`/${id}`}
      className="flex h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400"
    >
      <span className="hidden md:block">Update Employee</span>{' '}
      <IconPencil className="w-5" />
    </Link>
  );
}

export function DeleteButton({ id }: { id: string }) {
  const deleteEmployeeWithId = deleteEmployee.bind(null, id);
  return (
    <form action={deleteEmployeeWithId}>
      <button type="submit" className="rounded-md border p-2 hover:bg-red-300">
        <span className="sr-only">Delete</span>
        <IconTrash className="w-5" />
      </button>
    </form>
  );
}
