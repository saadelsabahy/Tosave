import * as React from 'react';
import Svg, {G, Rect, Path} from 'react-native-svg';

function CheckedSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      {...props}>
      <G data-name="Group 296" transform="translate(-1403 -2322)">
        <Rect
          data-name="Rectangle 32"
          width={30}
          height={30}
          rx={8}
          transform="translate(1403 2322)"
          fill="#11a99d"
        />
        <Path
          data-name="Path 52937"
          d="M1415.381 2339.157l-3.554-2.44a.455.455 0 00-.284-.095.511.511 0 00-.45.735l3.838 7.156a.508.508 0 00.45.261.475.475 0 00.426-.237l6.066-9.975 1.232-2.014 1.564-2.559a.5.5 0 00-.426-.758.458.458 0 00-.355.166l-2.132 2.44-1.232 1.422z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export {CheckedSvg};
