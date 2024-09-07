import { TicketParse } from "../../../types/ticketData"
import { formatNumber } from "../../helpers";
import { useSectionTicket } from "../hooks/useSectionTicket"
import { ModalTicket } from "./ModalTicket";

interface props {
    ticketsParse: TicketParse[]
}

export const SectionTickets = ({ ticketsParse }: props) => {
    const { currentTicket, onExitTicket, setCurrentTicket } = useSectionTicket();

    return (
        <>
            { 
                currentTicket !== null &&
                <ModalTicket currentTicket={currentTicket} onExit={onExitTicket} />
            }

            <section className="w-[90%] m-auto mt-4">
                <h2 className="text-[1.6em] font-semibold">TICKETS</h2>
                
                <table className="w-full">
                    <tbody>
                        {
                            ticketsParse.map((ticket, index) => 
                            <tr key={ticket.idTicket} onClick={()=>setCurrentTicket(ticket)} className={`
                                py-1 cursor-pointer
                                ${index % 2 ? "bg-gray-300" : "bg-white"}
                                transition-base hover:border hover:outline outline-1
                            `}>
                                <td className="w-[80%] px-4">{String(ticket.time.hour).padStart(2,"0")}:{String(ticket.time.minute).padStart(2,"0")}</td>
                                <td className="w-[10%] text-center">{ticket.products.length }</td>
                                <td className="w-[10%]">${formatNumber( ticket.total )},00</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}