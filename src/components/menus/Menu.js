import Item from "../Item";
import Hot from "../../data/Hot.json";
import Salads from "../../data/Salads.json"
import Pizza from "../../data/Pizza.json"

const types = {
    'Hot': Hot,
    'Salads': Salads,
    'Pizza': Pizza
}

function Menu(props){
    const current = types[props.whatToShow]
    const components = current.map((el)=>{
        return <Item id={el.id} key={el.id+props.whatToShow} name={el.name} desc={el.desc} price={el.price} />
    })
    return (
        <div className={"menu"}>
            {components}
        </div>
    )
}

export default Menu