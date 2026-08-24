import { IconPencil, IconTrash } from '@tabler/icons-react';
import Link from 'next/link';
import { deleteEmployee } from '@/app/lib/actions';

export function UpdateButton({ id }: { id: string }) {
  return (
    <Link
      href={`/${id}`}
      className="align-center flex"
    >
      <IconPencil className="h-full mr-3" />
      Edit
    </Link>
  );
}

export function DeleteButton({ id }: { id: string }) {
  const deleteEmployeeWithId = deleteEmployee.bind(null, id);
  return (
    <form action={deleteEmployeeWithId}>
      <button type="submit" className="align-center flex">
        <IconTrash className="h-full mr-3" />{' '}
        Delete
      </button>
    </form>
  );
}
