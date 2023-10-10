import { useEffect } from "react"
import { useState } from "react"
import WeatherIcon from "/src/utils/WeatherIcon"

function NextDayCard ({ next }) {

    const [data, setData] = useState(null)

    const currentDate = new Date();
    const tomorrowx1 = new Date(currentDate);
    tomorrowx1.setDate(currentDate.getDate() + 1);

    const tomorrowx2 = new Date(currentDate);
    tomorrowx2.setDate(currentDate.getDate() + 2);

    const tomorrowx3 = new Date(currentDate);
    tomorrowx3.setDate(currentDate.getDate() + 3);

    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
    const tomorrowx1DayOfWeek = daysOfWeek[tomorrowx1.getDay()];
    const tomorrowx2DayOfWeek = daysOfWeek[tomorrowx2.getDay()];
    const tomorrowx3DayOfWeek = daysOfWeek[tomorrowx3.getDay()];



    const apiUrl = "https://api.weatherapi.com/v1/forecast.json?key=f6df8e4a1f9b409a80d140642230410&q=auto:ip&days=4&aqi=yes&alerts=no&lang=es";

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
        <article className=" w-1/4 h-full flex flex-col items-start justify-evenly relative">
            {data &&(
                <>
                <div className="absolute top-0 right-0">
                    <WeatherIcon weatherCondition={data.forecast.forecastday[next].day.condition.text} size={'short'}/>
                </div>
                <div className="card h-5/6 w-11/12 text-center flex flex-col justify-end p-3 rounded-xl gap-7">
                    <div>   
                        <h2 className="day-text">
                            <span className=" text-2xl">
                                {
                                    next === 1 ? tomorrowx1DayOfWeek : next === 2 ? tomorrowx2DayOfWeek : tomorrowx3DayOfWeek 
                                }
                            </span>
                        </h2>
                    </div>
                    <div>
                        <h2 className="text-xl" > {data.forecast.forecastday[next].day.condition.text} </h2>
                    </div>
                    <div>
                        <h2 className="text-sm"> 
                        {data.forecast.forecastday[next].day.mintemp_c}°C - {data.forecast.forecastday[next].day.maxtemp_c}°C
                        </h2>
                    </div>
                </div>
                </>
            )}
        </article>
    )
}
export default NextDayCard