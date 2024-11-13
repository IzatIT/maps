import worldMap from "./world-coordinates.json";

type Props = {
    activeCountryId?: number | null;
    handleClickCountry: (data: number) =>  void
}

type WorldMapJsonType = {
    titleRu: string;
    titleKg: string;
    titleEn?: string;
    d: string;
    id: number;
}
const colors = {
    active: "#1754C1",
    deactive: "rgba(255,255,255, 0.4)",
}

export const WorldMapModule = ({ activeCountryId, handleClickCountry }: Props) => {

    return (
        <svg width="100%" height="100%" viewBox="0 0 1168 785" fill="none" xmlns="http://www.w3.org/2000/svg">
            {worldMap?.map((item: WorldMapJsonType, idx: number) => (
                <path key={idx}
                      d={item.d}
                      onClick={() => handleClickCountry(item.id)}
                      fill={activeCountryId && activeCountryId === item.id ?  colors.active : colors.deactive}
                      style={{ cursor: "pointer", transition: "350ms" }}
                      stroke={(item.id === 129 || item.id === 128) ? "green" : "white"}
                      strokeOpacity="0.7"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round" />
            ))}
        </svg>
    )
}
