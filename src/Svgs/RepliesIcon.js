import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function RepliesIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24.526}
      height={19.853}
      viewBox="0 0 24.526 19.853"
      {...props}>
      <G data-name="Group 59" fill={props.fill || '#11a99d'}>
        <Path
          data-name="Path 52964"
          d="M17.814 0H6.712A6.716 6.716 0 000 6.712V9.4a6.716 6.716 0 006.712 6.71h1.936l1.5 2.53a2.45 2.45 0 002.117 1.213 2.4 2.4 0 002.115-1.213l1.5-2.53h1.936a6.716 6.716 0 006.71-6.71V6.712A6.7 6.7 0 0017.814 0zm5.163 9.4a5.134 5.134 0 01-5.138 5.138h-2.374a.77.77 0 00-.671.387l-1.756 2.892a.846.846 0 01-.775.439.9.9 0 01-.775-.439L9.759 14.9a.77.77 0 00-.671-.387H6.712A5.118 5.118 0 011.549 9.4V6.712a5.134 5.134 0 015.138-5.138h11.127a5.134 5.134 0 015.138 5.138V9.4z"
        />
        <Path
          data-name="Path 52965"
          d="M7.461 6.48H5.395a.518.518 0 00-.516.516v2.065a.518.518 0 00.516.516H7.46a.518.518 0 00.516-.516V6.996a.518.518 0 00-.515-.516z"
        />
        <Path
          data-name="Path 52966"
          d="M13.296 6.48H11.23a.518.518 0 00-.516.516v2.065a.518.518 0 00.516.516h2.065a.518.518 0 00.516-.516V6.996a.518.518 0 00-.515-.516z"
        />
        <Path
          data-name="Path 52967"
          d="M19.131 6.48h-2.066a.518.518 0 00-.516.516v2.065a.518.518 0 00.516.516h2.065a.518.518 0 00.516-.516V6.996a.487.487 0 00-.515-.516z"
        />
      </G>
    </Svg>
  );
}

export {RepliesIcon};
