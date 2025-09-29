"use server";

import { z, ZodError, ZodIssue } from "zod";
import { prisma } from "@/library/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ContactSchema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters"),
  phone: z.string().min(8, "Phone must be at least 8 digits"),
});

export const saveContact = async (prevState: any, formData: FormData) => {
  const validateData = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateData.success) {
    const fieldErrors: Record<string, string[]> = {};

    (validateData.error as ZodError).issues.forEach((err) => {
      const path = err.path.join(".");
      if (!fieldErrors[path]) {
        fieldErrors[path] = [];
      }
      fieldErrors[path].push(err.message);
    });

    return { Error: fieldErrors };
  }

  try {
    await prisma.contact.create({
      data: {
        name: validateData.data.name,
        phone: validateData.data.phone,
      },
    });
  } catch {
    return { Error: { global: ["Failed to create contact"] } };
  }

  revalidatePath("/contacts");
  redirect("/contacts");
};

export const UpdateContact = async (
  id: string,
  prevState: any,
  formData: FormData
) => {
  const validateData = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateData.success) {
    const fieldErrors: Record<string, string[]> = {};

    (validateData.error as ZodError).issues.forEach((err) => {
      const path = err.path.join(".");
      if (!fieldErrors[path]) {
        fieldErrors[path] = [];
      }
      fieldErrors[path].push(err.message);
    });

    return { Error: fieldErrors };
  }

  try {
    await prisma.contact.update({
      data: {
        name: validateData.data.name,
        phone: validateData.data.phone,
      },
      where: {
        id,
      },
    });
  } catch {
    return { Error: { global: ["Failed to update contact"] } };
  }

  revalidatePath("/contacts");
  redirect("/contacts");
};
