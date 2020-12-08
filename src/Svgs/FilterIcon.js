import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function FilterIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={21.853}
      viewBox="0 0 18 21.853"
      {...props}>
      <G data-name="Group 50">
        <Path
          data-name="Path 52960"
          d="M12.081 10.734l5.589-7.922A1.784 1.784 0 0016.216 0H1.783A1.784 1.784 0 00.326 2.812l5.592 7.922a.59.59 0 01.109.342v8.994a1.783 1.783 0 002.581 1.6c.825-.414 1.765-.883 2.378-1.189a1.784 1.784 0 00.986-1.6v-7.8a.59.59 0 01.109-.342zm-.971-.686a1.783 1.783 0 00-.327 1.028v7.8a.6.6 0 01-.328.531L8.077 20.6a.595.595 0 01-.861-.531v-8.993a1.783 1.783 0 00-.327-1.028L1.297 2.126a.595.595 0 01.486-.937h14.433a.595.595 0 01.486.937l-5.592 7.922zm-.921-6.482h3.567a.595.595 0 000-1.189h-3.568a.595.595 0 100 1.189z"
          fill="#11a99d"
          fillRule="evenodd"
        />
      </G>
    </Svg>
  );
}

export {FilterIcon};
