import * as React from "react"
import Svg, { Path, G, Circle } from "react-native-svg"

function SvgComponent(props) {
    return (
        <>
            <Svg width="41" height="24" viewBox="0 0 41 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="12.6082" cy="12" r="12" fill="#FF0000" />
                <Circle cx="28.6082" cy="12" r="12" fill="#FFB800" />
            </Svg>


        </>
    )
}

export default SvgComponent
