import { Navigate, Route, Routes } from "react-router-dom"
import { TicketData } from "../../types/ticketData"
import { PageHoy } from "../Page_Hoy/PageHoy"

interface props {
  tickets: TicketData[] | null
}

export const AppRoute = ({ tickets }: props) => {
  return (
    <>
        <Routes>
            <Route path="/" element={<PageHoy tickets={tickets}/>} />
            <Route path="/meses" element={<h1>Meses</h1>} />
            <Route path="/historico" element={<h1>Historico</h1>} />

            <Route path="/*" element={<Navigate to={"/"}/>}/>
        </Routes>
    </>
  )
}