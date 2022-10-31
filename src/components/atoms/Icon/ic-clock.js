import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../../utils';

const IconClock = ({filled, size, color}) => {
  const actualSize = size ? size : '24';
  let actualColor = color ? color : colors.text.secondary;

  if (filled === true) {
    actualColor = color ? color : colors.primary;

    return (
      <Svg
        width={actualSize}
        height={actualSize}
        viewBox="0 0 512 512"
        fill={actualColor}>
        <Path d="m256,11c-135.1,0-245,109.9-245,245s109.9,245 245,245 245-109.9 245-245-109.9-245-245-245zm203.2,255.4h20.7c-2.5,54-24.1,103-58.3,140.5l-14.6-14.6c-4.1-4.1-10.7-4.1-14.7,0-4.1,4.1-4.1,10.7 0,14.7l14.6,14.6c-37.5,34.2-86.5,55.8-140.5,58.3v-20.7c0-5.8-4.7-10.4-10.4-10.4-5.8,0-10.4,4.7-10.4,10.4v20.7c-54-2.5-103-24.1-140.5-58.3l14.6-14.6c4.1-4.1 4.1-10.7 0-14.7-4.1-4.1-10.7-4.1-14.7,0l-14.6,14.6c-34.1-37.5-55.8-86.5-58.3-140.4h20.7c5.8,0 10.4-4.7 10.4-10.4s-4.7-10.4-10.4-10.4h-20.7c2.5-54 24.1-103 58.3-140.5l14.6,14.6c4.1,4.1 10.7,4.1 14.7,0 4.1-4.1 4.1-10.7 0-14.7l-14.6-14.6c37.5-34.2 86.5-55.8 140.5-58.3v20.7c0,5.8 4.7,10.4 10.4,10.4 5.8,0 10.4-4.7 10.4-10.4v-20.8c54,2.5 103,24.1 140.5,58.3l-14.6,14.6c-4.1,4.1-4.1,10.7 0,14.7 4.1,4.1 10.7,4.1 14.7,0l14.6-14.6c34.2,37.5 55.8,86.5 58.3,140.5h-20.7c-5.8,0-10.4,4.7-10.4,10.4s4.6,10.4 10.4,10.4z" />
        <Path d="m364.3,245.6h-97.9v-144.4c0-5.8-4.7-10.4-10.4-10.4-5.8,0-10.4,4.7-10.4,10.4v144.4h-42.7c-5.8,0-10.4,4.7-10.4,10.4s4.7,10.4 10.4,10.4h42.7v39.4c0,5.8 4.7,10.4 10.4,10.4 5.8,0 10.4-4.7 10.4-10.4v-39.4h97.9c5.8,0 10.4-4.7 10.4-10.4s-4.7-10.4-10.4-10.4z" />
      </Svg>
    );
  }

  return (
    <Svg
      width={actualSize}
      height={actualSize}
      viewBox="0 0 512 512"
      stroke={actualColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32">
      <Path d="m256,11c-135.1,0-245,109.9-245,245s109.9,245 245,245 245-109.9 245-245-109.9-245-245-245zm203.2,255.4h20.7c-2.5,54-24.1,103-58.3,140.5l-14.6-14.6c-4.1-4.1-10.7-4.1-14.7,0-4.1,4.1-4.1,10.7 0,14.7l14.6,14.6c-37.5,34.2-86.5,55.8-140.5,58.3v-20.7c0-5.8-4.7-10.4-10.4-10.4-5.8,0-10.4,4.7-10.4,10.4v20.7c-54-2.5-103-24.1-140.5-58.3l14.6-14.6c4.1-4.1 4.1-10.7 0-14.7-4.1-4.1-10.7-4.1-14.7,0l-14.6,14.6c-34.1-37.5-55.8-86.5-58.3-140.4h20.7c5.8,0 10.4-4.7 10.4-10.4s-4.7-10.4-10.4-10.4h-20.7c2.5-54 24.1-103 58.3-140.5l14.6,14.6c4.1,4.1 10.7,4.1 14.7,0 4.1-4.1 4.1-10.7 0-14.7l-14.6-14.6c37.5-34.2 86.5-55.8 140.5-58.3v20.7c0,5.8 4.7,10.4 10.4,10.4 5.8,0 10.4-4.7 10.4-10.4v-20.8c54,2.5 103,24.1 140.5,58.3l-14.6,14.6c-4.1,4.1-4.1,10.7 0,14.7 4.1,4.1 10.7,4.1 14.7,0l14.6-14.6c34.2,37.5 55.8,86.5 58.3,140.5h-20.7c-5.8,0-10.4,4.7-10.4,10.4s4.6,10.4 10.4,10.4z" />
      <Path d="m364.3,245.6h-97.9v-144.4c0-5.8-4.7-10.4-10.4-10.4-5.8,0-10.4,4.7-10.4,10.4v144.4h-42.7c-5.8,0-10.4,4.7-10.4,10.4s4.7,10.4 10.4,10.4h42.7v39.4c0,5.8 4.7,10.4 10.4,10.4 5.8,0 10.4-4.7 10.4-10.4v-39.4h97.9c5.8,0 10.4-4.7 10.4-10.4s-4.7-10.4-10.4-10.4z" />
    </Svg>
  );
};

export default IconClock;