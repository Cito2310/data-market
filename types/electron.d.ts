import { ipcNames } from './ipcNames';
import { Product } from "./product"
import { ReturnReadTicket } from './ReadTicket';
import { TicketData } from './ticketData';

declare global {
    interface Window {
        electronAPI: {
            basicOnIpc: ( value: string ) => unknown,
            basicHandleIpc: ( value: string ) => unknown,
            readTickets: (value: { pathTicketFolder: string, pathTicketCurrent: string, dataProducts: Product[] }) => Promise<ReturnReadTicket>
        }
    }
}

export {}