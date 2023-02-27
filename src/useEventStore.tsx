import { create } from "zustand";
import { Event } from "./Attendee";
import { Events } from "./MockData";

interface EventStore {
  events: Event[];
  addEvent: (name: string) => Promise<Event>;
  updateEvent: (event: Event) => void;
  getEvent: (eventId: number) => Event | undefined;
}

const useEventStore = create<EventStore>((set, get) => ({
  events: Events,
  addEvent: (name: string) => {
    return new Promise((resolve) => {
      set((state) => {
        const event = {
          id: state.events.length,
          name,
          attendees: [],
          stations: [],
        };
        resolve(event);
        return {
          events: [...state.events, event],
        };
      });
    });
  },
  updateEvent: (updatedEvent: Event) => {
    set((state) => ({
      events: state.events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      ),
    }));
  },
  getEvent: (eventId: number) => get().events.find(({ id }) => id === eventId),
}));

export default useEventStore;
