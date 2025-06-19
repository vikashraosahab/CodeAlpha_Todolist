
export  const Time = ()=>{
    const now = new Date ()
    
    let hours = String (now.getHours()).padStart (2,'0');
    const minutes = String (now.getMinutes()).padStart (2,'0');
    const seconds = String (now.getSeconds()).padStart (2,'0')
    let state = "AM"
    if (now.getHours() > 12) {
        hours = now.getHours ()  - 12
        state = "PM"
    }

    return `${hours}:${minutes}:${seconds} ${state}`
}