import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../../utils';

const IconAccount = ({filled, size, color}) => {
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
        <Path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM304.1 304.1C314.3 295.6 314.3 280.4 304.1 271C295.6 261.7 280.4 261.7 271 271L224 318.1L176.1 271C167.6 261.7 152.4 261.7 143 271C133.7 280.4 133.7 295.6 143 304.1L190.1 352L143 399C133.7 408.4 133.7 423.6 143 432.1C152.4 442.3 167.6 442.3 176.1 432.1L224 385.9L271 432.1C280.4 442.3 295.6 442.3 304.1 432.1C314.3 423.6 314.3 408.4 304.1 399L257.9 352L304.1 304.1z" />
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
      <Path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM304.1 304.1C314.3 295.6 314.3 280.4 304.1 271C295.6 261.7 280.4 261.7 271 271L224 318.1L176.1 271C167.6 261.7 152.4 261.7 143 271C133.7 280.4 133.7 295.6 143 304.1L190.1 352L143 399C133.7 408.4 133.7 423.6 143 432.1C152.4 442.3 167.6 442.3 176.1 432.1L224 385.9L271 432.1C280.4 442.3 295.6 442.3 304.1 432.1C314.3 423.6 314.3 408.4 304.1 399L257.9 352L304.1 304.1z" />
    </Svg>
  );
};

export default IconAccount;