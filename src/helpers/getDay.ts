export const getDay = (day: number) => {
    switch (day) {
        case 0: return "Domingo";
        case 1: return "lunes";
        case 2: return "martes";
        case 3: return "miercoles";
        case 4: return "jueves";
        case 5: return "viernes";

        default: return "sabado";
    }
}