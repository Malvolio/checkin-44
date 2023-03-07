import { FC, PropsWithChildren, ReactNode } from "react";
import Footer, { FooterLinkDescription } from "./Footer";

const Page: FC<
  PropsWithChildren<{ links: FooterLinkDescription[]; title: ReactNode }>
> = ({ title, children, links }) => (
  <div
    className="fixed inset-0 flex flex-col items-center justify-center bg-gray-300 text-gray-700"
    style={{ fontFamily: '"Lato"' }}
  >
    <div className="h-5/6 w-11/12 scroll-auto rounded-lg bg-gray-200">
      <div className="w-full border-b flex flex-row justify-center text-gray-800 border-gray-400 p-4 text-3xl font-300">
        {title}
      </div>
      {children}
    </div>
    <Footer links={links} />
  </div>
);
export default Page;
