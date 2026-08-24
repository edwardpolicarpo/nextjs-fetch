"use client";

import { generatePagination } from "@/app/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function TablePagination({
  totalPages,
}: {
  totalPages: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <>
      <Pagination>
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious href={createPageURL(currentPage - 1)} />
            </PaginationItem>
          )}

          {allPages.map((page, index) => {
            let position: "first" | "last" | "single" | "middle" | undefined;

            if (index === 0) position = "first";
            if (index === allPages.length - 1) position = "last";
            if (allPages.length === 1) position = "single";
            if (page === "...") position = "middle";

            return (
              <PaginationItem key={`${page}-${index}`}>
                <PaginationNumber
                  href={createPageURL(page)}
                  page={page}
                  position={position}
                  isActive={currentPage === page}
                />
              </PaginationItem>
              );
            })}

          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext href={createPageURL(currentPage + 1)} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: "first" | "last" | "middle" | "single";
  isActive: boolean;
}) {
  return isActive || position === "middle" ? (
    <PaginationLink isActive href={href}>
      {page}
    </PaginationLink>
  ) : (
    <PaginationLink href={href}>{page}</PaginationLink>
  );
}
