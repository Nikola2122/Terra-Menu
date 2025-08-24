import React from "react";
import alcoholic from "../../data/Drinks/alcoholic.json";
import nonAlcoholic from "../../data/Drinks/nonAlcoholic.json";
import coffee from "../../data/Drinks/coffee.json";
import DrinkItem from "../DrinkItem";
import {AnimatePresence, motion} from "framer-motion";
import logo from '../menus/logo.png'

const types = {
    'alcoholic': alcoholic,
    'nonAlcoholic': nonAlcoholic,
    'coffee': coffee
}
const names = {
    'alcoholic': 'Алкохолни пијалоци',
    'nonAlcoholic': 'Безалкохолни пијалоци',
    'coffee': 'Топли пијалоци'
}

class DrinkMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        }
    }

    handleToggle = () => {
        this.setState((prevState) => {
            return {
                toggled: !prevState.toggled
            }
        })
    }

    render() {
        const components = types[this.props.name].map((el) => {
            return <DrinkItem id={el.id} key={el.id + 'dr'} name={el.name} desc={el.desc} price={el.price}/>
        })
        return (
            <motion.div
                onClick={this.handleToggle}
                initial={{opacity:0, y:-5}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5, delay: 0.2*this.props.id}}
            >
                <div className={'drinkToggle'}>
                    <div className={'drinkName'}>{names[this.props.name]}</div>
                    <motion.div
                        animate={{rotate: this.state.toggled ? 180 : 0}}
                        transition={{ease: "easeInOut", duration: 0.3}}
                    >
                        <img id={'toggleLogo'} alt={''} src={logo}/>
                    </motion.div>
                </div>
                <AnimatePresence initial={false}>
                    {this.state.toggled && (
                        <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            style={{ overflow: "hidden" }}
                        >
                            {components}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    }
}

export default DrinkMenu