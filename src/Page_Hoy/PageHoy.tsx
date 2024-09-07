import { useMemo, useState } from "react"
import { TicketData, TicketParse } from "../../types/ticketData"

import { getTotalCurrentDay } from "./function/getTotalCurrentDay";
import { ContainerChart } from "./components/ContainerChart";
import { PrincipalSection } from "./components/PrincipalSection";
import { formatNumber, onlyDate } from "../helpers";
import { formatDate } from "../helpers/formatDate";
import { SectionTickets } from "./components/SectionTickets";


interface props {
    tickets: TicketParse[] | null
}

export const PageHoy = ({ tickets }: props) => {
    const totalCurrentDay = useMemo(()=>getTotalCurrentDay(tickets), [tickets])

    if ( totalCurrentDay === null ) return <h1 className="text-[4em] font-bold text-center">CARGANDO...</h1>


    return (
        <div className="mb-6 overflow-x-hidden">
            <PrincipalSection 
                ticketDay={totalCurrentDay!.ticketDay}
                ticketNight={totalCurrentDay!.ticketNight}
                totalDay={totalCurrentDay!.totalDay}
                totalNight={totalCurrentDay!.totalNight}
                totalToday={totalCurrentDay!.totalToday}
            />

            <ContainerChart ticketsParse={totalCurrentDay!.ticketsParse} />

            <SectionTickets ticketsParse={totalCurrentDay!.ticketsParse} />
        </div>
    )
}