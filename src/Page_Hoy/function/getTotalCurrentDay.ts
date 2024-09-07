import { TicketData, TicketParse } from "../../../types/ticketData";
import { parse } from 'date-fns';
import { isCurrentDay } from "../../helpers/isCurrentDay";
import { getTicketParse } from "../../helpers/getTicketParse";
import { getDataInHour } from "../../helpers/getDataInHour";

export const getTotalCurrentDay = (tickets: TicketParse[] | null) => {
    if (tickets === null) return null;

    const ticketsToday = tickets.filter( ticket => isCurrentDay(ticket.date))
    
    const ticketDay = ticketsToday.filter(({ date }) => date.getHours() > 0 && date.getHours() < 15);
    const ticketNight = ticketsToday.filter(({ date }) => date.getHours() > 15 && date.getHours() < 24);

    const totalDay = ticketDay.reduce((prev, curr)=>prev+curr.total,0);
    const totalNight = ticketNight.reduce((prev, curr)=>prev+curr.total,0);

    return {
      ticketsParse: ticketsToday,

      totalDay,
      totalNight,

      ticketDay,
      ticketNight,

      totalToday: totalDay + totalNight,
    }
}