import React from 'react'
import Tables from '../Components/TicketTable'
import TicketRecord from '../Components/TicketRecord'
import Topbar from '../Components/Topbar'
import Sidebar from '../Components/Sidebar'

const MyTickets = () => {
  return (
    <div>
        <Topbar/>
        <Sidebar/>
        <TicketRecord/>
       {/* <Tables/>  */}

    </div>
  )
}

export default MyTickets