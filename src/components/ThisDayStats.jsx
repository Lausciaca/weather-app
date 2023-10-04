import ProgressSemicircle from "./progress-semicircle/ProgressSemicircle"
function ThisDayStats() {
    return(
        <section className="card w-full h-full m-auto rounded-3xl flex flex-col justify-center">
            <h3 className="day-text m-auto pt-4 text-2xl"><span>Estadisticas del dia</span></h3>
            <div className="w-11/12 h-5/6 flex flex-wrap justify-around m-auto">
                <article className="article-stats">
                    <h2 className="h-1/4 text-2xl p-2">Indice UV</h2>
                    <div className="h-3/4">
                        <ProgressSemicircle color={'orange'} indice={10} indiceTexto={10} limite={16}/>
                    </div>
                </article>
                <article className="article-stats">
                    <h2 className="h-1/4 text-2xl p-2">Viento</h2>
                    <div className="h-3/4 flex flex-col justify-evenly">
                        <p className="text-center text-5xl font-bold">Sur</p>
                        <p className="text-center">22KM/H</p>
                    </div>
                </article>
                <article className="article-stats">
                    <h2 className="h-1/4 text-2xl p-2">AM-PM</h2>
                    <div className="h-3/4">
                        <ProgressSemicircle color={'orange'} indice={'10'} indiceTexto={'7:00-20:00'} limite={16}/>
                    </div>
                </article>
                <article className="article-stats">
                    <h2 className="h-1/4 text-2xl p-2">Humedad</h2>
                    <div className="h-3/4 flex justify-center items-center">
                        <p className="text-center text-5xl font-bold">43%</p>
                    </div>
                </article>
                <article className="article-stats">
                    <h2 className="h-1/4 text-2xl p-2">Sensacion termica</h2>
                    <div className="h-3/4 flex justify-center items-center">
                        <p className="text-center text-5xl font-bold">22°C</p>
                    </div>
                </article>
                <article className="article-stats">
                    <h2 className="h-1/4 text-2xl p-2">Calidad de aire</h2>
                    <div className="h-3/4">
                        <ProgressSemicircle color={'orange'} indice={25} indiceTexto={25} limite={160}/>
                    </div>
                </article>
            </div>
        </section>
    )
}
export default ThisDayStats