import { useEffect, useState } from "react"
import { Product } from "../../types/product";
import { TicketData, TicketParse } from "../../types/ticketData";
import { getTicketParse } from "../helpers/getTicketParse";

interface props {
    pathTicketFolder: string;
    pathTicketCurrent: string;
    dataProducts: Product[];
}

export const useGetTickets = ({ dataProducts, pathTicketCurrent, pathTicketFolder }: props) => {
    const [tickets, setTickets] = useState<TicketParse[] | null>(null);

    useEffect(() => {
        const getTickets = async() => {
            const dataTicket = await window.electronAPI.readTickets({ dataProducts, pathTicketCurrent, pathTicketFolder });
            const newState = [...dataTicket.ticketData, dataTicket.currentTicketData];
            const ticketsParse = getTicketParse( newState.flat(1) )
            setTickets( ticketsParse.sort((a,b) => a.time.timeTotal - b.time.timeTotal));
        }

        if (dataProducts.length !== 0) { getTickets() }
    }, [dataProducts])

    return { tickets }
}