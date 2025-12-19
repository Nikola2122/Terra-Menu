import {useContext, useEffect, useState} from "react";
import {LangContext} from "../utils/LangContext";
import {useNavigate} from "react-router-dom";
import spinner from "../assets/images/spinner.png"


export default function RandomImage() {
    let lang = useContext(LangContext)
    const navigate = useNavigate();
    const [url, setUrl] = useState("");


    const handleClick = () => {
        setTimeout(() => {
            navigate(-1);
        }, 500);
    }

    async function getRandomPizza() {
        fetch(process.env.REACT_APP_API_URL)
            .then(res => res.json())
            .then(data => {
                setUrl(data.imageUrl)
            })
    }

    useEffect(() => {
        getRandomPizza();
    }, [])


    return (
        <div className={'random-pizza'}>
            <button onClick={handleClick} className={'goBack'}>{lang === 'mk' ? 'Назад' : 'Back'}</button>
            <div>
                {!!url ? (<img className={'pizza-image'} alt={''} src={url}/>) : <img className={'pizza-image'} alt={''} src={spinner}/>}
            </div>
        </div>
    )
}