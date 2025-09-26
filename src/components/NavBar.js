function NavBar(props){
    return (
        <div id={'nav'}>
            <button className={props.whatToShow==="Salads" ? "active" : null} onClick={() => {props.navClick("Salads")}}>
                Салати
            </button>
            <button className={props.whatToShow==="Hot" ? "active" : null} onClick={() => {props.navClick("Hot")}}>
                Топли јадења и палачинки
            </button>
            <button className={props.whatToShow==="Pizza" ? "active" : null} onClick={() => {props.navClick("Pizza")}}>
                Пици и пастрмајлии
            </button>
            <button className={props.whatToShow==="Drinks" ? "active" : null} onClick={() => {props.navClick("Drinks")}}>
                Пијалоци
            </button>
        </div>
    )
}

export default NavBar
