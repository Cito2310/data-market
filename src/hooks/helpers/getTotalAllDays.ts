import { TicketData } from "../../../types/ticketData";

export const getTotalAllDays = (tickets: TicketData[] | null) => {
    if (tickets === null) return null;

    const result = tickets.reduce((prev, curr) => {
      const totalArr = curr.products.map( product => product.total );
      const sum = totalArr.reduce((prev, curr) => prev+curr ,0);

      return prev+sum;
    }, 0)

    return result;
}