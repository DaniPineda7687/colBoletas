import "../styles/SpecificScreen.css";
import EventHead from "../components/EventHead";
import { useParams } from "react-router-dom";

export const SpecificScreen = () => {
    const {id} = useParams();
    return(
        <>
        <section className="specific__container">
            <EventHead id={id}/>
        </section>
        </>
    );
};