import * as React from 'react';
import Svg, {Defs, G, Rect, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function AddIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={77}
      height={77}
      viewBox="0 0 77 77"
      {...props}>
      <Defs></Defs>
      <G data-name="Group 42">
        <G transform="translate(-.002 -.002)" filter="url(#prefix__a)">
          <Rect
            data-name="Rectangle 2406"
            width={44}
            height={44}
            rx={13}
            transform="translate(16.5 16.5)"
            fill={'#263231'}
          />
        </G>
        <Path
          data-name="Path 52952"
          d="M30.376 36.578h6.541v-6.361a2.034 2.034 0 014.066 0v6.361h6.365a2.034 2.034 0 010 4.066h-6.365v6.365a2.035 2.035 0 11-4.066 0v-6.361h-6.541a2.035 2.035 0 010-4.07z"
          fill="#fff"
          fillRule="evenodd"
        />
      </G>
    </Svg>
  );
}

export {AddIcon};
