export const isCurrentDay = (date: Date) => {
    const dateToday = new Date();

    return (
        date.getFullYear() === dateToday.getFullYear() &&
        date.getMonth() === dateToday.getMonth() &&
        date.getDate() === dateToday.getDate()
      )
}