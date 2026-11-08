import './styles/App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {LanguageSwitcher} from "./components/LanguageSwitcher";
import {useState} from "react";
import {LangContext} from "./utils/LangContext";
import {BrowserRouter as Router} from "react-router-dom";
import RoutesWrapper from "./components/RoutesWrapper";
import {Snowfall} from "react-snowfall";
import Fall from "./components/Fall";

function App() {
    const [lang, setLang] = useState('mk')
    const today = new Date();
    const month = today.getMonth() + 1; // JS months: 0=Jan, 11=Dec
    const day = today.getDate();

    const showSnow = (month === 11 && day >= 15)  // Nov 15+
        || (month === 12)              // all December
        || (month === 1)               // all January
        || (month === 2 && day <= 15)  // Feb 1-15
    ;

    const showFall = (month >= 9 && month <= 10) // all September and October
        || (month === 11 && day < 15)            // Nov 1-14
    ;

    return (
        <LangContext.Provider value={lang}>
            {showFall && <Fall />}
            {showSnow && <Snowfall snowflakeCount={200} />}
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
