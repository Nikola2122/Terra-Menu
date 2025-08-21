import Item from "../Item";
import hot from "../../data/Hot";
function Hot(){
    const components = hot.map((el)=>{
        return <Item id={el.id} key={el.id} name={el.name} desc={el.desc} price={el.price} />
    })
    return (
        <div className={"menu"}>
            {components}
        </div>
    )
}

export default Hot