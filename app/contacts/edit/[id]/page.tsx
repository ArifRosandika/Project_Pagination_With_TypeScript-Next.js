import { getContactId } from "@/library/data";
import { notFound } from "next/navigation";
import EditForm from "@/component/EditForm";

const UpdateContactPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const contact = await getContactId(id);

  if (!contact) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto mt-5">
        <EditForm contact={contact} />
    </div>
  );
};

export default UpdateContactPage;
