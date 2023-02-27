export type Draft<T> = Omit<T, "id">;

export type StationId = number;

export type Attendee = {
  id: number;
  firstName: string;
  lastName: string;
  checkoff: Record<StationId, boolean>;
  notes: Record<StationId, string>;
};
export type DraftAttendee = Draft<Attendee>;

export type Station = {
  id: StationId;
  name: string;
};

export type DraftStation = Draft<Station>;

export type Event = {
  id: number;
  name: string;
  attendees: Attendee[];
  stations: Station[];
};

export type DraftEvent = Draft<Event>;

export const addStation = (event: Event, station: DraftStation): Event => ({
  ...event,
  stations: [...event.stations, { ...station, id: event.stations.length + 1 }],
});

export const setAttendees = (
  event: Event,
  attendees: DraftAttendee[]
): Event => ({
  ...event,
  attendees: attendees.map((attendee, id) => ({ ...attendee, id })),
});

export const alterAttendee = (event: Event, attendee: Attendee): Event => ({
  ...event,
  attendees: event.attendees.map((oldAttendee) =>
    oldAttendee.id === attendee.id ? attendee : oldAttendee
  ),
});
export const alterStation = (event: Event, station: Station): Event => ({
  ...event,
  stations: event.stations.map((oldStation) =>
    oldStation.id === station.id ? station : oldStation
  ),
});

export const setEventName = (event: Event, name: string): Event => ({
  ...event,
  name,
});
