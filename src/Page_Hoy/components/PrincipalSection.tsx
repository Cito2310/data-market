import { formatNumber } from "../../helpers";

interface props {
    totalToday: number;
    totalDay: number;
    totalNight: number;
    
    ticketDay: any[];
    ticketNight: any[];
}


export const PrincipalSection = ({ ticketDay, ticketNight, totalToday, totalDay, totalNight }: props) => (
    <div className="w-screen text-center text-[3em]">
                <h1 className="font-bold">TOTAL HOY</h1>
                <h2 className="font-medium">$ {formatNumber( totalToday || 0 )}</h2>
                <h4 className="text-[1.6rem]">Mañana: Tickets Emitidos {ticketDay.length} - Total: ${formatNumber(totalDay || 0)}</h4>
                <h4 className="text-[1.6rem]">Tarde: Tickets Emitidos {ticketNight.length} - Total: ${formatNumber(totalNight || 0)}</h4>
            </div>
)