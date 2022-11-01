import Header from "../components/Header";
import "../styles/HomeScreen.css";
import data from "../data.js";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";
export default function HomeScreen(){
    return(
        <div>
            <Header/>
            <section className="events__container">
                {
                    data.events.map((event,index) => {
                        return(
                            <Link to="#">
                                {/*Paso por el evento que esta siendo recorrido como prop del componente EventCard*/}
                                <EventCard event={event}/>
                            </Link>
                        );
                    })
                }
            </section>
        </div>
    );
}