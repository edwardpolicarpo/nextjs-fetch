import { IconCheck, IconClock, IconX, IconRosetteDiscountCheck } from '@tabler/icons-react';
import clsx from 'clsx';

export default function EmployeeStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'em analise',
          'bg-red-500 text-white': status === 'reprovado',
          'bg-green-500 text-white': status === 'aprovado',
          'bg-blue-500 text-white': status === 'contratado',
        },
      )}
    >
      {status === 'em analise' ? (
        <>
          Pending
          <IconClock className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'aprovado' ? (
        <>
          Approved
          <IconCheck className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'reprovado' ? (
        <>
          Rejected
          <IconX className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'contratado' ? (
        <>
          Contracted
          <IconRosetteDiscountCheck className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
