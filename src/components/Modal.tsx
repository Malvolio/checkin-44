import { FC, PropsWithChildren, useCallback, useState } from "react";
import classnames from "classnames";
import CloseIcon from "./CloseIcon";

export const useModal = () => {
  const [showing, setShowing] = useState(false);
  const open = useCallback(() => {
    setShowing(true);
  }, []);
  const close = useCallback(() => {
    setShowing(false);
  }, []);

  return { showing, open, close, modalOpts: { showing, close } };
};
const Modal: FC<PropsWithChildren<{ showing: boolean; close: () => void }>> = ({
  children,
  showing,
  close,
}) => (
  <div
    className={classnames(
      "fixed top-0 left-0 w-screen h-screen flex items-center justify-center ease-in-out duration-100",
      {
        "scale-0": !showing,
      }
    )}
    onClick={close}
  >
    <div
      className="bg-teal-100 text-teal-800 w-full lg:w-1/2 h-fit py-12 px-2  lg:px-12  rounded-lg shadow-lg border border-1 border-gray-200 relative"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div
        className="absolute top-0 right-0 p-3 cursor-pointer text-gray-500 hover:text-gray-900"
        onClick={close}
      >
        <CloseIcon />
      </div>
      {children}
    </div>
  </div>
);
export default Modal;
