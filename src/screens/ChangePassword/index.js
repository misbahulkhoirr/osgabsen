import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  ButtonOpacity,
  Gap,
  Header,
  Input,
} from '../../components';
import {colors, fonts, useForm, showSuccess} from '../../utils';
import { changePasswordAction } from '../../redux/actions'

const ChangePassword = ({navigation}) => {

  const dispatch = useDispatch()

  const [form, setForm] = useForm({
    old_password: '',
    new_password: '',
    password_confirmation: ''
  })
  
  const {errorMessage: error} = useSelector(state => state.changePasswordReducer);

  const success = () => showSuccess('Password berhasil diubah')
  const onSubmit = () => {
    dispatch(changePasswordAction(form, navigation, { success, setForm }))
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Header title="Ubah Password" desc="Form ubah password" height={40} />
        <Gap height={40} />
        <View style={styles.content}>
          <Input
            placeholder="Kata Sandi Lama"
            defaultValue={form.old_password}
            onChangeText={value =>
                setForm('old_password', value)
            }
            secureTextEntry={true}
            errorMessage={error && error.old_password}
          />

          <Gap height={15} />

          <Input
            placeholder="Kata Sandi Baru"
            defaultValue={form.new_password}
            onChangeText={value => setForm('new_password', value)}
            secureTextEntry={true}
            errorMessage={error && error.new_password}
          />
          <Gap height={15} />

          <Input
            placeholder="Konfirmasi Kata Sandi Baru"
            defaultValue={form.password_confirmation}
            onChangeText={value =>
                setForm('password_confirmation', value)
            }
            secureTextEntry={true}
            errorMessage={error.password_confirmation ? error && error.password_confirmation : error.message}

          />
          <Gap height={35} />

          <ButtonOpacity title="Ubah" onPress={onSubmit}/>
          <Gap height={50} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePassword;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {marginTop: -20, marginHorizontal: 25},
  imageWrapper: {alignItems: 'center'},
  image: {
    resizeMode: 'contain',
    width: 185,
    height: 185,
  },

  label: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  text: {
    marginLeft: 10,
    color: colors.text.secondary,
  },
});
