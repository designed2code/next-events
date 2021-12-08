import Link from 'next/link'
const ClientsPage = () => {
    const clients = 
    [
        {id: 'sac',name:'Sachin'},
        {id:'max',name:'maximilian'},
        {id:'manu',name:'manuel'}]
    return(
        <div>
        <h1>Clients Page</h1>
        <ul>
           {clients.map(client => <li key = {client.id}>
               {/* 1st method */}
               {/* <Link href = {`/clients/${client.id}`}>{client.name}</Link> */}
               
               {/* 2nd method */}
               <Link href = {{pathname: '/clients/[id]',query: {id: client.id}}}>{client.name}</Link>
           </li>)}
        </ul>
        </div>
    )
}
export default ClientsPage