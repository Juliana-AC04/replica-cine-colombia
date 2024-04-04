import { Outlet } from "react-router";
import TicketDetails from "./TicketDetails";

export default function Summary() {
  return (
    <>
      <div>
        <TicketDetails/>
      </div>
      <Outlet/>
    </>
  );
}
