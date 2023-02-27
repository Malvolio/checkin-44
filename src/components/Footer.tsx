import classnames from "classnames";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

export type FooterLink = {
  to: string;
  children: ReactNode;
  disabled?: boolean;
};

const Footer: FC<{ links: FooterLink[] }> = ({ links }) => (
  <div className="absolute left-0 bottom-0 w-full bg-cyan-700 flex flex-row justify-end p-3">
    {links.map(({ to, disabled, children }, index) => (
      <>
        {index ? <div className="text-sm mx-4">|</div> : null}
        <Link
          className={classnames("text-sm hover:text-cyan-200", {
            "text-cyan-400": !disabled,
            "text-cyan-900": disabled,
          })}
          to={to}
          style={{ pointerEvents: disabled ? "none" : undefined }}
        >
          {children}
        </Link>
      </>
    ))}
  </div>
);
export default Footer;
