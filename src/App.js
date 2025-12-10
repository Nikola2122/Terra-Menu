import './styles/App.css';
import Header from "./components/Header";
import MainPart from "./components/MainPart";
import Footer from "./components/Footer";
import {LanguageSwitcher} from "./components/LanguageSwitcher";
import {useState} from "react";
import {LangContext} from "./utils/LangContext";

function App() {
    const [lang, setLang] = useState('mk')

    return (
        <LangContext.Provider value={lang}>
            <div id={'wrapper'}>
                <Header/>
                <MainPart/>
                <Footer/>
                <LanguageSwitcher handleClick={setLang}/>
            </div>
        </LangContext.Provider>
    )
}

export default App;
