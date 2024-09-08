import { useState } from "react";
import { getDataInHour } from "../../helpers/getDataInHour";

export const useChartHorary = (ticketsParse: any[] | undefined, defaultChart?: "Minute10" | "Minute15" | "Minute30" | "Hour" ) => {
    const [currentChart, setCurrentChart] = useState<"Minute10" |  "Minute15" | "Minute30" | "Hour">(defaultChart || "Minute15")


    const ticketFor10Minute = getDataInHour(ticketsParse, "10");
    const ticketFor15Minute = getDataInHour(ticketsParse, "15");
    const ticketFor30Minute = getDataInHour(ticketsParse, "30");
    const ticketForHour = getDataInHour(ticketsParse, "60");

    return {
        currentChart,
        setCurrentChart,

        ticketFor: {
            Minute10: ticketFor10Minute,
            Minute15: ticketFor15Minute,
            Minute30: ticketFor30Minute,
            Hour: ticketForHour,
        }
    }
}