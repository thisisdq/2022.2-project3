import React from 'react'

const T = {
    format: (date) => { 
        const hours = date.getHours()
        const minutes = date.getMinutes()
        return `${T.formatHours(hours)}:${T.formatMinutes(minutes)}`
    },
    formatHours : (hours) => {
        return hours%12 === 0 ? 12 : hours%12
    },
    formatMinutes: (minute) => {
        return minute < 10 ? `0${minute}` : minute
    }
}

const useCurrentDateEffect = () => {
    const [date, setDate] = React.useState(new Date())
    React.useEffect(()=> {
        const invertal = setInterval(()=> {
            const update = new Date()
            if (update.getSeconds()  !== date.getSeconds()){
                setDate(update)
            }
        }, 100);
        return () => clearInterval(invertal)
    }, [date]) 
    return date
 }


const Time = () => {
    const date = useCurrentDateEffect()
    return (React.createElement("span", {className: "time"},T.format(date)))
}

export default Time