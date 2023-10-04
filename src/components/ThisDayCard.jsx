import { useEffect } from "react"
import { useState } from "react"

function ThisDayCard () {
    const [data, setData] = useState(null)
    
    const apiUrl = "http://api.weatherapi.com/v1/current.json?key=f6df8e4a1f9b409a80d140642230410&q=auto:ip&aqi=yes";

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
         <article className="card w-8/12 h-4/5 flex flex-col items-center justify-evenly rounded-xl">
            {data && (
                <div>
                    <p className="text-base">{data.location.name}, {data.location.country}</p>
                </div>
            )}
            {data && (
                <div>
                    <h2 className="day-text text-5xl"><span>Martes</span>, {data.current.temp_c}°C</h2>
                </div>
            )}
            {data && (
                <div>
                    <img src={`http:${data.current.condition.icon}`} alt="Clima del día" className="w-72" />
                </div>
            )}
            {data && (
                <div>
                    <h2 className="day-text text-2xl"><strong>{data.current.condition.text}</strong></h2>
                </div>
            )}
            {data && (
                <div>
                    <h3>Rain {data.current.precip_mm}%</h3>
                </div>
            )}
         </article>
    )
}
export default ThisDayCard