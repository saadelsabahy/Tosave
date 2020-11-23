import * as React from 'react';
import Svg, {Defs, G, Rect} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function DeleteIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={77}
      height={77}
      viewBox="0 0 77 77"
      {...props}>
      <Defs></Defs>
      <G filter="url(#prefix__a)">
        <Rect
          data-name="Rectangle 2406"
          width={44}
          height={44}
          rx={13}
          transform="translate(16.5 16.5)"
          fill="#f3184d"
          opacity={0.1}
        />
      </G>
    </Svg>
  );
}

export {DeleteIcon};
