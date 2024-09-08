import { TicketParse } from "../../types/ticketData"
import { formatNumber } from "../helpers"
import { formatDate } from "../helpers/formatDate"
import { ContainerChart } from "../Page_Hoy/components/ContainerChart"

interface props {
    tickets: TicketParse[]
}

export const PageHistorico = ({ tickets }: props) => {
    const ticketsInDay = () => {
        return tickets.reduce((prev: TicketParse[][], curr)=>{
            const lastArr = prev[prev.length-1];
            if (prev.length === 0) return [...prev, [curr]];

            if (lastArr[0].date.getDate() === curr.date.getDate()) lastArr.push(curr);
            if (lastArr[0].date.getDate() !== curr.date.getDate()) prev.push([curr]);

            return prev;
        }, [])
    }


    return (
        <div>
            {
                ticketsInDay()
                .filter( tickets => tickets[0].date.getDay() === 0 )
                .map(tickets =>
                    <div className="border border-gray-400 m-2">
                        <h1 className="capitalize font-semibold text-xl text-center">{formatDate(tickets[0].date).day} {tickets[0].time.dayWeek}</h1>
                        <ContainerChart 
                        height={100} 
                        key={tickets[0].idTicket} 
                        defaultChart="Hour"
                        minSize={20}
                        ticketsParse={tickets} />

                        <h2>
                            Ticket Emitidos: {tickets.length} 
                            &nbsp;&nbsp;&nbsp;
                            Total Día: ${
                            formatNumber( 
                                tickets.reduce((prev: number, ticket)=>prev+ticket.total,0 )
                            )}
                        </h2>
                    </div> 
                )
            }
        </div>
    )
}