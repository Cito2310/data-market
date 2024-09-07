import { useState } from "react"
import { TicketParse } from "../../../types/ticketData"

export const useSectionTicket = () => {
    const [currentTicket, setCurrentTicket] = useState<TicketParse | null>(null);
    const onExitTicket = () => setCurrentTicket(null);

    return {
        currentTicket,
        setCurrentTicket,
        onExitTicket,
    }
}