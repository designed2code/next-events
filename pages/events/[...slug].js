import { useRouter } from "next/router"
import { getFilteredEvents } from "../../dummy-data"
import EventList from "../../components/events/EventList"
import ResultsTitle from '../../components/events/results-title'
import ErrorAlert from "../../components/ui/error-alert"
import Button from "../../components/ui/Button"
const FilteredEventsPage = () => {
    const router = useRouter()
    // To get the dynamic path
    const filteredData = router.query.slug
    console.log(filteredData);

    // Initially on the first render the filteredData is undefined therefore add a loading text
    if(!filteredData){
        return <p className = "center">Loading</p>
    }

    // Extracting the values from the array returned to us by router.query.slug
    const filteredYear = filteredData[0] 
    const filteredMonth = filteredData[1] 

    // Converting the filteredYear and filteredMonth to number
    const numYear = +filteredYear
    const numMonth = +filteredMonth

    // Check if  someone manually puts year and month as string
    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth<1 || numMonth>12){
        return <>
        <ErrorAlert><p>Invalid Filter</p></ErrorAlert>
        <div className = "center">
        <Button link = "/events">Show All Events</Button>
        </div>
        </>
    }
    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })
    console.log(filteredEvents);
    if(!filteredEvents || filteredEvents.length === 0){
        return<>
        <ErrorAlert><p>No Events Found for the choosen filter</p></ErrorAlert> 
        <div className = "center">
        <Button link = "/events">Show All Events</Button>
        </div>
        </>
    }
    const date = new Date(numYear,numMonth-1)
    return(
        <>
            <ResultsTitle date = {date}/>
            <EventList items = {filteredEvents}/>
        </>
    )
}
export default FilteredEventsPage