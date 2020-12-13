import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PlusIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18.729}
      height={18.689}
      viewBox="0 0 18.729 18.689"
      {...props}>
      <Path
        data-name="Path 52993"
        d="M1.778 7.468h5.848v-5.69a1.818 1.818 0 013.635 0v5.69h5.689a1.818 1.818 0 010 3.635h-5.69v5.69a1.819 1.819 0 11-3.635 0v-5.69H1.778a1.818 1.818 0 010-3.635z"
        fill="#11a99d"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export {PlusIcon};
