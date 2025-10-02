import flag from './Flag_of_the_United_States.svg.png'
import flag2 from './Flag_of_North_Macedonia.svg'

export const LanguageSwitcher = (props) => {
    return (
        <div id={'langSwitch'}>
            <div
                style={props.lang === 'en' ? {backgroundColor: 'white', color: '#0054AC'}:null}
                onClick={()=>{props.click('en')}} className={'swD'}>

                <img className={'swF'} alt={''} src={flag}/>
                <button style={props.lang === 'en' ? {color: '#0054AC'}:null} className={'swB'}>EN</button>
            </div>
            <div
                style={props.lang === 'mk' ? {backgroundColor: 'white', color: '#0054AC'}:null}
                onClick={()=>{props.click('mk')}} className={'swD mk'}>

                <img className={'swF'} alt={''} src={flag2}/>
                <button style={props.lang === 'mk' ? {color: '#0054AC'}:null} className={'swB'}>MK</button>
            </div>
        </div>
    )
}