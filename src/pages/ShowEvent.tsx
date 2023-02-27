import { FC } from "react";
import { useParams, Link } from "react-router-dom";
import {
  addStation,
  alterStation,
  DraftAttendee,
  setAttendees,
  setEventName,
} from "../Attendee";
import CSVUploader from "../components/CSVUploader";
import pluralize from "pluralize";
import useEventStore from "../useEventStore";
import EditText from "../components/EditText";
import AddButton from "../components/AddButton";
import Page from "../components/Page";

const ShowEvent: FC<{ edit?: boolean }> = ({ edit }) => {
  const { eid } = useParams();
  const { getEvent, updateEvent } = useEventStore();
  const event = getEvent(Number(eid));
  if (!event) {
    return <>Not found</>;
  }
  const cannotExit = edit && !event.name;
  const onUpload = (at: Record<string, string | undefined>[]) => {
    updateEvent(
      setAttendees(
        event,
        at
          .filter((a) => !!(a["first_name"] || a["last_name"]))
          .map(
            (a): DraftAttendee => ({
              firstName: a["first_name"] || "",
              lastName: a["last_name"] || "",
              checkoff: {},
              notes: {},
            })
          )
      )
    );
  };
  return (
    <Page
      title={
        <div className="flex flex-row items-baseline">
          <div className="text-3xl mr-2">Event:</div>
          <EditText
            className="text-bold text-3xl"
            value={event.name}
            editable={edit}
            defaultEdit={!event.name}
            onChange={(name) => {
              updateEvent(setEventName(event, name));
            }}
          />
        </div>
      }
      links={[
        edit
          ? {
              to: `/event/${event.id}`,
              children: "Done editing",
              disabled: cannotExit,
            }
          : { to: `/event/${event.id}/edit`, children: "Edit this event" },
        { to: `/`, children: "All events", disabled: cannotExit },
      ]}
    >
      <div className="grid grid-cols-2">
        <div className="px-12 py-4">
          <h2 className="text-xl text-semibold my-5">Stations</h2>
          <ul className="m-3">
            {event.stations.map((station) => (
              <li key={station.id}>
                {edit ? (
                  <EditText
                    value={station.name}
                    onChange={(name) => {
                      updateEvent(alterStation(event, { ...station, name }));
                    }}
                    editable={edit}
                  />
                ) : (
                  <Link to={`/event/${event.id}/checkin/${station.id}`}>
                    {station.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {edit && (
            <AddButton
              label="Add Station"
              onClick={() => {
                updateEvent(addStation(event, { name: "New Station" }));
              }}
            />
          )}
        </div>
        <div className="px-12 py-4">
          <h2 className="text-xl text-semibold my-5">Attendees</h2>

          <div className="m-2">
            {pluralize("attendees", event.attendees.length, true)} uploaded
          </div>
          {edit && (
            <div>
              <CSVUploader onUpload={onUpload} />
            </div>
          )}
        </div>
      </div>
    </Page>
  );
};
export default ShowEvent;
