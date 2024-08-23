import { ipcNames } from "../types/ipcNames"

import { Product } from "../types/product"

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    basicOnIpc: ( value: string ) => ipcRenderer.send('basic-on-ipc' as ipcNames, value),
    basicHandleIpc: ( value: string ) => ipcRenderer.invoke('basic-handle-ipc' as ipcNames, value),
    readTickets: (value: { pathTicketFolder: string, pathTicketCurrent: string, dataProducts: Product[] }) => ipcRenderer.invoke('read-ticket' as ipcNames, value)
})