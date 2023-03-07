import { ChangeEvent, FC, FormEvent, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const LogInCode: FC<{ cancel: () => void; loggedIn: () => void }> = ({
  cancel,
  loggedIn,
}) => {
  const [passcode, setPasscode] = useState("");
  const [showPasscode, setShowPasscode] = useState(false);
  const [error, setError] = useState("");

  const handlePasscodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasscode(e.target.value);
    setError("");
  };

  const handleShowPasscode = () => setShowPasscode(!showPasscode);

  const handleCancel = cancel;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passcode === "") {
      setError("Please enter a passcode");
    } else if (passcode !== "0304") {
      setError("Passcode is incorrect");
    } else {
      loggedIn();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 w-full">
      <h2 className="text-2xl font-bold mb-4">Log in</h2>
      <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <label className="block text-gray-700 font-bold mb-2">Passcode</label>
          <div className="flex items-center">
            <input
              type={showPasscode ? "text" : "password"}
              className={`rounded-full py-2 px-4 border ${
                error ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-blue-500 flex-1`}
              value={passcode}
              onChange={handlePasscodeChange}
            />
            <button type="button" className="p-2" onClick={handleShowPasscode}>
              {showPasscode ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
          {error && (
            <span className="text-red-500 text-sm">
              Please enter your passcode
            </span>
          )}
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-gray-200 rounded-full py-2 px-4 text-gray-700 hover:bg-gray-300"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 rounded-full py-2 px-4 text-white hover:bg-blue-600"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogInCode;
