export const generateHorary = (start: string, end: string, interval: 0 | 10 | 15 | 30) => {
    const horary = [];

    let [hour, minute] = start.split(":").map(Number);
    let [hourEnd, minuteEnd] = end.split(":").map(Number);

    while (hour < hourEnd || (hour === hourEnd && minute <= minuteEnd)) {
        const horaFormatted = String(hour).padStart(2, '0');
        const minutoFormatted = String(minute).padStart(2, '0');
        horary.push(`${horaFormatted}:${minutoFormatted}`);
        
        // Aumentar el tiempo en el intervalo especificado
        minute += interval;
        if (minute >= 60) {
            minute -= 60;
            hour += 1;
        }
    }
    
    const objHorary: {[key:string]: {amount:0, total:0}} = {};
    horary.forEach(hour => objHorary[hour] = {amount:0, total:0});

    return objHorary;
}