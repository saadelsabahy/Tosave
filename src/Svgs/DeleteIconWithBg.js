import * as React from 'react';
import Svg, {Defs, G, Rect, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function DeleteIconWithBg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={77}
      height={77}
      viewBox="0 0 77 77"
      {...props}>
      <Defs></Defs>
      <G data-name="Group 300">
        <G filter="url(#prefix__a)">
          <Rect
            data-name="Rectangle 2570"
            width={44}
            height={44}
            rx={13}
            transform="translate(16.5 16.5)"
            fill="#f3184d"
            opacity={0.1}
          />
        </G>
        <G fill="#f3184d" stroke="#f3184d" strokeWidth={0.5}>
          <Path
            data-name="Path 52953"
            d="M45.888 31.423H30.582a.912.912 0 00-.909 1l1.556 16.73v.014a1.259 1.259 0 001.246 1.118h11.454a1.259 1.259 0 001.246-1.118v-.01l1.622-16.734a.914.914 0 00-.908-1zm-1.519 17.652a.448.448 0 01-.44.4H32.476a.448.448 0 01-.44-.395l-1.555-16.728a.1.1 0 01.026-.079.1.1 0 01.075-.035h15.306a.1.1 0 01.075.033.106.106 0 01.026.081z"
          />
          <Path
            data-name="Path 52954"
            d="M35.954 35.647a.406.406 0 00-.406.406v10.32a.406.406 0 00.811 0v-10.32a.406.406 0 00-.405-.406z"
          />
          <Path
            data-name="Path 52955"
            d="M40.517 35.527a.406.406 0 00-.406.406v10.32a.406.406 0 10.811 0v-10.32a.406.406 0 00-.405-.406z"
          />
          <Path
            data-name="Path 52956"
            d="M29.77 30.16H46.7a.4.4 0 00.406-.4h0a.413.413 0 00-.406-.414h-5.677v-2.069a.4.4 0 00-.383-.417h-4.81a.4.4 0 00-.383.417v2.067H29.77a.406.406 0 100 .811zm6.488-2.484h3.954v1.673h-3.954z"
          />
        </G>
      </G>
    </Svg>
  );
}

export {DeleteIconWithBg};
