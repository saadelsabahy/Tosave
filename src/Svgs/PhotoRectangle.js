import * as React from 'react';
import Svg, {G, Rect} from 'react-native-svg';

function PhotoRecangle(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={55}
      height={55}
      viewBox="0 0 55 55"
      {...props}>
      <G fill="none" stroke="#11a99d" strokeWidth={2} opacity={0.78}>
        <Rect width={55} height={55} rx={17} stroke="none" />
        <Rect x={1} y={1} width={53} height={53} rx={16} />
      </G>
    </Svg>
  );
}

export {PhotoRecangle};
