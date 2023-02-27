import { FC, PropsWithChildren } from "react";
import classnames from "classnames";

const ButtonRoles = {
  primary: "bg-green-500 text-white hover:bg-green-600 border-green-200",
  secondary:
    "text-base bg-slate-500 text-white hover:bg-slate-600 focus:bg-slate-600 active:bg-slate-700 ring-0",
  error:
    "text-base bg-read-500 text-white hover:bg-read-600 focus:bg-read-600 active:bg-read-700",
} as const;
const Button: FC<
  PropsWithChildren<{
    onClick: () => void;
    className?: string;
    role?: keyof typeof ButtonRoles;
  }>
> = ({ onClick, children, className, role = "secondary" }) => (
  <button
    className={classnames(
      "px-2 py-1 rounded text-base",
      ButtonRoles[role],
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
);
export default Button;
