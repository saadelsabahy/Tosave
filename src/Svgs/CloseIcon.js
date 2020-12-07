import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function CloseIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={15.297}
      height={15.281}
      viewBox="0 0 15.297 15.281"
      {...props}
    >
      <G data-name="Group 356">
        <Path
          data-name="Path 53001"
          d="M9.01 7.648l6.012-6.012a.96.96 0 000-1.346.96.96 0 00-1.346 0l-6.027 6L1.637.275a.96.96 0 00-1.346 0 .96.96 0 000 1.346l6 6.027L.275 13.66a.96.96 0 000 1.346.96.96 0 001.346 0l6.027-6.012 6.012 6.012a.96.96 0 001.346 0 .96.96 0 000-1.346z"
          fill="#263231"
        />
      </G>
    </Svg>
  )
}

export  {CloseIcon}
