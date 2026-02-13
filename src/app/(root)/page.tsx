import EventCard from "@/components/EventCard";
import { mockEvents } from "../_mock/events";

export default function Home() {
  return (
    <section>
      <h1 className='font-bold text-2xl my-4'>Upcoming Events</h1>
      <hr className='my-4' />
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center md:justify-start'>
        {mockEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
