
export  const Time = ()=>{
    const now = new Date ()
    
    let hours = String (now.getHours()).padStart (2,'0');
    const minutes = String (now.getMinutes()).padStart (2,'0');
    const seconds = String (now.getSeconds()).padStart (2,'0')

    const Day = String (now.getDay())
    
    if (now.getHours() > 12) {
        hours = now.getHours ()  - 12
    }
    return `${Day}  ${hours}:${minutes}:${seconds}`
}