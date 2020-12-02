import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';

function UnCheckedSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      {...props}>
      <Rect
        data-name="Rectangle 2578"
        width={30}
        height={30}
        rx={8}
        fill="#eee"
      />
    </Svg>
  );
}

export {UnCheckedSvg};
