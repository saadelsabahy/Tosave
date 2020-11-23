import * as React from 'react';
import Svg, {G, Path, Ellipse, Circle} from 'react-native-svg';

function HsaDashboardIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={88.978}
      height={88.489}
      viewBox="0 0 88.978 88.489"
      {...props}>
      <G
        transform="translate(2 2)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}>
        <Path d="M71.792 46.884h5.861a7.326 7.326 0 110 14.651H7.326a7.326 7.326 0 110-14.651h5.861" />
        <Path d="M32.233 4.264C18.769 8.073 12.556 19.311 9.699 29.303a65.241 65.241 0 00-1.8 8.791 59.2 59.2 0 00-.574 8.791M77.652 46.885a59.2 59.2 0 00-.571-8.791 65.243 65.243 0 00-1.8-8.791c-2.859-9.992-9.071-21.23-22.536-25.039M52.745 13.186V2.93A2.93 2.93 0 0049.815 0H35.163a2.93 2.93 0 00-2.93 2.93v10.256" />
        <Ellipse
          cx={12}
          cy={11.5}
          rx={12}
          ry={11.5}
          transform="translate(30.489 20.489)"
        />
        <Path d="M34.738 41.024h-6.9a2.817 2.817 0 01-2.931-2.666v-9.319a2.817 2.817 0 012.93-2.667h4.513M52.628 26.372h4.513a2.817 2.817 0 012.93 2.667v9.318a2.817 2.817 0 01-2.93 2.667h-6.9M24.907 29.303v8.791H7.897a65.241 65.241 0 011.802-8.791zM77.081 38.094h-17.01v-8.791h15.208a65.243 65.243 0 011.802 8.791zM8.791 61.536l24.907 14.651M76.187 61.536L51.28 76.187" />
        <Ellipse
          cx={9}
          cy={8.5}
          rx={9}
          ry={8.5}
          transform="translate(33.489 67.489)"
        />
        <Circle cx={3} cy={3} r={3} transform="translate(39.489 73.489)" />
        <Path d="M36.189 70.063l-14.212-8.527M63.001 61.536l-14.212 8.527" />
      </G>
    </Svg>
  );
}

export default HsaDashboardIcon;
