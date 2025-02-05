import Sidebar from "./component/Sidebar";
import { ChildrenType } from "@/types/ChildrenType";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Layout = ({ children }: ChildrenType): JSX.Element => {
  let user;
  const userinfo = cookies().get("user");
  if (!userinfo) {
    redirect(process.env.NEXT_PUBLIC_PORTAL_URL + "/signin");
  }
  return (
    <>
      <section className="2xl:container 2xl:mx-auto flex">
        <Sidebar />
        <section className="bg-slate-100 w-full p-4 max-h-screen overflow-auto">
          {children}
        </section>
      </section>
    </>
  );
};
export default Layout;