import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function NotificationIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20.763}
      height={25.532}
      viewBox="0 0 20.763 25.532"
      {...props}>
      <G data-name="Group 1">
        <Path
          data-name="Path 3"
          d="M10.382 2.891A10.39 10.39 0 000 13.268v8.018a.844.844 0 00.844.844h5.4a4.22 4.22 0 008.28 0h5.4a.844.844 0 00.844-.844v-8.018A10.39 10.39 0 0010.382 2.891zm0 20.919a2.532 2.532 0 01-2.389-1.688h4.777a2.532 2.532 0 01-2.388 1.688zm8.694-3.376H1.688V13.26a8.694 8.694 0 0117.387 0zM7.145.844A.844.844 0 017.989 0h4.786a.844.844 0 110 1.688H7.989a.844.844 0 01-.844-.844z"
          fill="#263231"
        />
      </G>
    </Svg>
  );
}

export {NotificationIcon};
