import { ReturnReadTicket } from './../../types/ReadTicket';
import { BrowserWindow, ipcMain } from "electron";
import { ipcNames } from "../../types/ipcNames";
import { readdirSync, readFileSync } from "fs";
import path = require("path");
import { Product } from "../../types/product"
import { TicketDataRaw, TicketData } from "../../types/ticketData";

export const ipcReadTicket = (app: Electron.App, win: BrowserWindow) => {

    ipcMain.handle("read-ticket" as ipcNames, async(e, args: { 
        pathTicketFolder: string, 
        pathTicketCurrent: string, 
        dataProducts: Product[],
    }):  Promise<ReturnReadTicket>  =>{

    const getDataTicket = (tickets: string[], pathParent: string): TicketData[] => tickets.map( nameChild => {
        const ticketRaw: TicketDataRaw = JSON.parse( readFileSync( path.join( pathParent, nameChild ), "utf-8" ) )

        const result: TicketData = {
            products: ticketRaw.products.map(({ amount, barcode, total }) => {
                const findProduct = args.dataProducts.find(product => product.barcode === barcode )!;
                return {
                    ...findProduct,
                    amount,
                    total,
                }
            }),
            date: ticketRaw.date,
            idTicket: ticketRaw.idTicket
        }
        return result;
    })


    const pathFolderDate = readdirSync(args.pathTicketFolder).map(name => path.join( args.pathTicketFolder, name ));
    
    const ticketData: TicketData[][] = pathFolderDate.map( pathParent => getDataTicket( readdirSync(pathParent), pathParent ))

    const currentTicketData: TicketData[] = getDataTicket( readdirSync( args.pathTicketCurrent ), args.pathTicketCurrent)

    return {
        ticketData,
        currentTicketData
    };
})}