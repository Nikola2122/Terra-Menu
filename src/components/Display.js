import Hot from "./menus/Hot";

function Display(props) {
    return (
        <div>
            {props.whatToShow === 'Hot' ?
                <Hot />
                 :
                null
            }
        </div>
    )
}

export default Display