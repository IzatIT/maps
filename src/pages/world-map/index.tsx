import {WorldMapModule} from "../../modules";
import {useState} from "react";

export const WorldMapPage = () => {
    const [activeCountry, setActiveCountry] = useState<number>(0);

    return <WorldMapModule
            activeCountryId={activeCountry}
            handleClickCountry={(value) => setActiveCountry(value)}/>
}