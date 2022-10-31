import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Image, ScrollView, StyleSheet, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { handBlue } from '../../assets';
import { ButtonOpacity, Gap, HeaderText, Input } from '../../components';
import { colors, storeData, useForm } from '../../utils';

import { loginAction } from '../../redux/actions';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {errorMessage: error} = useSelector(state => state.loginReducer);

  const [form, setForm] = useForm({
      username: 'andriajah',
      password: '12345678'
  })

  const loginHandler = () => {
    dispatch(loginAction(form, navigation));
  };

  useEffect(() => {
    let brand = DeviceInfo.getBrand();
    storeData('deviceName',brand)
    DeviceInfo.getUniqueId().then((uniqueId) => {
      storeData('deviceId',uniqueId)
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={true}>
          <Gap height={100} />
          <View style={styles.imageWrapper}>
            <Image source={handBlue} style={styles.image} />
            <HeaderText
              title="OSG ABSEN"
              desc="Login ntuk dapat melanjutkan absen"
              page="Login"
            />
          </View>

          <Gap height={30} />
          <Input
            placeholder="Username"
            defaultValue={form.username}
            onChangeText={value => setForm('username', value)}
            errorMessage={error && error.username}
          />

          <Gap height={15} />
          <Input
            label="Password"
            placeholder="Password"
            defaultValue={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry={true}
            errorMessage={
              error.password ? error && error.password : error.message
            }
          />
          {/* <Gap height={10} />
          <Text style={styles.link}>Lupa kata sandi</Text> */}
          <Gap height={35} />

          <ButtonOpacity title="Login" onPress={loginHandler} />
          <Gap height={15} />

          <Gap height={35} />

          {/* <View style={styles.linkWrapper}>
            <Text style={styles.label}>Belum punya akun? </Text>
            <Text style={styles.link}>Daftar</Text>
          </View> */}
          <Gap height={50} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {flex: 1},
  scrollView: {paddingHorizontal: 45},
  imageWrapper: {alignItems: 'center', flexDirection: 'row'},
  image: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  linkWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
