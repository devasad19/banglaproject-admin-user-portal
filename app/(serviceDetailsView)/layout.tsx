import React from "react";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <section className="2xl:container 2xl:mx-auto flex">
        <section className="bg-red- w-full max-h-screen overflow-auto">
          {children}
        </section>
      </section>
    </>
  );
};
export default Layout;
