import { REGIONS_IDS } from "./constants";
import kgMap from "./kg-map-coordinates.json";

type Props = {
    activeRegion?: number;
    handleClickRegion: (p: number) => void;
    activeColor?: string
    color?: string;
    strokeColor?: string;
    withActiveRegionNames?: boolean;
    withRegionNames?: boolean
    textColor?: string;
    activeTextColor?: string
}

type KgMapJsonType = {
    titleRu: string;
    titleKg: string;
    dotCenter: string;
    dotOutline: string;
    d: string;
    id: number;
    id2: number;
}


const colors = {
    active: "#1754C1",
    deactive: "rgba(255,255,255, 0.4)",
}


export const KgMapRegionsModule = (
    {
        activeRegion,
        handleClickRegion,
        strokeColor = "white",
        withActiveRegionNames = false,
        withRegionNames = false,
    }: Props) => {
    const handleSelectRegion = (regionId: number) => () => {
        if (activeRegion === REGIONS_IDS.CHUY && regionId === REGIONS_IDS.CHUY) {
            handleClickRegion(REGIONS_IDS.BISHKEK)
        } else if (activeRegion === REGIONS_IDS.OSH && regionId === REGIONS_IDS.OSH) {
            handleClickRegion(REGIONS_IDS.OSH_CITY)
        } else {
            handleClickRegion(regionId)
        }
    }
    const data = kgMap as KgMapJsonType[]
    return (
        <svg width="100%" height="100%" viewBox="0 0 1202 594" fill="none" xmlns="http://www.w3.org/2000/svg">
            {data?.map((item: KgMapJsonType) => (
                <path key={item.id}
                      d={item.d}
                      onClick={handleSelectRegion(item.id)}
                      fill={(activeRegion === item.id || activeRegion === item.id2) ?
                          colors.active : colors.deactive}
                      style={{
                          cursor: "pointer", transition: "350ms",
                      }}
                      stroke={strokeColor}
                      strokeOpacity="0.7"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round" />
            ))}
            {withActiveRegionNames ?
                <>
                    {data?.map((item: KgMapJsonType) =>
                        (activeRegion === item.id || activeRegion === item.id2) ? (
                            <>
                                <path
                                    d={item.dotCenter}
                                    onClick={handleSelectRegion(item.id)}
                                    style={{ cursor: "pointer", transition: "350ms" }}
                                    fill="#5686FF" />
                                <path
                                    d={item.dotOutline}
                                    onClick={handleSelectRegion(item.id)}
                                    style={{ cursor: "pointer", transition: "350ms" }}
                                    stroke="white" strokeWidth="2" />
                            </>
                        ) : null)}
                    {data?.map((item: KgMapJsonType) =>
                        (activeRegion === item.id || activeRegion === item.id2) ? (
                            <path key={item.id}
                                  d={item.titleRu}
                                  fill="black" />
                        ) : null)}
                </> : null}
            {withRegionNames ?
                <>
                    {data?.map((item: KgMapJsonType) => (
                        <>
                            <path
                                d={item.dotCenter}
                                onClick={handleSelectRegion(item.id)}
                                style={{ cursor: "pointer", transition: "350ms" }}
                                fill="#5686FF" />
                            <path
                                d={item.dotOutline}
                                onClick={handleSelectRegion(item.id)}
                                style={{ cursor: "pointer", transition: "350ms" }}
                                stroke="white" strokeWidth="2" />
                        </>
                    ))}
                    {data?.map((item: KgMapJsonType) => (
                        <path key={item.id}
                              d={item.titleRu}
                              fill={(activeRegion === item.id || activeRegion === item.id2) ? "orange" : "black"} />
                    ))}
                </> : null}
        </svg>
    )
}
