"use client";

import React from "react";
import { saveContact } from "@/library/actions";
import { useActionState } from "react";
import { SubmitButton } from "./Button";    
import Link from "next/link";

const CreateForm = () => {
    const [state, formActions] = useActionState(saveContact, null);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white/10 backdrop-blur-lg p-8 w-96 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-5" >Create Contact</h1>
      <form action={formActions} className="flex flex-col gap-5">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border border-gray-500 bg-white/15 placeholder-gray-400 w-full
            rounded-lg px-4 py-2 focus:outline-none focus:ring-2 
            focus:ring-gray-700 focus:border-transparent"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="text-red-500 text-xs mt-1">{state?.Error?.name}</p>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="border border-gray-500 bg-white/15 placeholder-gray-400 w-full
            rounded-lg px-4 py-2 focus:outline-none focus:ring-2 
            focus:ring-grey-700 focus:border-transparent"
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="text-red-500 text-xs mt-1">{state?.Error?.phone}</p>
          </div>
        </div>
        <div id="error-message" aria-live="polite" aria-atomic="true">
          <p className="text-red-500 text-xs mt-1">{state?.Error?.global?.[0]}</p>
        </div>
        <SubmitButton label="save" />
        <button type="reset" className="bg-red-500 hover:bg-red-700 text-white font-bold mt-3 py-2 px-4 rounded">
        <Link href="/contacts">Cancel</Link></button>
      </form>
    </div>
    </div>
  );
};

export default CreateForm;