import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function CorrectIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={29.755}
      height={30}
      viewBox="0 0 29.755 30"
      {...props}>
      <G data-name="Group 46">
        <Path
          data-name="Rectangle 2411"
          d="M14.878 0h14.877v15.122A14.878 14.878 0 0114.878 30 14.878 14.878 0 010 15.122v-.245A14.878 14.878 0 0114.878 0z"
          fill="#11a99d"
        />
        <G data-name="Group 45" fill="#fff">
          <Path
            data-name="Path 52958"
            d="M18.344 12.098l-4.6 4.6-2.049-2.069a.92.92 0 00-1.3 1.3l2.7 2.7a.938.938 0 00.649.264.977.977 0 00.649-.264l5.253-5.253a.906.906 0 000-1.3.925.925 0 00-1.302.022z"
          />
          <Path
            data-name="Path 52959"
            d="M21.874 10.515a.91.91 0 00-.406 1.217 7.205 7.205 0 11-11.521-1.89c2.8-2.8 2.231-4.787-1.3-1.278a9.029 9.029 0 1014.442 2.353.91.91 0 00-1.215-.402z"
          />
        </G>
      </G>
    </Svg>
  );
}

export {CorrectIcon};
