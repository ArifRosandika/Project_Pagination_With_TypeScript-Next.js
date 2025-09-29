"use client";

import React from "react";
import { useActionState } from "react";
import { SubmitButton } from "./Button";
import { UpdateContact } from "@/library/actions";
import type { Contact } from "@prisma/client";
import Link from "next/link";

const EditForm = ({ contact }: { contact: Contact }) => {
  const UpdateContactWithid = UpdateContact.bind(null, contact.id);
  const [state, formActions] = useActionState(UpdateContactWithid, null);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white/10 backdrop-blur-lg p-8 w-96 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-5">Edit Contact</h1>
        <form action={formActions} className="flex flex-col gap-5">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-bold text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Input your name"
              className="border border-gray-500 bg-white/15 placeholder-gray-400 w-full
            rounded-lg px-4 py-2 focus:outline-none focus:ring-2 
            focus:ring-gray-700 focus:border-transparent"
              defaultValue={contact.name}
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="text-red-500 text-xs mt-1">{state?.Error?.name}</p>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-bold text-gray-900"
            >
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Input your phone number"
              className="border border-gray-500 bg-white/15 placeholder-gray-400 w-full
            rounded-lg px-4 py-2 focus:outline-none focus:ring-2 
            focus:ring-gray-700 focus:border-transparent"
              defaultValue={contact.phone}
            />
            <div id="phone-error" aria-live="polite" aria-atomic="true">
              <p className="text-red-500 text-xs mt-1">{state?.Error?.phone}</p>
            </div>
          </div>
          <div id="error-message" aria-live="polite" aria-atomic="true">
            <p className="text-red-500 text-xs mt-1">
              {state?.Error?.global?.[0]}
            </p>
          </div>
          <SubmitButton label="update" />
          <button
            type="reset"
            className="bg-red-500 hover:bg-red-700 text-white font-bold mt-3 py-2 px-4 rounded"
          >
            <Link href="/contacts">Cancel</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
