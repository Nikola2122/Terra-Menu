import {useContext} from "react";
import {LangContext} from "./LangContext";

function Footer(){
    const lang = useContext(LangContext)
    return(
        <div className={'head'} style={{textAlign: "center" ,marginTop: 10, fontSize: 15}}>
            <div className={'footer-divs'}>
                <div>
                   <span id={'trick'}>{lang === 'mk' ? 'Тел. број' : 'Phone num.'}</span> 078-949/377
                </div>
            </div>
            <div id={'footer-logo'}>d</div>
            <div id={'right-div'} className={'footer-divs'}>
                {lang === 'mk' ? 'Плоштад Илинден бр. 64, Свети Николе' : 'Ilinden Square 64, Saint Nikole'}
            </div>
        </div>
    )
}

export default Footer