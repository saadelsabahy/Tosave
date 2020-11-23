import * as React from 'react';
import Svg, {Defs, G, Rect, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function EditIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={77}
      height={77}
      viewBox="0 0 77 77"
      {...props}>
      <Defs></Defs>
      <G data-name="Group 44">
        <G filter="url(#prefix__a)">
          <Rect
            data-name="Rectangle 2406"
            width={44}
            height={44}
            rx={13}
            transform="translate(16.5 16.5)"
            fill="#263231"
            opacity={0.1}
          />
        </G>
        <Path
          data-name="Path 52957"
          d="M48.133 30.218l-1.888-1.888a1.834 1.834 0 00-2.627 0L29.175 42.695c-.082.082-.082.082-.082.164l-1.318 4.597c0 .164 0 .246.082.328l.082.082.493.493.164.164c.082.082.246.164.328.082l4.6-1.313c.082 0 .082-.082.164-.082l14.445-14.447a1.889 1.889 0 000-2.545zm-2.463-1.313l1.805 1.806a1.04 1.04 0 010 1.478l-1.477 1.477-3.365-3.366 1.56-1.4a1.04 1.04 0 011.477.005zM29.175 47.621l-.41-.41 1.231-4.186 11.979-11.904 3.366 3.366-11.574 11.574-3.53-3.694c-.164-.164-.575.082-.739.164a.308.308 0 000 .493l3.366 3.527zm14.443-13.052c.164.164.246.493.082.575l-8.045 8.044a.425.425 0 01-.657 0c-.164-.164-.246-.493-.082-.575l8.045-8.045a.425.425 0 01.657 0z"
          fill="#263231"
        />
        <Path
          data-name="Line 23"
          fill="none"
          stroke="#263231"
          strokeLinecap="round"
          d="M30 50h16"
        />
      </G>
    </Svg>
  );
}

export {EditIcon};
