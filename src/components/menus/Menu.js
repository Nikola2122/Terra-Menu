import React, {useContext, useEffect, useState} from "react";
import Item from "../Item";
import {LangContext} from "../../utils/LangContext";

function Menu(props) {
    const [items, setItems] = useState([]);
    const lang = useContext(LangContext)

    async function loadData(lang, whatShow) {
        try {
            const module = await import(`../../data/${lang}/${whatShow}.json`);
            setItems(module.default);
        } catch (err) {
            console.error("Failed to load menu data:", err);
            setItems([]);
        }
    }

    useEffect(() => {
        loadData(lang, props.whatToShow);
    }, [lang, props.whatToShow]);

    const components = items.map((el) => (
        <Item id={el.id} key={el.id + props.whatToShow} name={el.name} desc={el.desc} price={el.price} />
    ));

    return <div className="menu">{components}</div>;
}

export default Menu;
