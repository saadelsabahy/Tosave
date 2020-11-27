import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function MonthlyCalendar(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 36.464}
      height={props.height || 39.627}
      viewBox="0 0 36.464 39.627"
      {...props}>
      <G data-name="noun_monthly calendar_876951">
        <G data-name="Group 28">
          <G
            data-name="Group 27"
            fill="none"
            stroke="#11a99d"
            strokeMiterlimit={10}
            strokeWidth={1.5}>
            <G data-name="Group 24">
              <Path
                data-name="Path 52929"
                d="M8.66 5.799a1.6 1.6 0 01-1.6 1.6h0a1.6 1.6 0 01-1.591-1.6V2.345a1.6 1.6 0 011.6-1.6h0a1.6 1.6 0 011.6 1.6z"
              />
              <Path
                data-name="Path 52930"
                d="M19.827 5.799a1.6 1.6 0 01-1.6 1.6h0a1.6 1.6 0 01-1.591-1.6V2.345a1.6 1.6 0 011.6-1.6h0a1.6 1.6 0 011.6 1.6z"
              />
              <Path
                data-name="Path 52931"
                d="M30.994 5.799a1.6 1.6 0 01-1.6 1.6h0a1.6 1.6 0 01-1.591-1.6V2.345a1.6 1.6 0 011.6-1.6h0a1.6 1.6 0 011.6 1.6z"
              />
            </G>
            <G data-name="Group 26">
              <G data-name="Group 25">
                <Path
                  data-name="Path 52932"
                  d="M5.469 3.914H2.877A2.127 2.127 0 00.75 6.041v30.71a2.127 2.127 0 002.127 2.127h30.71a2.127 2.127 0 002.127-2.127V6.04a2.127 2.127 0 00-2.127-2.126h-2.593"
                />
                <Path data-name="Line 14" d="M16.637 3.913H8.66" />
                <Path data-name="Line 15" d="M27.804 3.913h-7.977" />
              </G>
              <Path data-name="Line 16" d="M.75 11.128h34.964" />
            </G>
          </G>
        </G>
        <G data-name="Group 30">
          <G
            data-name="Group 29"
            fill="none"
            stroke="#11a99d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}>
            <Path
              data-name="Rectangle 2342"
              d="M5.962 15.944h4.451v4.452H5.962z"
            />
            <Path
              data-name="Rectangle 2343"
              d="M12.603 15.944h4.452v4.452h-4.452z"
            />
            <Path
              data-name="Rectangle 2344"
              d="M19.245 15.944h4.452v4.452h-4.452z"
            />
            <Path
              data-name="Rectangle 2345"
              d="M5.962 22.752h4.451v4.452H5.962z"
            />
            <Path
              data-name="Rectangle 2346"
              d="M12.603 22.752h4.452v4.452h-4.452z"
            />
            <Path
              data-name="Rectangle 2347"
              d="M19.245 22.752h4.452v4.452h-4.452z"
            />
            <Path
              data-name="Rectangle 2348"
              d="M26.049 15.944h4.452v4.452h-4.452z"
            />
            <Path
              data-name="Rectangle 2349"
              d="M26.049 22.752h4.452v4.452h-4.452z"
            />
            <Path
              data-name="Rectangle 2350"
              d="M5.962 29.559h4.451v4.452H5.962z"
            />
            <Path
              data-name="Rectangle 2351"
              d="M12.603 29.559h4.452v4.452h-4.452z"
            />
            <Path
              data-name="Rectangle 2352"
              d="M19.245 29.559h4.452v4.452h-4.452z"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export {MonthlyCalendar};
