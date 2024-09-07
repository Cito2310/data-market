import { TicketData, TicketParse } from "../../types/ticketData"

interface props {
    tickets: TicketParse[]
}

interface props2 {
    label: string;
    onClick: () => void;
}

export const ButtonWeekDay = ({ label, onClick }: props2) => 
    <button 
        className="w-full border border-black"
        onClick={onClick}>
        {label}
    </button>


export const PageSemanal = ({ tickets }: props) => {
    const getStartOfWeek = (date: Date) => {
        const day = date.getDay();
        const diff = date.getDate() - day;
        return new Date(date.setDate(diff));
    }

    // const getWeekTickets = (tickets: TicketParse[]) => {
    //     let ticketsInWeeks: { dayStart: Date, dayEnd: Date, name: string, tickets: TicketParse[] }[] = [];

    //     tickets.forEach(({ date, idTicket, products, time, total }) => {
    //         const lastWeek = ticketsInWeeks.length ? ticketsInWeeks[ticketsInWeeks.length-1] : [];
    //         const existWeek = ticketsInWeeks.find(({ dayEnd, dayStart, name, tickets }) => dayStart.getDay() >= date.getDay() && date.getDay() <= 6)
    //         console.log(ticket.date.getDay(), ticket.date.getDate(), ticket.date.getMonth())
    //         console.log(lastWeek)
    //     })
    // }

    console.log(getStartOfWeek(tickets[0].date))

    

    return (
        <div>
            <div className="w-full flex">
                <ButtonWeekDay label="Lunes" onClick={()=>console.log("Hola")} />
                <ButtonWeekDay label="Martes" onClick={()=>console.log("Hola")} />
                <ButtonWeekDay label="Miercoles" onClick={()=>console.log("Hola")} />
                <ButtonWeekDay label="Jueves" onClick={()=>console.log("Hola")} />
                <ButtonWeekDay label="Viernes" onClick={()=>console.log("Hola")} />
                <ButtonWeekDay label="Sabado" onClick={()=>console.log("Hola")} />
                <ButtonWeekDay label="Domingo" onClick={()=>console.log("Hola")} />
            </div>

        </div>
    )
}