import { DistrictType, RegionsType } from './types'
import kgMapDistrict from "./kg-map.json"

type Map = {
    district: DistrictType
    region: RegionsType
    id: number
    d?: string
}

type Props = {
    activeRegion?: RegionsType | null
    changeActiveDistrict: (a: number | null) => void
    activeDistrict?: number | null
}
const colors = {
    active: "#1754C1",
    deactive: "rgba(255,255,255, 0.4)",
}

export const KgMapDistrictModule = ({
                          activeDistrict,
                          changeActiveDistrict,
                          activeRegion,
}: Props) => {
    const data = kgMapDistrict as Map[]
    return (
        <svg
            width='100%'
            height='100%'
            viewBox='0 0 949 490'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            {data?.map((item) => {
                return (
                    <path
                        className='district-path'
                        style={{
                            cursor: 'pointer',
                            transition: '350ms',
                        }}
                        onClick={() => {
                            changeActiveDistrict(item.id)
                        }}
                        d={item?.d}
                        fill={activeDistrict === item.id ? colors.active : colors.deactive}
                        stroke='#000822'
                        strokeWidth='0.2'
                    ></path>
                )
            })}
        </svg>
    )
}
