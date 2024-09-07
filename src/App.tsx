import axios from "axios";
import { parse } from 'date-fns';
import { useMemo } from "react";
import { useGetProducts, useGetTickets } from "./hooks";
// import { getTotalCurrentDay, getTotalAllDays, getTotalForDays } from "./function";
import { onlyDate, getDay, formatNumber } from "./helpers";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { Header } from "./components/Header";
import { AppRoute } from "./routes/AppRoute";


const pathFolderTickets = "C:\\Users\\Negocio\\Desktop\\tickets";
const pathFolderCurrent = "C:\\Users\\Negocio\\AppData\\Local\\Programs\\market-manager\\tickets"


function App() {
  const { products } = useGetProducts();
  const { tickets } = useGetTickets({ 
    dataProducts: products, 
    pathTicketCurrent: pathFolderCurrent,
    pathTicketFolder: pathFolderTickets,
  });
  // const totalAllDays = useMemo(() => getTotalAllDays(tickets), [tickets])

  // const totalCurrentDay = useMemo(()=>getTotalCurrentDay(tickets), [tickets])

  // const totalForDays = useMemo(()=>getTotalForDays(tickets), [tickets])

  return (
    <div className="App">
      <Header/>
      { 
        tickets &&
      <AppRoute tickets={tickets}/>
      }
      {/* <h1>TOTAL APERTURA: $ {totalAllDays && formatNumber(totalAllDays)}</h1>
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
            <td className="border-collapse border px-4 border-black capitalize">{`${onlyDate(date)} ${getDay(date.getDay())}`}</td>
            <td className="border-collapse border px-4 border-black">$ {formatNumber( totalDay )}</td>
            <td className="border-collapse border px-4 border-black">$ {formatNumber( totalNight )}</td>
            <td className="border-collapse border px-4 border-black">$ {formatNumber( totalDay+totalNight )}</td>
          </tr> )}
        </tbody>
      </table> */}


      {/* <BarChart width={1200} height={250} data={totalForDays}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dayWeek" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalDay" stackId="a" fill="#8884d8" />
        <Bar dataKey="totalNight" stackId="a" fill="#82ca9d" />
      </BarChart> */}
    </div>
  );
}

export default App;
