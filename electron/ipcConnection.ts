import { BrowserWindow, ipcMain } from 'electron';

import { ipcNames } from '../types/ipcNames';
import { ipcReadTicket } from './ipcConnection/ipcReadTickets';

export const ipConnection = (app: Electron.App, win: BrowserWindow) => {

    ipcReadTicket(app, win)

    ipcMain.on("basic-on-ipc" as ipcNames, (e, args)=>{
        console.log(args)
    })

    ipcMain.handle("basic-handle-ipc" as ipcNames, async(e, args)=>{
        return args
    })

}