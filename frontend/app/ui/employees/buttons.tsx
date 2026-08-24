import { IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';
import Link from 'next/link';
import { deleteEmployee } from '@/app/lib/actions';

export function CreateButton() {
  return (
    <Link
      href="/create"
      className="flex h-10 items-center rounded-lg bg-primary/80 px-4 text-sm font-medium text-white transition-colors hover:bg-primary"
    >
      <span className="hidden md:block">Add</span>{' '}
      <IconPlus className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateButton({ id }: { id: string }) {
  return (
    <Link
      href={`/${id}`}
      className="align-center hover:bg-blue-400"
    >
      <IconPencil className="h-full" />{' '}
      Edit
    </Link>
  );
}

export function DeleteButton({ id }: { id: string }) {
  const deleteEmployeeWithId = deleteEmployee.bind(null, id);
  return (
    <form action={deleteEmployeeWithId}>
      <button type="submit" className="align-center hover:bg-red-300">
        <IconTrash className="h-full" />{' '}
        Delete
      </button>
    </form>
  );
}
