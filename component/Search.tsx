"use client";

import { IoSearch } from "react-icons/io5"
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const {replace} = useRouter();

    const handleSearch = useDebouncedCallback ((term: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", "1");
        if (term) {
            params.set("search", term);
        } else {
            params.delete("search");
        }
        replace (`${pathName}?${params.toString()}`);
    }, 500);

  return (
    <div className="relative flex flex-1 items-center overflow-hidden">
        <input type="text" className="w-full rounded-lg bg-gray-300 px-4 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-700" placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("search")?.toString()} />
        <IoSearch className="absolute right-4" />
    </div>
  )
}

export default Search