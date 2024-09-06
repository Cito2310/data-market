import { useMemo } from "react"
import { TicketData } from "../../types/ticketData"
import { formatNumber } from "../helpers"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useChartHorary } from "./hooks/useChartHorary";
import { ButtonChart } from "./components/ButtonChart";
import { getTotalCurrentDay } from "./function/getTotalCurrentDay";


interface props {
    tickets: TicketData[] | null
}

export const PageHoy = ({ tickets }: props) => {
    const totalCurrentDay = useMemo(()=>getTotalCurrentDay(tickets), [tickets])

    const { currentChart, setCurrentChart, ticketFor } = useChartHorary(totalCurrentDay?.ticketsParse);

    return (
        <div>
            <div className="w-screen text-center text-[3em]">
                <h1 className="font-bold">TOTAL HOY</h1>
                <h2 className="font-medium">$ {formatNumber( totalCurrentDay?.totalToday || 0 )}</h2>
                <h4 className="text-[1.6rem]">Mañana: Tickets Emitidos {totalCurrentDay?.ticketDay.length} - Total: ${formatNumber(totalCurrentDay?.totalDay || 0)}</h4>
                <h4 className="text-[1.6rem]">Tarde: Tickets Emitidos {totalCurrentDay?.ticketNight.length} - Total: ${formatNumber(totalCurrentDay?.totalNight || 0)}</h4>
            </div>

        <div className="w-[90%] m-auto flex justify-center flex-col items-center border border-slate-300 mt-2">
            <div className="flex w-full">
                <ButtonChart showActive={currentChart === "Minute10"} label="10 Minutos" onClick={()=>setCurrentChart("Minute10")} />
                <ButtonChart showActive={currentChart === "Minute15"} label="15 Minutos" onClick={()=>setCurrentChart("Minute15")} />
                <ButtonChart showActive={currentChart === "Minute30"} label="30 Minutos" onClick={()=>setCurrentChart("Minute30")} />
                <ButtonChart showActive={currentChart === "Hour"} label="Hora" onClick={()=>setCurrentChart("Hour")} />
            </div>
         {
            totalCurrentDay &&
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={ticketFor[currentChart]} margin={{right: 16, left: -30 }}>
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0,10]} dataKey="ticketEmit" />
                    <Tooltip />
                    <Bar dataKey="ticketEmit" stackId="a" fill="#404040" />
                </BarChart>
            </ResponsiveContainer>
        }
        </div>

</div>

    )
}