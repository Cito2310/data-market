export const formatNumber = (num: number) =>  {
    return num.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}