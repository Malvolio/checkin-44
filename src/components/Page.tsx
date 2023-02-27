import { FC, PropsWithChildren, ReactNode } from "react";
import Footer, { FooterLink } from "./Footer";

const Page: FC<
  PropsWithChildren<{ links: FooterLink[]; title: ReactNode }>
> = ({ title, children, links }) => (
  <div
    className="fixed inset-0 flex flex-col items-center justify-center bg-teal-300 text-teal-700"
    style={{ fontFamily: '"Lato"' }}
  >
    <div className="h-5/6 w-11/12 scroll-auto rounded-lg bg-teal-200">
      <div className="w-full border-b flex flex-row justify-center text-teal-800 border-teal-400 p-4 text-3xl font-300">
        {title}
      </div>
      {children}
    </div>
    <Footer links={links} />
  </div>
);
export default Page;
