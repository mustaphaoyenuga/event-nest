import { mockEvents } from "@/app/_mock/events"
import EventCard from "@/components/EventCard"

const AllEventsPage = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl'>Here are all our Events</h1>
      <hr className="my-4" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center md:justify-start">
        {mockEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))} 
      </div>
    </div>
  )
}

export default AllEventsPage