function NavBar(props){
    return (
        <div id={'nav'}>
            <button className={props.whatToShow==="Salads" ? "active" : null} onClick={() => {props.navClick("Salads")}}>
                {props.lang === 'mk' ? 'Салати' : 'Salads'}
            </button>
            <button className={props.whatToShow==="Hot" ? "active" : null} onClick={() => {props.navClick("Hot")}}>
                {props.lang === 'mk' ? 'Топли јадења и десерти' : 'Hot dishes and desserts'}
            </button>
            <button className={props.whatToShow==="Pizza" ? "active" : null} onClick={() => {props.navClick("Pizza")}}>
                {props.lang === 'mk' ? 'Пици и пастрмајлии' : 'Pizzas and Pastrmajlija'}
            </button>
            <button className={props.whatToShow==="Drinks" ? "active" : null} onClick={() => {props.navClick("Drinks")}}>
                {props.lang === 'mk' ? 'Пијалоци' : 'Drinks'}
            </button>
        </div>
    )
}

export default NavBar
