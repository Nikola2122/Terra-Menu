import Nothing from "./menus/Nothing";
import Menu from "./menus/Menu";
import DrinkMenu from "./menus/DrinkMenu";

function Display(props) {
    return (
        <div>
            {props.whatToShow === 'Nothing' ?
                <Nothing/> : props.whatToShow === 'Drinks' ?
                    <div className={'menu special'}>
                        <DrinkMenu lang={props.lang} id={1} name={'coffee'}/>
                        <DrinkMenu lang={props.lang} id={2} name={'nonAlcoholic'}/>
                        <DrinkMenu lang={props.lang} id={3} name={'alcoholic'}/>
                    </div>
                    :
                    <Menu lang={props.lang} whatToShow={props.whatToShow}/>
            }
        </div>
    )
}

export default Display