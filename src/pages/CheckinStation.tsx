import * as React from "react";
import { FC, useRef, useState } from "react";
import { alterAttendee, Attendee } from "../Attendee";
import classnames from "classnames";
import useEventStore from "../useEventStore";
import { useParams } from "react-router-dom";
import EditAttendee from "../components/EditAttendee";
import Footer from "../components/Footer";

const CheckinButton: FC<{
  attendee: Attendee;
  onCheckin: () => void;
  onSelect: () => void;
  stationId: number;
}> = ({ attendee, onCheckin, onSelect, stationId }) => {
  const timeoutId = useRef<NodeJS.Timeout>();
  const checkedIn = !!attendee.checkoff[stationId];
  const hasNote = !checkedIn && !!attendee.notes[stationId];
  const untouched = !checkedIn && !hasNote;

  const handleClick = () => {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      if (checkedIn) {
        onSelect();
      } else {
        onCheckin();
      }
    }, 300);
  };

  const handleDoubleClick = () => {
    clearTimeout(timeoutId.current);
    onSelect();
  };

  return (
    <button
      className={classnames(
        "h-16 m-2 p-4 text-center rounded-xl transition-colors duration-200 ease-in-out focus:outline-0",
        {
          "text-gray-500 bg-gray-200 hover:bg-white focus:bg-white active:bg-white":
            untouched,
          "text-white bg-green-600 hover:bg-green-700 focus:bg-green-700 active:bg-green-700":
            checkedIn,
          "text-white bg-yellow-400 hover:bg-yellow-700 focus:bg-yellow-700 active:bg-yellow-700":
            hasNote,
        }
      )}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      {attendee.firstName} {attendee.lastName}
    </button>
  );
};

const CheckinStation: FC<{}> = () => {
  const { eid, sid } = useParams();
  const { getEvent, updateEvent } = useEventStore();
  const [search, setSearch] = useState("");

  const event = getEvent(Number(eid));
  const stationId = Number(sid);
  if (!event) {
    return <>not found</>;
  }

  const filteredAttendees = event.attendees.filter((attendee) =>
    (
      attendee.firstName.toLowerCase() + attendee.lastName.toLowerCase()
    ).includes(search.toLowerCase())
  );

  const [selectedAttendee, setSelectedAttendee] = useState<Attendee | null>(
    null
  );

  const updateAttendee = (attendee: Attendee) => {
    updateEvent(alterAttendee(event, attendee));
  };

  const checkIn = (attendee: Attendee) => {
    updateAttendee({
      ...attendee,
      checkoff: {
        ...attendee.checkoff,
        [stationId]: true,
      },
    });
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-amber-100">
      <EditAttendee
        attendee={selectedAttendee}
        close={() => setSelectedAttendee(null)}
        updateAttendee={updateAttendee}
        stationId={stationId}
      />
      <div className="w-full p-4">
        <input
          type="text"
          placeholder="Search attendees..."
          className="w-full px-6 py-2 text-lg rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 bg-gray-800 text-gray-100"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <div className="flex-1 flex flex-wrap p-4 overflow-y-auto">
          {filteredAttendees.map((attendee) => (
            <CheckinButton
              key={attendee.id}
              attendee={attendee}
              onCheckin={() => checkIn(attendee)}
              onSelect={() => setSelectedAttendee(attendee)}
              stationId={stationId}
            />
          ))}
        </div>
      </div>
      <Footer links={[{ to: `/event/${event.id}`, children: "Stations" }]} />
    </div>
  );
};

export default CheckinStation;
