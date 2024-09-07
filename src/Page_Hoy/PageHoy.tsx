import { useMemo, useState } from "react"
import { TicketData, TicketParse } from "../../types/ticketData"

import { getTotalCurrentDay } from "./function/getTotalCurrentDay";
import { ContainerChart } from "./components/ContainerChart";
import { PrincipalSection } from "./components/PrincipalSection";
import { formatNumber, onlyDate } from "../helpers";
import { formatDate } from "../helpers/formatDate";


interface props {
    tickets: TicketData[] | null
}

export const PageHoy = ({ tickets }: props) => {
    const totalCurrentDay = useMemo(()=>getTotalCurrentDay(tickets), [tickets])
    const [currentTicket, setCurrentTicket] = useState<TicketParse | null>(null)

    if ( totalCurrentDay === null ) return <h1 className="text-[4em] font-bold text-center">CARGANDO...</h1>


    return (
        <div>
            <PrincipalSection 
                ticketDay={totalCurrentDay!.ticketDay}
                ticketNight={totalCurrentDay!.ticketNight}
                totalDay={totalCurrentDay!.totalDay}
                totalNight={totalCurrentDay!.totalNight}
                totalToday={totalCurrentDay!.totalToday}
            />

            <ContainerChart ticketsParse={totalCurrentDay!.ticketsParse} />

            {
                currentTicket !== null &&
                <div className="w-screen h-screen bg-[#00000041] fixed top-0">
                    <div className="bg-white z-10 mx-auto mt-[4em] w-[500px] shadow-md rounded px-3 pt-2 pb-4">

                        <div className="flex justify-between">
                        <h1 className="text-[1.4em] font-bold">{formatDate(currentTicket.date).day} {formatDate(currentTicket.date).hour}</h1>
                            <button 
                                onClick={()=>setCurrentTicket(null)}
                                className="
                                    rounded h-[30px] 
                                    bg-white font-black 
                                    aspect-square 
                                    transition-base 
                                    hover:brightness-[0.85] active:brightness-75"
                                >X</button>
                        </div>

                        <table className="w-full">
                            <thead>
                                <th>PRODUCTO</th>
                                <th>UNIDAD</th>
                                <th>CANTIDAD</th>
                                <th>TOTAL</th>
                            </thead>

                            <tbody>
                                {currentTicket.products.map(({ _id, brand, name, price, amount, size, typeSize, total }, index) => 
                                <tr key={_id} className={`${index % 2 ? "bg-gray-300" : "bg-white"} text-[0.9em]`}>
                                    <td className="pl-2 capitalize">{brand} {name} {size}{typeSize}</td>
                                    <td className="text-center px-4">${formatNumber( price )}</td>
                                    <td className="text-center ">{amount}</td>
                                    <td className="text-center px-4">${formatNumber( total )}</td>
                                </tr>)}
                            </tbody>
                        </table>

                        <h2 className="text-[1.2em] font-semibold text-right mt-2">TOTAL: $ {formatNumber( currentTicket.total )}</h2>
                    </div>
                </div>
            }


            <section className="w-[90%] m-auto mt-4">
                <h2 className="text-[1.6em] font-semibold">TICKETS</h2>
                
                <table className="w-full">
                    <tbody>
                        {
                            totalCurrentDay.ticketsParse.map((ticket, index) => 
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
        </div>
    )
}