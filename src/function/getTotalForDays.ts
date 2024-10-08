import { TicketData } from "../../types/ticketData";
import { parse } from 'date-fns';
import { getDay,onlyDate } from "../helpers";
//  @ts-ignore
export const getTotalForDays = (tickets: TicketData[] | null): { 
  date: Date;
  totalDay: number;
  totalNight: number;
  dayWeek: string; 
  totalSum: number;
}[] => {
    if (tickets === null) return [];

    const ticketsParse = tickets.map( ticket => {
      // @ts-ignore
      const dateTicket = parse(ticket.date, 'dd-MM-yyyy HH:mm:ss', new Date());
      const sumTotal = ticket.products.reduce((prev, curr) => curr.total + prev, 0)

      return {
        date: dateTicket,
        total: sumTotal,
      }
    })

    const ticketForDay = ticketsParse.reduce((prev: { date: Date, tickets: {date: Date, total: number}[] }[], curr)=>{
      let newPrev = structuredClone( prev );

      const sameDate = newPrev.find( data => onlyDate( data.date ) === onlyDate( curr.date ) );
      const sameDateIndex = newPrev.findIndex( data => onlyDate( data.date ) === onlyDate( curr.date ) );

      if ( sameDate ) {
        newPrev[sameDateIndex].tickets.push( curr );
      }

      if ( sameDate === undefined ) {
        newPrev.push({ date: curr.date, tickets: [curr] })
      }

      return newPrev
    },[])

    const ticketForDaySum = ticketForDay.map( dayData => {
      const date = dayData.date;
      const dayWeek = getDay( dayData.date.getDay() )[0];
      const totalDay = dayData.tickets.filter(({ date }) => date.getHours() > 0 && date.getHours() < 15).reduce((prev, curr)=>prev+curr.total,0 );
      const totalNight = dayData.tickets.filter(({ date }) => date.getHours() > 15 && date.getHours() < 24).reduce((prev, curr)=>prev+curr.total,0 );
      const totalSum = totalDay+totalNight;

      return {
        date,
        dayWeek,
        totalDay,
        totalNight,
        totalSum
      }
    })

    return ticketForDaySum;
}