import { generateHorary } from './generateHorary';
import { getRoundedMinute } from './getRoundedMinute';
export const getDataInHour = (tickets: any[] | undefined, rounded: "60" | "15" | "10" | "30") => {

    if (tickets === undefined) return []
  // @ts-ignore
    const horary = generateHorary("8:00", "22:00", Number(rounded))

    const objTicketForHour = tickets.reduce((prev: {[key: string]:{total: number, amount: number}}, ticket) => {
        const parseHour = `${String(ticket.time.hour).padStart(2,"0")}:${getRoundedMinute(ticket.time.minute, rounded)}`;
        if (prev[parseHour] === undefined) {console.log(prev, parseHour, ticket)}
        prev[parseHour].amount = prev[parseHour].amount + 1;
        prev[parseHour].total = prev[parseHour].total + ticket.total;
        return prev;
      }, horary);

      const ticketForHour = Object.keys(objTicketForHour).map(key => ({
        name: key,
        ticketEmit: objTicketForHour[key].amount,
        total: objTicketForHour[key].total,
      }))

      return ticketForHour

}