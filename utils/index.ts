export const generateRandomString = (length=8)=>Math.random().toString(20).substr(2, length)

export const timeConverter = (time: string) => {
    let timeSplit = time.split(':')
    let seconds;
    if (timeSplit.length === 3) {
        seconds = (+timeSplit[0]) * 60 * 60 + (+timeSplit[1]) * 60 + (+timeSplit[2]); 
    } else {
        seconds = (+timeSplit[0]) * 60 + (+timeSplit[1]); 
    }
    return seconds
}