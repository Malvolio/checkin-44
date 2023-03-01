import { FC, useState } from "react";
import { Attendee, StationId } from "../Attendee";
import Modal from "./Modal";
import Button from "./Button";

const EditAttendee: FC<{
  attendee: Attendee | null;
  stationId: StationId;
  close: () => void;
  updateAttendee: (attendee: Attendee) => void;
}> = ({ attendee, stationId, updateAttendee, close }) => {
  const [note, setNote] = useState(attendee?.notes[stationId]);
  const doClose = () => {
    setNote("");
    close();
  };
  const checkOff = () => {
    if (attendee) {
      updateAttendee({
        ...attendee,
        checkoff: {
          ...attendee.checkoff,
          [stationId]: !attendee.checkoff[stationId],
        },
        notes: { ...attendee.notes, [stationId]: note || "" },
      });
    }
    doClose();
  };

  return (
    <Modal showing={!!attendee} close={doClose}>
      <div>
        <div className="flex flex-col lg:flex-row justify-between mb-5 pb-5 lg:mb-10 lg:pb-10 border-gray-800 border border-t-0 border-r-0 border-l-0 border-1">
          <div className="text-xl font-medium mb-2">
            {attendee?.firstName} {attendee?.lastName}
          </div>
          <Button role="primary" onClick={checkOff}>
            {attendee?.checkoff[stationId] ? "Un-" : ""}Check In
          </Button>
        </div>
        <h2 className="text-sm font-bold">Notes</h2>
        <textarea
          className="w-full px-4 py-2 my-2 text-sm border rounded-md focus:outline-none focus:ring-4 focus:ring-gray-800 bg-gray-100 border-gray-500"
          rows={3}
          placeholder="Add note..."
          onChange={(e) => setNote(e.currentTarget.value)}
          value={note || attendee?.notes[stationId] || ""}
        />
        <div className="flex justify-end">
          <Button
            role="secondary"
            onClick={() => setNote(attendee?.notes[stationId])}
          >
            Reset
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default EditAttendee;
