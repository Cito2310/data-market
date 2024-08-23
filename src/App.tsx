import axios from "axios";
import { parse } from 'date-fns';
import { useMemo } from "react";
import { useGetProducts, useGetTickets } from "./hooks";
import { getTotalCurrentDay, getTotalAllDays, getTotalForDays } from "./function";
import { onlyDate, getDay, formatNumber } from "./helpers";


const pathFolderTickets = "C:\\Users\\Negocio\\Desktop\\tickets";
const pathFolderCurrent = "C:\\Users\\Negocio\\AppData\\Local\\Programs\\market-manager\\tickets"


function App() {
  const { products } = useGetProducts();
  const { tickets } = useGetTickets({ 
    dataProducts: products, 
    pathTicketCurrent: pathFolderCurrent,
    pathTicketFolder: pathFolderTickets,
  });

  const totalAllDays = useMemo(() => getTotalAllDays(tickets), [tickets])

  const totalCurrentDay = useMemo(()=>getTotalCurrentDay(tickets), [tickets])

  const totalForDays = useMemo(()=>getTotalForDays(tickets), [tickets])

  return (
    <div className="App">
      <h1>TOTAL APERTURA: $ {totalAllDays && formatNumber(totalAllDays)}</h1>
      <h1>TOTAL DIA: $ {totalCurrentDay && formatNumber(totalCurrentDay)}</h1>

      <table>
        <thead>
          <tr>
            <th className="border-collapse border border-black">DIA</th>
            <th className="border-collapse border border-black">MAÑANA</th>
            <th className="border-collapse border border-black">TARDE</th>
            <th className="border-collapse border border-black">TOTAL</th>
          </tr>
        </thead>

        <tbody>
          {totalForDays.map(({ date, totalDay, totalNight }) => <tr key={date.getTime()+"key"} className={`${date.getDay() === 0 && "border-black border-b-2"}`}>
            <td className="border-collapse border px-2 border-black capitalize">{`${onlyDate(date)} ${getDay(date.getDay())}`}</td>
            <td className="border-collapse border px-2 border-black">$ {formatNumber( totalDay )}</td>
            <td className="border-collapse border px-2 border-black">$ {formatNumber( totalNight )}</td>
            <td className="border-collapse border px-2 border-black">$ {formatNumber( totalDay+totalNight )}</td>
          </tr> )}
        </tbody>
      </table>
      {/* {totalForDays.map( v => <div style={{display:"flex", gap:"1em"}}><h2>{onlyDate(v.date)}</h2> <h2>{v.total}</h2></div>)} */}

      {/* <button onClick={onClickGetTickets}>get Tickets Data</button> */}
    </div>
  );
}

export default App;
