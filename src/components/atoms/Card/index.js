import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import {
  IconSignIn,
  Text,
  IconSingOut,
  IconHistory,
  IconCuti,
} from '../../atoms';
import IconFilePen from '../Icon/ic-filePen';

const Card = ({title, color, type, scan, onPress}) => {
  return (
    <View style={styles.container(type)}>
      {type == 'in' ? (
        <TouchableOpacity onPress={scan} style={styles.Wrapper}>
          <Text style={styles.label}>{title}</Text>
          <IconSignIn size={20} color="white" filled={true} />
        </TouchableOpacity>
      ) : type == 'out' ? (
        <TouchableOpacity onPress={scan} style={styles.Wrapper}>
          <Text style={styles.label}>{title}</Text>
          <IconSingOut size={20} color="white" filled={true} />
        </TouchableOpacity>
      ) : type == 'history' ? (
        <TouchableOpacity style={styles.Wrapper} onPress={onPress}>
          <Text style={styles.label}>{title}</Text>
          <IconHistory size={20} color="white" filled={true} />
        </TouchableOpacity>
      ) : type == 'izin' ? (
        <TouchableOpacity style={styles.Wrapper} onPress={onPress}>
          <Text style={styles.label}>{title}</Text>
          <IconCuti size={20} color="white" filled={true} />
        </TouchableOpacity>
      ) : (
        <Text style={styles.label}>{title}</Text>
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type ? colors.primary : 'white',
    height: 50,
    width: '45%',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  }),
  label: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: 'white',
  },
  Wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
