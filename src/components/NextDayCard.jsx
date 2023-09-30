function NextDayCard ({day, }) {

    return (
        <article className=" w-1/5 h-4/5 flex flex-col items-start justify-evenly relative">
            <div className="absolute top-0 right-0">
                <img src="src/assets/svg/soleado.svg" alt="Clima del dia" />
            </div>
            <div className="card w-5/6 h-60 text-center flex flex-col justify-end p-3 rounded-xl gap-5
            ">
                <div>
                    <h2 className="day-text text-lg"><span> { day } </span>, 20-31°C</h2>
                </div>
                <div>
                    <h2>Parcialmente nublado</h2>
                </div>
                <div>
                    <h3>Lluvia 10%</h3>
                </div>
            </div>
        </article>
    )
}
export default NextDayCard