import {Route, Routes} from "react-router-dom";
import MainPart from "./MainPart";
import RandomImage from "./RandomImage";
import {useState} from "react";

export default function RoutesWrapper() {
    const [displayed, setDisplayed] = useState("Nothing");

    const handleClick = (value) => {
        setDisplayed((prev) => {
            if(prev === value) {
                return 'Nothing';
            }
            else{
                return value;
            }
        })
    }

    return (
        <Routes>
            <Route path="/" element={<MainPart whatToShow={displayed} handleClick={handleClick} />} />
            <Route path="/random-image" element={<RandomImage />} />
        </Routes>
    )
}