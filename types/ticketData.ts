import { ProductTicket } from "./product";

export interface TicketDataRaw {
    date: Date;
    idTicket: string;
    products: {
        amount: number;
        total: number;
        barcode: string;
    }[];
}
export interface TicketData {
    date: Date;
    idTicket: string;
    products: ProductTicket[];
}

export interface TicketParse extends TicketData {
    date: Date;
    total: number;
    time: { 
        hour: number;
        minute: number;
        timeTotal: number;
    },
}