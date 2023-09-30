import NextDayCard from "../components/NextDayCard"
import ThisDayCard from "../components/ThisDayCard"
import ThisDayStats from "../components/ThisDayStats"
function Home () {

    return (
        <main className="main-app flex p-5">
            <section className="w-1/3 h-full">
                <ThisDayCard />
            </section>
            <section className="w-2/3 h-full flex flex-col pr-5">
                <section className="w-full h-2/5 flex justify-around">
                    <NextDayCard day={'Miercoles'} />
                    <NextDayCard day={'Jueves'} />
                    <NextDayCard day={'Viernes'} />
                    <NextDayCard day={'Sabado'} />
                </section>
                <section className="w-full h-3/5">
                    <ThisDayStats />
                </section>
            </section>
        </main>
    )
}

export default Home