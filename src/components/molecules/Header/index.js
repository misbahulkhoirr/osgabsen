import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from '../../atoms';
import {colors, fonts} from '../../../utils';
import {handWhite} from '../../../assets';
import {HeaderText} from '../../../components';

const Header = ({title, desc, height}) => {
  return (
    <View style={styles.container(height)}>
      <View style={styles.imageWrapper}>
        <Image source={handWhite} style={styles.image} />
        <HeaderText title={title} desc={desc} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: height => ({
    backgroundColor: colors.primary,
    paddingVertical: height,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  }),
  imageWrapper: {
    paddingHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
