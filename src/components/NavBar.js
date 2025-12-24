import {LangContext} from "../utils/LangContext";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
function NavBar(props){
    const lang = useContext(LangContext)
    const navigate = useNavigate()

    const handleClick = () => {
        setTimeout(() => {
            navigate("/random-image");
        }, 500);
    }

    return (
        <div id={'nav'}>
            <button className={props.whatToShow==="Salads" ? "active" : null} onClick={() => {props.navClick("Salads")}}>
                {lang === 'mk' ? 'Салати' : 'Salads'}
            </button>
            <button className={props.whatToShow==="Hot" ? "active" : null} onClick={() => {props.navClick("Hot")}}>
                {lang === 'mk' ? 'Топли јадења и десерти' : 'Hot dishes and desserts'}
            </button>
            <button className={props.whatToShow==="Pizza" ? "active" : null} onClick={() => {props.navClick("Pizza")}}>
                {lang === 'mk' ? 'Пици и пастрмајлии' : 'Pizzas and Pastrmajlija'}
            </button>
            <button className={props.whatToShow==="Drinks" ? "active" : null} onClick={() => {props.navClick("Drinks")}}>
                {lang === 'mk' ? 'Пијалоци' : 'Drinks'}
            </button>
            <button onClick={handleClick}>
                {lang === 'en' ? 'Gallery' : 'Галерија'}
            </button>
        </div>
    )
}

export default NavBar
