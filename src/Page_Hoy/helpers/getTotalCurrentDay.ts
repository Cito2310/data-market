import { TicketData } from "../../../types/ticketData";
import { parse } from 'date-fns';
import { isCurrentDay } from "../../helpers/isCurrentDay";
import { getTicketParse } from "../../helpers/getTicketParse";
import { getDataInHour } from "../../helpers/getDataInHour";

export const getTotalCurrentDay = (tickets: TicketData[] | null) => {
    if (tickets === null) return null;

    const ticketsToday = tickets.filter( ticket => {
      // @ts-ignore
      const dateTicket = parse(ticket.date, 'dd-MM-yyyy HH:mm:ss', new Date());
      
      return isCurrentDay(dateTicket);
    })
    
    const ticketParse = getTicketParse( ticketsToday );

    const ticketDay = ticketParse.filter(({ date }) => date.getHours() > 0 && date.getHours() < 15);
    const ticketNight = ticketParse.filter(({ date }) => date.getHours() > 15 && date.getHours() < 24);

    const totalDay = ticketDay.reduce((prev, curr)=>prev+curr.total,0);
    const totalNight = ticketNight.reduce((prev, curr)=>prev+curr.total,0);

    const ticketForHour = getDataInHour(ticketParse, "60");
    const ticketFor15Minute = getDataInHour(ticketParse, "15");

    return {
      ticketsParse: ticketParse,

      ticketForHour,
      ticketFor15Minute,

      totalDay,
      totalNight,

      ticketDay,
      ticketNight,

      totalToday: totalDay + totalNight,
    }
}