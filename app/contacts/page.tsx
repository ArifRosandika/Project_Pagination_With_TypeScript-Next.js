import ContactTable from "@/component/ContactTable";
import Search from "@/component/Search";
import { CreateButton } from "@/component/Button";
import { getContactPages } from "@/library/data";
import Pagination from "@/component/Pagination";
import { TableSkeleton } from "@/component/Skeleton";
import { Suspense } from "react";

export default async function Contacts({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; page?: string }>;
}) {
  const { search = "", page = "1" } = await searchParams;

  const currentPage = Number(page);

  const totalPages = await getContactPages(search);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <CreateButton />
        <Search />
      </div>
      <Suspense key={search + currentPage} fallback={<TableSkeleton />}>
        <ContactTable search={search} currentPage={currentPage} />
      </Suspense>
      <div className="flex justify-center mt-5">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
