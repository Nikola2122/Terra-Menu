import './App.css';
import Header from "./components/Header";
import MainPart from "./components/MainPart";
import Footer from "./components/Footer";
import {LanguageSwitcher} from "./components/LanguageSwitcher";
import {useState} from "react";
function App() {
    const [lang,setLang] = useState('mk')
    const handleLang = (value) => {
        setLang(value)
    }

    return (
        <div id={'wrapper'}>
            <Header />
            <MainPart lang={lang} />
            <Footer lang={lang} />
            <LanguageSwitcher lang={lang} click={handleLang} />
        </div>
    )
}

export default App;
