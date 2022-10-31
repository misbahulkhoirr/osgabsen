import { placeholder } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import React from 'react';
import {
  StyleSheet,
  Text,
  editable,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, fonts} from '../../../utils';

const InputDate = ({label, title, errorMessage, press, value}) => {
  console.log('value', value);
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity style={styles.input} title={title} onPress={press}>
       
          <Text style={styles.input(value)}>{value ? value : title}</Text>
      
      </TouchableOpacity>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : ''}
    </View>
  );
};

export default InputDate;

const styles = StyleSheet.create({
  label: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    marginBottom: 5,
    marginLeft: 5,
  },
  input: (value)=>({
    color: value
    ?colors.textInput.enable.text
                : colors.textInput.disable.text,
    fontFamily: fonts.primary[400],
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.textInput.enable.background
  }),
  error: {
    color: colors.error,
    fontFamily: fonts.primary[400],
    marginTop: 5,
    marginLeft: 5,
  },
  errorwrap: {
    flexDirection: 'row',
  },
  link: {
    color: '#999999',
    fontFamily: fonts.primary[400],
    textDecorationLine: 'underline',
    marginTop: 5,
    marginLeft: 15,
  },
});
