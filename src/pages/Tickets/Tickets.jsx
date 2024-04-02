import { Outlet } from 'react-router-dom'
import TicketSelection from '../../components/TicketSelection'
import Summary from '../../components/Summary'

export default function Tickets() {
  return (
    <div className="flex flex-col sm:flex-row">
      <TicketSelection/>
      <Summary />
      <Outlet />
    </div>
  )
}
