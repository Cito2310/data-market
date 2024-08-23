import { TicketData } from "../../../types/ticketData";
import { parse } from 'date-fns';

export const getTotalCurrentDay = (tickets: TicketData[] | null) => {
    if (tickets === null) return null;

    const dateToday = new Date();
    
    const ticketsToday = tickets.filter( ticket => {
      // @ts-ignore
      const dateTicket = parse(ticket.date, 'dd-MM-yyyy HH:mm:ss', new Date());

      return (
        dateTicket.getFullYear() === dateToday.getFullYear() &&
        dateTicket.getMonth() === dateToday.getMonth() &&
        dateTicket.getDate() === dateToday.getDate()
      )
    })

    const result = ticketsToday.reduce((prev, curr) => {
      const totalArr = curr.products.map( product => product.total );
      const sum = totalArr.reduce((prev, curr) => prev+curr ,0);

      return prev+sum;
    }, 0)

    return result;
}