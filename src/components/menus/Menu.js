import React, { useEffect, useState } from "react";
import Item from "../Item";

function Menu(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const lang = props.lang
        async function loadData() {
            try {
                const module = await import(`../../data/${lang}/${props.whatToShow}.json`);
                setItems(module.default);
            } catch (err) {
                console.error("Failed to load menu data:", err);
                setItems([]); // fallback
            }
        }
        loadData();
    }, [props.lang, props.whatToShow]); // reload whenever the menu type changes

    const components = items.map((el) => (
        <Item id={el.id} key={el.id + props.whatToShow} name={el.name} desc={el.desc} price={el.price} />
    ));

    return <div className="menu">{components}</div>;
}

export default Menu;
