function NextDayCard ({day, }) {

    return (
        <article className=" w-1/5 h-4/5 flex flex-col items-start justify-evenly relative">
            <div className="absolute top-0 right-0">
                <img src="src/assets/svg/nublado/nublado.svg" alt="Clima del dia" className="h-36" />
            </div>
            <div className="card h-60 text-center flex flex-col justify-end p-3 rounded-xl gap-5
            ">
                <div>
                    <h2 className="day-text"><span className=" text-2xl"> { day } </span>, 20-31°C</h2>
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