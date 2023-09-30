import ProgressSemicircle from "./progress-semicircle/ProgressSemicircle"
function ThisDayStats() {
    return(
        <section className="card w-full h-full m-auto rounded-3xl flex flex-col justify-center">
            <h3 className="day-text m-auto pt-4 text-2xl"><span>Estadisticas del dia</span></h3>
            <div className="w-11/12 h-5/6 flex flex-wrap justify-around m-auto">
                <article className="article-stats">
                    <h2 className="h-1/4 text-2xl p-2">Indice UV</h2>
                    <div className="h-3/4">
                        <ProgressSemicircle color={'orange'} indice={7}/>
                    </div>
                </article>
                <article className="article-stats">

                </article>
                <article className="article-stats">

                </article>
                <article className="article-stats">

                </article>
                <article className="article-stats">

                </article>
                <article className="article-stats">

                </article>
            </div>
        </section>
    )
}
export default ThisDayStats