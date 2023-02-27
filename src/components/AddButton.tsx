import { FC } from "react";
import AddIcon from "./AddIcon";

const AddButton: FC<{ label: string; onClick: () => void }> = ({
  label,
  onClick,
}) => (
  <div className="flex flex-row justify-start ml-2">
    <div
      onClick={onClick}
      className="flex flex-row justify-center font-semibold border border-1 px-4 py-2 border-teal-600 rounded-lg hover:bg-teal-300 cursor-pointer"
    >
      <div className="h-6 w-6 mr-3">
        <AddIcon />
      </div>
      {label}
    </div>
  </div>
);
export default AddButton;
