import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { ButtonChart } from "./ButtonChart"

import { useChartHorary } from "../hooks/useChartHorary";


interface props {
    ticketsParse: any[];
    height?: number;
    defaultChart?: "Minute10" | "Minute15" | "Minute30" | "Hour";
    minSize?: number;
}

export const ContainerChart = ({ ticketsParse, height, defaultChart, minSize }: props) => {
    const { currentChart, setCurrentChart, ticketFor } = useChartHorary(ticketsParse, defaultChart);

    return (
        <div className="w-[90%] m-auto flex justify-center flex-col items-center border border-slate-300 mt-2">
        <div className="flex w-full">
            <ButtonChart showActive={currentChart === "Minute10"} label="10 Minutos" onClick={()=>setCurrentChart("Minute10")} />
            <ButtonChart showActive={currentChart === "Minute15"} label="15 Minutos" onClick={()=>setCurrentChart("Minute15")} />
            <ButtonChart showActive={currentChart === "Minute30"} label="30 Minutos" onClick={()=>setCurrentChart("Minute30")} />
            <ButtonChart showActive={currentChart === "Hour"} label="Hora" onClick={()=>setCurrentChart("Hour")} />
        </div>
    {
        ticketsParse &&
        <ResponsiveContainer width="100%" height={height || 200}>
            <BarChart data={ticketFor[currentChart]} margin={{right: 16, left: -30, top: 10 }}>
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="name" />
                <YAxis type="number" domain={[0,(minSize || 20)]} dataKey="ticketEmit" />
                <Tooltip />
                <Bar dataKey="ticketEmit" stackId="a" fill="#404040" />
            </BarChart>
        </ResponsiveContainer>
    }
    </div>
)}