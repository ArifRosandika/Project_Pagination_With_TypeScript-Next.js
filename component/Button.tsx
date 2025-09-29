"use client";

import Link from "next/link";
import { IoPencil } from "react-icons/io5";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import Image from "next/image";

export const CreateButton = () => {
  return (
    <Link href="/contacts/create">
      <button className="bg-orange-500 hover:bg-orange-700 rounded-md shadow-md transition">
        <Image
          src="/contact.png"
          alt="Add Contact"
          width={30}
          height={30}
        />
      </button>
    </Link>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link href={`/contacts/edit/${id}`}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <IoPencil size={20} />
      </button>
    </Link>
  );
};

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  const className = clsx(
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    { "opacity-50 cursor-progress": pending }
  );
  return (
    <button type="submit" disabled={pending} className={className}>
      {label === "save" ? (
        <span>{pending ? "Saving..." : "Save"}</span>
      ) : (
        <span>{pending ? "Updating..." : "Update"}</span>
      )}
    </button>
  );
};
