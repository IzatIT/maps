import {KgMapRegionsModule} from "../../modules";
import {useState} from "react";
import {REGIONS_IDS} from "../../modules/kg-map-regions/constants";

export const KgMapRegionsPage = () => {
    const [activeRegion, setActiveRegion] = useState(REGIONS_IDS.OSH)
    return(
        <KgMapRegionsModule
            handleClickRegion={(value) => setActiveRegion(value)}
            activeRegion={activeRegion}/>
    )
}