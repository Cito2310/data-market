import { TicketParse } from "../../../types/ticketData"
import { formatNumber } from "../../helpers"
import { formatDate } from "../../helpers/formatDate"

interface props {
    currentTicket: TicketParse;
    onExit: () => void;
}

export const ModalTicket = ({ currentTicket, onExit }: props) => {
    return (
    <div className="w-screen h-screen bg-[#00000041] fixed top-0">
        <div className="bg-white z-10 mx-auto mt-[4em] w-[500px] shadow-md rounded px-3 pt-2 pb-4">

            <div className="flex justify-between">
            <h1 className="text-[1.4em] font-bold">{formatDate(currentTicket.date).day} {formatDate(currentTicket.date).hour}</h1>
                <button 
                    onClick={onExit}
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
    )
}