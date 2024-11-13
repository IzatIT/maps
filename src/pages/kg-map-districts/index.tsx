import {KgMapDistrictModule} from "../../modules";
import {useState} from "react";
import {DISTRICT, REGIONS, RegionsType} from "../../modules/kg-map-districts/types";

export const KgMapDistrictsPage = () => {
    const [activeDistrict, setActiveDistrict] = useState<number | null | undefined>(DISTRICT.CHUY)
    const [activeRegion, setActiveRegion] = useState<RegionsType>(REGIONS.OSH)

    return <KgMapDistrictModule
        activeRegion={activeRegion}
        changeActiveDistrict={setActiveDistrict}
        activeDistrict={activeDistrict}/>
}