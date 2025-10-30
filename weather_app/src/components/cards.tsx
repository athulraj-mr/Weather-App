import Card from "./card"


function Cards() {
    return (
        <div id="cards" className="flex flex-col gap-5 md:gap-6 lg:flex-row w-fit h-fit pt-3.75 pr-1.5 pb-3.75 pl-1.5 lg:gap-3.75">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Cards