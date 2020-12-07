import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function EditIconWithoutBg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={21.883}
      height={21.444}
      viewBox="0 0 21.883 21.444"
      {...props}>
      <G data-name="Group 357" fill="#11a99d">
        <Path
          data-name="Path 53002"
          d="M11.987 2.26l-8.072 8.072 4.036 4.036 8.072-8.072"
        />
        <Path
          data-name="Path 53003"
          d="M2.578 11.694l4.036 4.036-4.206 1.191A.912.912 0 011.387 15.9z"
        />
        <Path
          data-name="Path 53004"
          d="M17.384 4.959a2.669 2.669 0 000-4.036 2.669 2.669 0 00-4.036 0z"
        />
        <Path
          data-name="Path 53005"
          d="M21.639 21.447H.243A.23.23 0 010 21.2v-1.41a.23.23 0 01.243-.243h21.4a.23.23 0 01.243.243v1.41a.23.23 0 01-.247.247z"
        />
      </G>
    </Svg>
  );
}

export {EditIconWithoutBg};
