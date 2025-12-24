import './styles/App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {LanguageSwitcher} from "./components/LanguageSwitcher";
import {useState} from "react";
import {LangContext} from "./utils/LangContext";
import {BrowserRouter as Router} from "react-router-dom";
import RoutesWrapper from "./components/RoutesWrapper";
import {Snowfall} from "react-snowfall";

function App() {
    const [lang, setLang] = useState('mk')

    return (
        <LangContext.Provider value={lang}>
            <Snowfall
                snowflakeCount={200}
            />
            <Router>
                <div id={'wrapper'}>
                    <Header/>
                    <RoutesWrapper />
                    <Footer/>
                    <LanguageSwitcher handleClick={setLang} />
                </div>
            </Router>
        </LangContext.Provider>
    )
}

export default App;
