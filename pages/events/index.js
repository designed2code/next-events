import { getAllEvents } from "../../dummy-data"
import EventList from '../../components/events/EventList'
import EventsSearch from "../../components/events/events-search"
import { useRouter } from "next/router"
const AllEventsPage = () => {
    const router = useRouter()
    const events = getAllEvents()
    const findEventsHandler = (year,month) => {
        const path = `/events/${year}/${month}`
        router.push(path)
    }
    return(
        <>
            <EventsSearch onSearch = {findEventsHandler}/>
            <EventList items = {events}/>
        </>
    )
}
export default AllEventsPage