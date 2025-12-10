import flag from '../assets/images/Flag_of_the_United_States.svg.png'
import flag2 from '../assets/images/Flag_of_North_Macedonia.svg'
import {useContext} from "react";
import {LangContext} from "../utils/LangContext";

export const LanguageSwitcher = (props) => {
    const lang = useContext(LangContext)

    return (
        <div id={'langSwitch'}>
            <div
                style={lang === 'en' ? {backgroundColor: 'white'}:{backgroundColor: '#3074bb'}}
                onClick={()=>{props.handleClick('en')}} className={'swD'}>

                <img className={'swF'} alt={''} src={flag}/>
                <button style={lang === 'en' ? {color: '#0054AC'}:null} className={'swB'}>EN</button>
            </div>
            <div
                style={lang === 'mk' ? {backgroundColor: 'white'}:{backgroundColor: '#3074bb'}}
                onClick={()=>{props.handleClick('mk')}} className={'swD mk'}>

                <img className={'swF'} alt={''} src={flag2}/>
                <button style={lang === 'mk' ? {color: '#0054AC'}:null} className={'swB'}>MK</button>
            </div>
        </div>
    )
}