import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts} from '../../../utils';

const Select = ({
  label,
  placeholder,
  data,
  defaultValue,
  onChange,
  renderItems,
  errorMessage,
}) => {
  console.log(placeholder);
  console.log(defaultValue);
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.content}>
      <Picker
        selectedValue={defaultValue}
        style={styles.select(defaultValue)}
        onValueChange={(itemValue, itemIndex) =>
          onChange(itemValue, itemIndex)
        }>
        {placeholder && <Picker.Item label={placeholder} value="" />}
        {data && data.map((item, index) => renderItems(item, index))}
      </Picker>
      </View>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

const Item = ({label, value, key, ...rest}) => {
  return <Picker.Item label={label} value={value} key={key} {...rest} />;
};

Select.Item = Item;
export default Select;

const styles = StyleSheet.create({
  content:{
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  label: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    marginBottom: 5,
    marginLeft: 5,
  },
  select: (defaultValue)=>({
    color: defaultValue =='undefined' ? colors.text.secondary : colors.text.primary,
    fontFamily: fonts.primary[400],
  }),
 
  error: {
    color: colors.error,
    fontFamily: fonts.primary[400],
    marginTop: 5,
    marginLeft: 5,
  },
});
