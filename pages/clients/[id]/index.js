import Router from "next/router"
import { useRouter } from "next/router"
const ClientsProjectPage = () => {
    const router = useRouter()
    const loadProjectHandler = () => {
        // data fetching 
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {id: 'max',clientprojectid: 'projecta'}
        })
    }
    return(
        <div>
        <h1>The Projects of a Given Client</h1>
        <button onClick = {loadProjectHandler}>Load Project A</button>
        </div>
    )
}
export default ClientsProjectPage