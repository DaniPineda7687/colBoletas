import data from "../data"
import "../styles/eventHead.css"
export default function EventHead({id}){
    const {name,city,date,direction} = data.events.find(dato => dato.id === Number(id));
    return(
        <>
        <div className="eventHead__container">
            <h3 className="eventHead__title">{name}</h3>
            <li className="eventHead__date">{date.toDateString()} - {date.toLocaleTimeString()} hrs</li>
            <a href="#" className="eventHead__location">{direction}</a>
        </div>
        <div className="eventHead__location__container">
            <li className="eventHead__location__pc">{direction}</li>
        </div>
        </>
    )
};