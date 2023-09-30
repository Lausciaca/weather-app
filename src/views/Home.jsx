import NextDayCard from "../components/NextDayCard"
import ThisDayCard from "../components/ThisDayCard"
function Home () {

    return (
        <main className="main-app flex">
            <section className="w-1/4 h-full">
                <ThisDayCard />
            </section>
            <section className="w-3/4 h-1/2">
                <NextDayCard />
            </section>
        </main>
    )
}

export default Home