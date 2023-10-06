import ProgressSemicircle from "./progress-semicircle/ProgressSemicircle"
import { useState, useEffect } from "react";

function ThisDayStats() {

    const [data, setData] = useState(null)

    const apiUrl = "http://api.weatherapi.com/v1/forecast.json?key=f6df8e4a1f9b409a80d140642230410&q=auto:ip&days=1&aqi=yes&alerts=no";

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

    return(
        <section className="card w-full h-full m-auto rounded-3xl flex flex-col justify-center">
            { data && (
                <>
                    <h3 className="day-text m-auto pt-4 text-2xl"><span>Estadisticas del dia</span></h3>
                    <div className="w-11/12 h-5/6 flex flex-wrap justify-around m-auto">
                        <article className="article-stats">
                            <h2 className="h-1/4 text-2xl p-2">Indice UV</h2>
                            <div className="h-3/4">
                                <ProgressSemicircle color={'orange'} indice={data.current.uv} indiceTexto={data.current.uv} limite={18}/>
                            </div>
                        </article>
                        <article className="article-stats">
                            <h2 className="h-1/4 text-2xl p-2">Viento</h2>
                            <div className="h-3/4 flex flex-col justify-evenly">
                                <p className="text-center text-5xl font-bold">
                                    {data.current.wind_dir}
                                    
                                </p>
                                <p className="text-center">{data.current.wind_kph}KM/H</p>
                            </div>
                        </article>
                        <article className="article-stats">
                            <h2 className="h-1/4 text-2xl p-2">AM</h2>
                            <div className="h-3/4">
                                <ProgressSemicircle color={'yellow'} indice={'10'} indiceTexto={data.forecast.forecastday[0].astro.sunrise} limite={16}/>
                            </div>
                        </article>
                        <article className="article-stats">
                            <h2 className="h-1/4 text-2xl p-2">Humedad</h2>
                            <div className="h-3/4 flex justify-center items-center">
                                <p className="text-center text-5xl font-bold">{data.current.humidity}%</p>
                            </div>
                        </article>
                        <article className="article-stats">
                            <h2 className="h-1/4 text-2xl p-2">Sensación termica</h2>
                            <div className="h-3/4 flex justify-center items-center">
                                <p className="text-center text-5xl font-bold">{data.current.feelslike_c}°C</p>
                            </div>
                        </article>
                        <article className="article-stats">
                            <h2 className="h-1/4 text-2xl p-2">PM</h2>
                            <div className="h-3/4">
                                <ProgressSemicircle color={'black'} indice={'10'} indiceTexto={data.forecast.forecastday[0].astro.sunset} limite={16}/>
                            </div>
                        </article>
                    </div>
                </>
            )

            }
            
        </section>
    )
}
export default ThisDayStats