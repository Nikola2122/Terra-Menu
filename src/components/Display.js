import Nothing from "./menus/Nothing";
import Menu from "./menus/Menu";
import DrinkMenu from "./menus/DrinkMenu";

function Display(props) {
    return (
        <div>
            {props.whatToShow === 'Nothing' ?
                <Nothing/> : props.whatToShow === 'Drinks' ?
                    <div className={'menu special'}>
                        <DrinkMenu id={1} name={'coffee'}/>
                        <DrinkMenu id={2} name={'nonAlcoholic'}/>
                        <DrinkMenu id={3} name={'alcoholic'}/>
                    </div>
                    :
                    <Menu whatToShow={props.whatToShow}/>
            }
        </div>
    )
}

export default Display