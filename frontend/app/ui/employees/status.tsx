import {
  IconCheck,
  IconClock,
  IconX,
  IconRosetteDiscountCheck,
} from "@tabler/icons-react";
import clsx from "clsx";

export default function EmployeeStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-xs",
        {
          "bg-gray-100 text-gray-500": status === "EM_ANALISE",
          "bg-green-500 text-white": status === "APROVADO",
          "bg-red-500 text-white": status === "REPROVADO",
          "bg-blue-500 text-white": status === "CONTRATADO",
        },
      )}
    >
      {status === "EM_ANALISE" ? (
        <>
          <IconClock className="mx-1 w-4 text-gray-500" /> Em Analise
        </>
      ) : null}
      {status === "APROVADO" ? (
        <>
          <IconCheck className="mx-1 w-4 text-white" /> Aprovado
        </>
      ) : null}
      {status === "REPROVADO" ? (
        <>
          <IconX className="mx-1 w-4 text-white" /> Reprovado
        </>
      ) : null}
      {status === "CONTRATADO" ? (
        <>
          <IconRosetteDiscountCheck className="mx-1 w-4 text-white" />{" "}
          Contratado
        </>
      ) : null}
    </span>
  );
}
