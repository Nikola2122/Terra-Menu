import React from "react";
import NavBar from "./NavBar";
import Display from "./Display.js"

export default function MainPart(props) {
    return (
        <div id={'main'}>
            <NavBar whatToShow={props.whatToShow} navClick={props.handleClick}/>
            <Display whatToShow={props.whatToShow}/>
        </div>
    )

}
