import { NextResponse } from "next/server";
import { prisma } from "@/library/prisma";
import { getContactId } from "@/library/data";
import { notFound } from "next/navigation";
import EditForm from "@/component/EditForm";

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> } // 👈 perhatikan
) {
  const { id } = await context.params; // 👈 harus di-await

  try {
    const contact = await prisma.contact.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, contact });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to delete contact" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const body = await req.json(); // ambil data dari body (name, phone)

  try {
    const updated = await prisma.contact.update({
      where: { id },
      data: {
        name: body.name,
        phone: body.phone,
      },
    });

    return NextResponse.json({ success: true, contact: updated });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update contact" },
      { status: 500 }
    );
  }
}