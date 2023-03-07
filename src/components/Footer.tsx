import classnames from "classnames";
import { FC, Fragment, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogInCode from "./LogInCode";
import Modal from "./Modal";

let LoggedIn = false;

export type FooterLinkDescription = {
  to: string;
  children: ReactNode;
  disabled?: boolean;
  edit?: boolean;
};
const FooterLink: FC<{ link: FooterLinkDescription }> = ({
  link: { to, disabled, children, edit },
}) => {
  const navigate = useNavigate();
  const [showing, setShowing] = useState(false);
  const close = () => {
    setShowing(false);
  };
  const loggedIn = () => {
    LoggedIn = true;
    setShowing(false);
    navigate(to);
  };
  const onClick = () => {
    if (edit && !LoggedIn) {
      setShowing(true);
    } else {
      navigate(to);
    }
  };
  return (
    <div
      className={classnames("text-sm hover:text-cyan-200", {
        "text-cyan-400": !disabled,
        "text-cyan-900": disabled,
        "cursor-pointer": !disabled,
      })}
      onClick={onClick}
      style={{ pointerEvents: disabled ? "none" : undefined }}
    >
      <Modal showing={showing} close={close}>
        <LogInCode cancel={close} loggedIn={loggedIn} />
      </Modal>
      {children}
    </div>
  );
};

const Footer: FC<{ links: FooterLinkDescription[] }> = ({ links }) => (
  <div className="absolute left-0 bottom-0 w-full bg-cyan-700 flex flex-row justify-end p-3">
    {links.map((link, index) => (
      <Fragment key={index}>
        {index ? <div className="text-sm mx-4">|</div> : null}
        <FooterLink link={link} />
      </Fragment>
    ))}
  </div>
);
export default Footer;
