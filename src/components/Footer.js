import logo from './menus/logo.png'
function Footer(){
    return(
        <div className={'head'} style={{textAlign: "center" ,marginTop: 10, fontSize: 15, justifyContent: "center", alignItems: "center"}}>
            <div className={'footer-divs'}>
                <div>
                   <span id={'trick'}> Тел. број </span> 078-949/377
                </div>
            </div>
            <img id={'footer-logo'} alt={''} src={logo}/>
            <div className={'footer-divs'}>
                Плоштад Илинден бр. 64, Свети Николе
            </div>
        </div>
    )
}

export default Footer