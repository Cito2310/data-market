export const getRoundedMinute = (minute: number, rounded: "60" | "15" | "10" | "30" ) => {
    switch (rounded) {
        case "60":
            if ( minute >= 0 && minute <= 60 ) return "00";
            break;

        case "10":
            if ( minute >= 0 && minute <= 10 ) return "00";
            if ( minute >= 10 && minute <= 20 ) return "10";
            if ( minute >= 20 && minute <= 30 ) return "20";
            if ( minute >= 30 && minute <= 40 ) return "30";
            if ( minute >= 40 && minute <= 50 ) return "40";
            if ( minute >= 50 && minute <= 60 ) return "50";
            break;

        case "15":
            if ( minute >= 0 && minute <= 15 ) return "00";
            if ( minute >= 15 && minute <= 30 ) return "15";
            if ( minute >= 30 && minute <= 45 ) return "30";
            if ( minute >= 45 && minute <= 60 ) return "45";
            break;

        case "30":
            if ( minute >= 0 && minute <= 30 ) return "00";
            if ( minute >= 30 && minute <= 60 ) return "30";
            break;
    
    }


}