import * as React from 'react';
import Svg, {G, Ellipse, Path} from 'react-native-svg';

function EmployeeIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30.995}
      height={35.306}
      viewBox="0 0 30.995 35.306"
      {...props}>
      <G data-name="Group 255" fill="#263231">
        <Ellipse
          data-name="Ellipse 33"
          cx={7.767}
          cy={9.068}
          rx={7.767}
          ry={9.068}
          transform="translate(7.73)"
        />
        <Path
          data-name="Path 52977"
          d="M25.383 19.995l-3.865-1.747a9.243 9.243 0 01-12.041 0l-3.865 1.747A9.513 9.513 0 000 28.695v3.122a3.489 3.489 0 003.493 3.493H27.5a3.489 3.489 0 003.493-3.493v-3.126a9.513 9.513 0 00-5.61-8.696zm-1.115 7.507a.429.429 0 01-.446.446h-3.976a.429.429 0 01-.446-.446v-1.154a.429.429 0 01.446-.446h3.977a.429.429 0 01.446.446z"
        />
      </G>
    </Svg>
  );
}

export {EmployeeIcon};
