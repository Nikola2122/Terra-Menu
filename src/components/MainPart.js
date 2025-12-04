import React from "react";
import NavBar from "./NavBar";
import Display from "./Display.js"
class MainPart extends React.Component{
    constructor() {
        super();
        this.state = {
            displayed: 'Nothing'
        }
    }

    handleClick = (value) => {
        this.setState((prevState) => {
            if (prevState.displayed === value){
                return {
                    displayed: 'Nothing'
                }
            }
            else{
                return {
                    displayed: value
                }
            }
        })
    }

    render() {
        return (
            <div id={'main'}>
                <NavBar whatToShow={this.state.displayed} navClick={this.handleClick} />
                <Display whatToShow={this.state.displayed} />
            </div>
        )
    }
}

export default MainPart