import React from "react";
import DrinkItem from "../DrinkItem";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/images/logo_blue.png";
import DrinkSub from "../DinkSub";
import {LangContext} from "../../utils/LangContext";

class DrinkMenu extends React.Component {
    static contextType = LangContext
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
            drinks: null,   // will load dynamically
        };
    }

    componentDidMount() {
        this.prevLang = this.context
        this.loadData();
    }

    componentDidUpdate(prevProps) {
        if (this.prevLang !== this.context) {
            this.prevLang = this.context
            this.loadData();
        }
    }

    async loadData() {
        const lang = this.context
        const name = this.props.name;
        try {
            // Dynamic import based on language + type
            const data = await import(`../../data/Drinks/${lang}/${name}.json`);
            this.setState({ drinks: data.default });
        } catch (err) {
            console.error("Error loading drinks data:", err);
        }
    }

    handleToggle = () => {
        this.setState((prevState) => ({
            toggled: !prevState.toggled,
        }));
    };

    render() {
        const { drinks, toggled } = this.state;
        const lang = this.context
        const { name, id } = this.props;

        const names = {
            alcoholic: lang === "mk" ? "Алкохолни пијалоци" : "Alcoholic drinks",
            nonAlcoholic: lang === "mk" ? "Безалкохолни пијалоци" : "Nonalcoholic drinks",
            coffee: lang === "mk" ? "Топли пијалоци" : "Hot drinks",
        };

        const components =
            drinks?.map((el) =>
                el.price !== "sub" ? (
                    <DrinkItem id={el.id} key={el.id + "dr"} name={el.name} desc={el.desc} price={el.price} />
                ) : (
                    <DrinkSub key={el.id} name={el.name} />
                )
            ) ?? null;

        return (
            <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * id }}
            >
                <div onClick={this.handleToggle} className={`drinkToggle ${toggled ? "active" : ""}`}>
                    <div className="drinkName">{names[name]}</div>
                    <motion.div
                        animate={{ rotate: toggled ? 180 : 0 }}
                        transition={{ ease: "easeInOut", duration: 0.3 }}
                    >
                        <img id="toggleLogo" alt="" src={logo} />
                    </motion.div>
                </div>

                <AnimatePresence initial={false}>
                    {toggled && drinks && (
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

export default DrinkMenu;
