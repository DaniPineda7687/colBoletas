import data from "../data"

export default function EventHead({id}){
    const eventPassed = data.events.find(dato => dato.id === Number(id));
    return(
        <section>
            <div><h2 className="prueba">{eventPassed.name}-{eventPassed.city}</h2></div>
            <div></div>
        </section>
    )
};