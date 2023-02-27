import { FC, useEffect, useRef, useState } from "react";
import EditIcon from "./EditIcon";
import CancelIcon from "./CancelIcon";
import Hoverable from "./Hoverable";
import classnames from "classnames";

const useFocusOn = (doFocus: boolean) => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (doFocus) {
      setTimeout(() => {
        ref.current?.focus();
      }, 100);
    }
  });
  return ref;
};
const EditText: FC<{
  value: string;
  editable?: boolean;
  defaultEdit?: boolean;
  className?: string;
  onChange: (_: string) => void;
}> = ({ value, editable, defaultEdit, className, onChange }) => {
  const [edit, setEdit] = useState(!!defaultEdit);
  const ref = useFocusOn(edit);
  const [editValue, setEditValue] = useState(value);

  const doCancel = () => {
    if (value) {
      setEditValue(value);
      setEdit(false);
    }
  };
  const doExit = () => {
    if (editValue) {
      onChange(editValue);
      setEdit(false);
    }
  };
  return editable ? (
    edit ? (
      <div className="flex flex-row items-baseline">
        <input
          ref={ref}
          onChange={(e) => setEditValue(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              doExit();
            }
          }}
          onBlur={doExit}
          className={classnames(
            "px-2 border-2 border-red-500 focus:border-transparent rounded w-80 bg-gray-300",
            className
          )}
          value={editValue}
        />
        <Hoverable onClick={doCancel}>
          <CancelIcon />
        </Hoverable>
      </div>
    ) : (
      <div className="flex flex-row items-baseline">
        <div
          className={classnames("px-2 border-2 border-transparent", className)}
        >
          {value}
        </div>
        <Hoverable onClick={() => setEdit(true)}>
          <EditIcon />
        </Hoverable>
      </div>
    )
  ) : (
    <div className="flex flex-row items-baseline">
      <div
        className={classnames("px-2 border-2 border-transparent", className)}
      >
        {value}
      </div>
      <div className="h-4 w-4 mr-2">&nbsp;</div>
    </div>
  );
};
export default EditText;
