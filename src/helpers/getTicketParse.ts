import { parse } from "date-fns";
import { TicketData } from "../../types/ticketData";
import { getRoundedMinute } from "./getRoundedMinute";

export const getTicketParse = (tickets: TicketData[]) => {
    return tickets.map(ticket => {
        // @ts-ignore
        const dateTicket = parse(ticket.date, 'dd-MM-yyyy HH:mm:ss', new Date());
        const sumTotal = ticket.products.reduce((prev, curr) => curr.total + prev, 0);

        const hour = dateTicket.getHours();
        const minute = dateTicket.getMinutes();
        const timeTotal = dateTicket.getTime();

        return {
        ...ticket,
        date: dateTicket,
        total: sumTotal,
        time: { 
            hour, minute, 
            timeTotal
        },
        }
    })
}