import { useMemo } from "react"
import { getTotalCurrentDay } from "../function"
import { TicketData } from "../../types/ticketData"
import { formatNumber } from "../helpers"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


interface props {
    tickets: TicketData[] | null
}

export const PageHoy = ({ tickets }: props) => {
    const totalCurrentDay = useMemo(()=>getTotalCurrentDay(tickets), [tickets])

    return (
        <div>
            <div className="w-screen text-center text-[3em]">
                <h1 className="font-bold">TOTAL HOY</h1>
                <h2 className="font-medium">$ {formatNumber( totalCurrentDay?.totalToday || 0 )}</h2>
                <h4 className="text-[1.6rem]">Mañana: Tickets Emitidos {totalCurrentDay?.ticketDay.length} - Total: ${formatNumber(totalCurrentDay?.totalDay || 0)}</h4>
                <h4 className="text-[1.6rem]">Tarde: Tickets Emitidos {totalCurrentDay?.ticketNight.length} - Total: ${formatNumber(totalCurrentDay?.totalNight || 0)}</h4>
            </div>
         {
            totalCurrentDay &&
            <ResponsiveContainer width="90%" height={200}>
                <BarChart width={1200} height={250} data={totalCurrentDay.ticketFor15Minute}>
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="ticketEmit" />
                    <Tooltip />
                    <Bar dataKey="ticketEmit" stackId="a" fill="#404040" />
                </BarChart>
            </ResponsiveContainer>
        }
</div>

    )
}