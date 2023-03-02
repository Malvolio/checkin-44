import { FC, useState } from "react";
import { Attendee, StationId } from "../Attendee";
import Modal from "./Modal";
import Button from "./Button";
import Switch from "./Switch";

type EditAttendeeProps = {
  attendee: Attendee | null;
  stationId: StationId;
  close: () => void;
  updateAttendee: (attendee: Attendee) => void;
};
const EditAttendeeBody: FC<EditAttendeeProps & { attendee: Attendee }> = ({
  attendee,
  stationId,
  updateAttendee,
  close,
}) => {
  const [note, setNote] = useState(attendee.notes[stationId]);
  const [checkOff, setCheckOff] = useState(attendee.checkoff[stationId]);

  const checkIn = () => {
    updateAttendee({
      ...attendee,
      checkoff: {
        ...attendee.checkoff,
        [stationId]: checkOff,
      },
      notes: { ...attendee.notes, [stationId]: note || "" },
    });

    close();
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between mb-5 pb-5 lg:mb-10 lg:pb-10 border-gray-800 border border-t-0 border-r-0 border-l-0 border-1">
        <div className="text-xl font-medium mb-2">
          {attendee.firstName} {attendee.lastName}
        </div>
        <div className="flex flex-row space-x-4">
          <div>{checkOff ? "Checked in" : "Not checked in"}</div>
          <Switch value={checkOff} onChange={setCheckOff} />
        </div>
      </div>
      <h2 className="text-sm font-bold">Notes</h2>
      <textarea
        className="w-full px-4 py-2 my-2 text-sm border rounded-md focus:outline-none focus:ring-4 focus:ring-gray-800 bg-gray-100 border-gray-500"
        rows={3}
        placeholder="Add note..."
        onChange={(e) => setNote(e.currentTarget.value)}
        value={note || attendee.notes[stationId] || ""}
      />
      <div className="flex justify-end space-x-4">
        <Button role="secondary" onClick={close}>
          Cancel
        </Button>
        <Button role="primary" onClick={checkIn}>
          Save
        </Button>
      </div>
    </div>
  );
};

const EditAttendee: FC<EditAttendeeProps> = ({ attendee, close, ...props }) => (
  <Modal showing={!!attendee} close={close}>
    {attendee && (
      <EditAttendeeBody attendee={attendee} close={close} {...props} />
    )}
  </Modal>
);

export default EditAttendee;
