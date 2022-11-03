import formatPrices from "../utils";
import "../styles/CardEvent.css";
export default function EventCard(props){
    return(
        <article className={`event__card__container ${props.event.totalTickets===0 ? "event__card__disabled" : ""}`}>
            <figure className={`event__card__banner ${props.event.totalTickets===0 ? "event__banner__disabled" : ""}`}>
                <img src={props.event.image} alt={props.event.name} />
            </figure>
            <section className="event__description">
                <div className="event--title">
                    <p>{props.event.name}</p>
                </div>
                <div className="event--date">
                    <i className="bi bi-calendar2-week-fill"></i>
                    <p>{props.event.date.toDateString() + " - " +  props.event.date.toLocaleTimeString()}</p>
                </div>
                <div className="event--price">
                    <i className="bi bi-ticket-detailed-fill"></i>
                    <p>Desde {formatPrices(props.event.price)}</p>
                </div>
                <div className="event--location">
                    <i className="bi bi-geo-alt-fill"></i>
                    <p>{props.event.city}</p>
                </div>
            </section>
            <section className="event__action">
                <button disabled={`${props.event.totalTickets===0 ? "true" : ""}`}><i className="bi bi-ticket-perforated-fill"></i> COMPRAR TICKETS (Quedan: {props.event.totalTickets})</button>
            </section>
        </article>
    );
}