import Nothing from "./menus/Nothing";
import Menu from "./menus/Menu";

function Display(props) {
    return (
        <div>
            {props.whatToShow === 'Nothing' ?
                <Nothing /> :
                <Menu whatToShow={props.whatToShow} />
            }
        </div>
    )
}

export default Display