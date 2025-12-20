const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

// Parses dates to be more human readable and prettier
export function parseDate(date) {
    const dateComponents = date.split("-")
    const month = months[Number(dateComponents[1])]
    return `${month} ${dateComponents[2]}, ${dateComponents[0]}`
}