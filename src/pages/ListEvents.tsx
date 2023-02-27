import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddButton from "../components/AddButton";
import EditIcon from "../components/EditIcon";
import Hoverable from "../components/Hoverable";
import Page from "../components/Page";
import useEventStore from "../useEventStore";

export const ListEvents: FC<{ edit?: boolean }> = ({ edit }) => {
  const { events, addEvent } = useEventStore();
  const navigate = useNavigate();

  return (
    <Page
      title="Events"
      links={[
        edit
          ? { to: `/`, children: "Done editing events" }
          : { to: `/edit`, children: "Edit events" },
      ]}
    >
      <div className="flex flex-col items-center px-20 py-5">
        <ul className="list-disc m-3">
          {events.map(({ id, name }) => (
            <li key={id} className="flex flex-row text-xl">
              <Link to={`/event/${id}`}>{name}</Link>
              {edit ? (
                <Hoverable onClick={() => navigate(`/event/${id}/edit`)}>
                  <div className="text-sm ml-2 h-5 w-5">
                    <EditIcon />
                  </div>
                </Hoverable>
              ) : (
                <div className="text-sm ml-2 h-5 w-5"></div>
              )}
            </li>
          ))}
        </ul>
        {edit && (
          <AddButton
            label="Add Event"
            onClick={async () => {
              const { id } = await addEvent("");
              navigate(`/event/${id}/edit`);
            }}
          />
        )}
      </div>
    </Page>
  );
};
