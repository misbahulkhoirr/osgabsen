import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../../utils';

const IconHome = ({filled, size, color}) => {
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
        <Path d="M204 240H68a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM444 240H308a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM204 480H68a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM444 480H308a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36z" />
      </Svg>
    );
  }

  // return (
  //   <Svg
  //     width={actualSize}
  //     height={actualSize}
  //     viewBox="0 0 512 512"
  //     fill="none"
  //     stroke={actualColor}
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //     strokeWidth="32">
  //     <Path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" />
  //     <Path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" />
  //   </Svg>
  // );
};

export default IconHome;
