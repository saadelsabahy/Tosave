import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ResetIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16.331}
      height={18.426}
      viewBox="0 0 16.331 18.426"
      {...props}>
      <Path
        data-name="Path 52976"
        d="M11 0H5.334A5.343 5.343 0 000 5.334v4.655a.776.776 0 001.552 0V5.334a3.766 3.766 0 013.763-3.763h5.644a3.775 3.775 0 013.8 3.763v4.073A3.766 3.766 0 0111 13.17H4l2.347-2.347a.782.782 0 10-1.106-1.106L1.552 13.4a.773.773 0 000 1.106l3.685 3.685a.777.777 0 00.562.233.81.81 0 00.562-.233.773.773 0 000-1.106L4 14.741h7a5.331 5.331 0 005.334-5.334V5.334A5.343 5.343 0 0011 0z"
        fill="#11a99d"
      />
    </Svg>
  );
}

export {ResetIcon};
