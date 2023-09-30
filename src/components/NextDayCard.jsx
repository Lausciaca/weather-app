function NextDayCard () {

    return (
         <article className="w-1/5 h-4/5 flex flex-col items-center justify-evenly">
            <div>
                <img src="src/assets/svg/soleado.svg" alt="Clima del dia" />
            </div>
            <div className="text-center">
                <div>
                    <h2 className="day-text"><span>Martes</span>, 20-31°C</h2>
                </div>
                <div>
                    <h2>Soleado</h2>
                </div>
                <div>
                    <h3>Lluvia 10%</h3>
                </div>
            </div>
         </article>
    )
}
export default NextDayCard