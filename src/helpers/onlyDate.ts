export const onlyDate = (date: Date): string => {
    return `${date.getDate().toString().length-1 ? date.getDate() : "0"+date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
}