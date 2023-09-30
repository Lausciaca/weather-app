function ThisDayCard () {

    return (
         <article className="w-9/12 h-4/5 flex flex-col items-center justify-evenly">
            <div>
                <p className="text-base">Rosario, Argentina</p>
            </div>
            <div>
                <h2 className="day-text text-5xl"><span>Martes</span>, 31°C</h2>
            </div>
            <div>
                <img src="src/assets/svg/soleado.svg" alt="Clima del dia" className="w-72" />
            </div>
            <div>
                <h2 className="day-text text-2xl"><strong>Soleado</strong></h2>
            </div>
            <div>
                <h3>Lluvia 10%</h3>
            </div>
         </article>
    )
}
export default ThisDayCard