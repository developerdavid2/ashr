"use client";

import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlsProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Always show first 2, last 2, current ±1, and smart range
  const getVisiblePages = () => {
    const pages: (number | null)[] = [];
    const delta = 1;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        i === currentPage ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i);
      } else if (
        pages[pages.length - 1] !== null &&
        pages[pages.length - 1] !== i - 1
      ) {
        pages.push(null); // ellipsis marker for ellipsis
      }
    }

    // Clean up consecutive nulls
    return pages.filter((page, index) => {
      if (page === null) {
        return (
          pages[index - 1] !== null &&
          (pages[index + 1] === null || pages[index + 1] === undefined)
        );
      }
      return true;
    });
  };

  const visiblePages = getVisiblePages();

  const handlePageChange = (page: number) => {
    onPageChange(page);
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (totalPages <= 1) return null;

  return (
    <Pagination className="mt-16">
      <PaginationContent className="flex flex-wrap items-center gap-2 justify-center">
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer"
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : undefined}
          />
        </PaginationItem>

        {/* Page Numbers */}
        {visiblePages.map((page, index) => {
          if (page === null) {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <div className="relative">
                  <PaginationEllipsis
                    className="cursor-pointer hover:text-[#A9802C]"
                    onClick={() => setIsOpen(true)}
                  />

                  {/* Hidden Select Trigger */}
                  <Select open={isOpen} onOpenChange={setIsOpen}>
                    <SelectTrigger className="w-20 opacity-0 absolute inset-0" />
                    <SelectContent className="max-h-60 overflow-y-auto">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (p) => (
                          <SelectItem
                            key={p}
                            value={p.toString()}
                            onClick={() => {
                              handlePageChange(p);
                              setIsOpen(false);
                            }}
                          >
                            Page {p}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={page === currentPage}
                className={cn(
                  `cursor-pointer`,
                  page === currentPage && `bg-[#A9802C] text-white`,
                )}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            className="cursor-pointer"
            onClick={() =>
              handlePageChange(Math.min(totalPages, currentPage + 1))
            }
            aria-disabled={currentPage === totalPages}
            tabIndex={currentPage === totalPages ? -1 : undefined}
          />
        </PaginationItem>

        {/* Optional: Direct Jump Select (Always visible on lg+) */}
        <div className="hidden lg:flex items-center gap-3 ml-6">
          <span className="text-sm text-gray-600">Jump to</span>
          <Select
            value={currentPage.toString()}
            onValueChange={(value) => handlePageChange(Number(value))}
          >
            <SelectTrigger className="w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <SelectItem key={p} value={p.toString()}>
                  Page {p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </PaginationContent>
    </Pagination>
  );
}
