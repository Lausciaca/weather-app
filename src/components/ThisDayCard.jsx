import { useEffect } from "react"
import { useState } from "react"
import WeatherIcon from "../utils/WeatherIcon";

function ThisDayCard () {
    const [data, setData] = useState(null)

    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
    
    const apiUrl = "http://api.weatherapi.com/v1/current.json?key=f6df8e4a1f9b409a80d140642230410&q=auto:ip&aqi=yes&lang=es";

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
         <article className="card w-9/12 h-4/5 flex flex-col items-center justify-evenly rounded-xl">
            {data && (
                <>
                
                <div>
                    <p className="text-base">{data.location.name}, {data.location.country}</p>
                </div>

                <div>
                    <h2 className="day-text text-5xl"><span>{currentDayOfWeek}</span>, {data.current.temp_c}°C</h2>
                </div>

                <div className="">
                    <WeatherIcon weatherCondition={data.current.condition.text} size={'big'} />
                </div>

                <div>
                    <h2 className="day-text text-2xl"><strong>{data.current.condition.text}</strong></h2>
                </div>
                
                <div>
                    <h3>Lluvia {data.current.precip_mm}%</h3>
                </div>
                </>
            )}
         </article>
    )
}
export default ThisDayCard