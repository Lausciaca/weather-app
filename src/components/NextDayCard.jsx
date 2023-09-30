function NextDayCard ({day, weather}) {

    return (
        <article className=" w-1/4 h-full flex flex-col items-start justify-evenly relative">
            <div className="absolute top-0 right-0">
                <img src={weather === 'soleado' ? 'src/assets/svg/soleado.svg' : 'src/assets/svg/nieve.svg'} alt="Clima del dia" className="h-40" />
            </div>
            <div className="card h-5/6 w-11/12 text-center flex flex-col justify-end p-3 rounded-xl gap-7">
                <div>   
                    <h2 className="day-text"><span className=" text-2xl">{ day }</span>, 20-31°C</h2>
                </div>
                <div>
                    <h2 className="text-xl" >Parcialmente nublado</h2>
                </div>
                <div>
                    <h3 className="text-xl" >Lluvia 10%</h3>
                </div>
            </div>
        </article>
    )
}
export default NextDayCard