import { useEffect, useState } from "react"
import { Product } from "../../types/product";
import { TicketData } from "../../types/ticketData";

interface props {
    pathTicketFolder: string;
    pathTicketCurrent: string;
    dataProducts: Product[];
}

export const useGetTickets = ({ dataProducts, pathTicketCurrent, pathTicketFolder }: props) => {
    const [tickets, setTickets] = useState<TicketData[] | null>(null);

    useEffect(() => {
        const getTickets = async() => {
            const dataTicket = await window.electronAPI.readTickets({ dataProducts, pathTicketCurrent, pathTicketFolder });
            const newState = [...dataTicket.ticketData, dataTicket.currentTicketData];
            setTickets( newState.flat(1) );
        }

        if (dataProducts.length !== 0) { getTickets() }
    }, [dataProducts])

    return { tickets }
}