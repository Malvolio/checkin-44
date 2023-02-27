import { FC, PropsWithChildren } from "react";

const Hoverable: FC<PropsWithChildren<{ onClick: () => void }>> = ({
  onClick,
  children,
}) => (
  <div
    className="h-4 w-4 ml-2 cursor-pointer text-gray-500 hover:text-gray-900"
    onClick={onClick}
  >
    {children}
  </div>
);
export default Hoverable;
