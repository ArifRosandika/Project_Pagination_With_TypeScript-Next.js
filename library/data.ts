import { prisma } from "./prisma";
const ITEMS_PER_PAGE = 10;

export const getContacts = async (search: string, currentPage: number) => {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {
        const contacts = await prisma.contact.findMany({
            skip: offset,
            take: ITEMS_PER_PAGE,
            where: {
                OR: [
                    {
                        name: {
                            contains: search,
                            mode: "insensitive"
                        }
                    },
                    {
                        phone: {
                            contains: search,
                            mode: "insensitive"
                        }
                    }
                ]
            }
        });
        return contacts
    } catch (error) {
        throw new Error("Failed to fetch contacts");
    }
};

export const getContactId = async (id: string) => {
    try {
        const contact = await prisma.contact.findUnique({ where: { id } });
        return contact
    } catch (error) {
        throw new Error("Failed to fetch contact");
    }
};

export const getContactPages = async (search: string) => {
    try {
        const total = await prisma.contact.count({
            where: {
                OR: [
                    { name: { contains: search, mode: "insensitive" } },
                    { phone: { contains: search, mode: "insensitive" } },
                ],
            },
        });
        const pages = Math.ceil(total / ITEMS_PER_PAGE);
        return pages
    } catch (error) {
        throw new Error("Failed to fetch contact");
    }
};