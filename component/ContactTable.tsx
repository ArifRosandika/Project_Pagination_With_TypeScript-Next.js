"use client";

import { EditButton } from "./Button";
import { formatDate } from "@/library/utils";
import useSWR, { mutate } from "swr";
import { IoTrash } from "react-icons/io5";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ContactTable({
  search,
  currentPage,
}: {
  search: string;
  currentPage: number;
}) {
  const { data, error, isLoading } = useSWR(
    `/api/contacts?search=${search}&page=${currentPage}`,
    fetcher
  );

  const contacts = data?.data || [];

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Failed to load contacts</p>;

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/contacts/${id}`, { method: "DELETE" });
    if (res.ok) {
      mutate(`/api/contacts?search=${search}&page=${currentPage}`); // refresh data
    } else {
      alert("Failed to delete contact");
    }
  };

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left text-gray-600">
        <thead className="text-xs uppercase bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <tr>
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Phone</th>
            <th className="px-6 py-3">Created At</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact: any, index: number) => (
            <tr
              key={contact.id}
              className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition"
            >
              <td className="py-3 px-6 font-medium text-gray-900">
                {index + 1}
              </td>
              <td className="py-3 px-6">{contact.name}</td>
              <td className="py-3 px-6">{contact.phone}</td>
              <td className="py-3 px-6 text-gray-500">
                {formatDate(contact.createdAt.toString())}
              </td>
              <td className="py-3 px-6 flex gap-2 justify-center">
                <EditButton id={contact.id} />
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md transition"
                >
                  <IoTrash size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};