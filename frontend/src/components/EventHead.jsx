import data from "../data"
import "../styles/eventHead.css"
export default function EventHead({id}){
    const {name,city,date} = data.events.find(dato => dato.id === Number(id));
    return(
        <div>
            <h3>{name}-{city}</h3>
            <li>{String(date)}</li>
        </div>
    )
};