import { NextResponse } from "next/server";
import { prisma } from "@/library/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = 10;

    const contacts = await prisma.contact.findMany({
      where: {
        OR: [
          {
            name: { contains: search, mode: "insensitive" },
          },
          {
            phone: { contains: search, mode: "insensitive" },
          },
        ],
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { createdAt: "desc" },
    });

    const total = await prisma.contact.count({
      where: {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { phone: { contains: search, mode: "insensitive" } },
        ],
      },
    });

    return NextResponse.json({ data: contacts, total, page, pageSize });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}
