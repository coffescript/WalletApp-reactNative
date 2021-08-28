import * as React from "react"
import Svg, { Path, G, Circle } from "react-native-svg"

function SvgComponent(props) {
    return (
        <>
            <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M22.6046 8.37513H18.3699C16.3993 8.37859 14.8028 9.93514 14.7993 11.8566C14.7966 13.7823 16.3948 15.3458 18.3699 15.3484H22.6082V15.6543C22.6082 19.0136 20.5717 21 17.1255 21H8.09171C4.6446 21 2.60815 19.0136 2.60815 15.6543V8.33786C2.60815 4.97862 4.6446 3 8.09171 3H17.1219C20.5682 3 22.6046 4.97862 22.6046 8.33786V8.37513ZM7.34771 8.36733H12.9877H12.9913H12.9984C13.4206 8.36559 13.7619 8.03019 13.7602 7.61765C13.7584 7.20598 13.4135 6.87318 12.9913 6.87491H7.34771C6.92815 6.87664 6.58771 7.20858 6.58593 7.61852C6.58415 8.03019 6.92549 8.36559 7.34771 8.36733Z" fill="white" />
                <Path opacity="0.4" d="M16.6456 12.2967C16.8547 13.2478 17.6886 13.9171 18.6407 13.8997H21.8907C22.2868 13.8997 22.6082 13.5716 22.6082 13.166V10.6345C22.6073 10.2298 22.2868 9.90086 21.8907 9.89999H18.5642C17.4812 9.90347 16.6065 10.8024 16.6082 11.9103C16.6082 12.0399 16.6209 12.1696 16.6456 12.2967Z" fill="white" />
                <Circle cx="18.6082" cy="11.9" r="1" fill="white" />
            </Svg>

        </>
    )
}

export default SvgComponent
