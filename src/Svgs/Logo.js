import * as React from 'react';
import Svg, {G, Path, Text, TSpan} from 'react-native-svg';

function Logo(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={82.712}
      height={33.174}
      viewBox="0 0 82.712 33.174"
      {...props}>
      <G data-name="Group 16">
        <Path
          data-name="Path 15"
          d="M3.74 23.73V8.055H0v-3.74h11v3.74H7.37v20.57z"
          fill="#8dc53e"
        />
        <Path
          data-name="Path 16"
          d="M12.755 4.315h11.011V19.16L12.755 33.174v-15.59h3.575v4.576l3.647-4.576V8.003h-7.222z"
          fill="#11a99d"
        />
        <Text
          transform="translate(27.712 27)"
          fill="#11a99d"
          fontSize={25}
          /* fontFamily="SegoeUI, Segoe UI" */
        >
          <TSpan x={0} y={0}>
            {'SAFE'}
          </TSpan>
        </Text>
      </G>
    </Svg>
  );
}

export {Logo};
