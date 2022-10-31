import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../../atoms';
import {colors, fonts} from '../../../utils';

const HeaderText = ({title, desc, page}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title(page)}>{title}</Text>
      <Text style={styles.desc(page)}>{desc}</Text>
    </View>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  container: {paddingLeft: 5},

  title: page => ({
    color: page == 'Login' ? colors.text.secondary : 'white',
    fontFamily: fonts.primary[500],
    fontSize: 25,
    lineHeight: 32,
  }),
  desc: page => ({
    color: page == 'Login' ? colors.text.label : 'white',
    fontFamily: fonts.primary[400],
    fontSize: 14,
    lineHeight: 21,
  }),
});
