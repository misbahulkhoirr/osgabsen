import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconSingOut, IconEditUser, IconEdit, IconAccount} from '../Icon';
import {colors, fonts} from '../../../utils';

const SectionMenuItem = ({icon, label, totalItem, index, onPress}) => {
  console.log(icon);
  const Icon = () => {
    if (icon === 'user') {
      return <IconAccount size={20} color={colors.text.menuInactive} />;
    }
    if (icon === 'edit-password') {
      return <IconEdit size={20} color={colors.text.menuInactive} />;
    }
    if (icon === 'logout') {
      return <IconSingOut size={20} color={colors.text.menuInactive} />;
    }
  };

  return (
    <TouchableOpacity
      style={styles.wrapper(totalItem, index + 1)}
      onPress={onPress}>
      <View style={styles.menuItemLeft}>
        <Icon />
        <Text style={styles.label}>{label}</Text>
      </View>
      {/* <IconChevronForward size={15} /> */}
    </TouchableOpacity>
  );
};

export default SectionMenuItem;

const styles = StyleSheet.create({
  wrapper: (totalItem, currItem) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: totalItem !== currItem ? 1 : 0,
    borderBottomColor: colors.border,
  }),
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: colors.text.menuInactive,
    fontFamily: fonts.primary[400],
    marginLeft: 15,
  },
});
