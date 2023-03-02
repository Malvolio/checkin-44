import classnames from "classnames";
import { FC } from "react";

const Switch: FC<{ value: boolean; onChange: (_: boolean) => void }> = ({
  value,
  onChange,
}) => (
  <div
    className={classnames(
      "md:w-14 md:h-7 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer",
      {
        "bg-blue-200": !value,
        "bg-green-200": value,
      }
    )}
    onClick={() => {
      onChange(!value);
    }}
  >
    <div
      className={classnames(
        "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-200 ease-in-out",
        { transform: value, "translate-x-5": value }
      )}
    ></div>
  </div>
);

export default Switch;
