import NextDayCard from "../components/NextDayCard"
import ThisDayCard from "../components/ThisDayCard"
function Home () {

    return (
        <main className="main-app flex p-10">
            <section className="w-1/3 h-full">
                <ThisDayCard />
            </section>
            <section className="w-2/3 h-1/2">
                <section className="w-full h-full flex justify-around">
                    <NextDayCard day={'Miercoles'} />
                    <NextDayCard day={'Jueves'} />
                    <NextDayCard day={'Viernes'} />
                    <NextDayCard day={'Sabado'} />
                </section>
                <section>
                    
                </section>
            </section>
        </main>
    )
}

export default Home