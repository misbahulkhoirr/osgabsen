import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {handBlue} from '../../assets';
import {Text} from '../../components';
import {colors} from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const checkToken = async () => {
      const access_token = await AsyncStorage.getItem('access_token');
      if (access_token) {
        setTimeout(() => {
          navigation.replace('MainApp');
        }, 1500);
      } else {
        setTimeout(() => {
          navigation.replace('Login');
        }, 1500);
      }
    };

    checkToken();
  }, []);
  return (
    <View style={styles.page}>
      {/* <Text style={styles.title}>Splash Screen</Text> */}
      <Image source={handBlue} style={styles.image} />
      <Text style={styles.title}>OSG ABSEN</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    color: colors.text.secondary,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
});
