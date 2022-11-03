import data from "../data"
import "../styles/eventHead.css"
export default function EventHead({id}){
    const {name,city,date} = data.events.find(dato => dato.id === Number(id));
    return(
        <div>
            <h3 className="eventHead__title">{name}</h3>
            <li className="eventHead__location">{date.toDateString()}-{date.toLocaleTimeString()}</li>
        </div>
    )
};