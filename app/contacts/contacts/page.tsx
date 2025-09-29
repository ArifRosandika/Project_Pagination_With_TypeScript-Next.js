import ContactTable from "@/component/ContactTable";
import Search from "@/component/Search";
import { CreateButton } from "@/component/Button";

const Contact = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-4">
        <div className="flex justify-center items-center gap-1 mb-5">
            <Search />
            <CreateButton />
        </div>
        <ContactTable search="" currentPage={1} />
    </div>
  )
}

export default Contact;