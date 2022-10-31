import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View, PermissionsAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  Card,
  CardInfo,
  Gap,
  Header, Text
} from '../../components';
import { statisticAction } from '../../redux/actions';
import { loading as resetError } from '../../redux/actions/permission/permissionStoreAction';
import { colors, fonts } from '../../utils';


const Home = ({navigation}) => {
  const getStatistic = useSelector(state => state.statisticReducer.data);

  const dispatch = useDispatch();

  const izin = ()=>{
    dispatch(resetError())
    navigation.navigate('Izin')
  }
  useEffect(() => {
    dispatch(statisticAction());
  }, []);

  const requestPermission = async ()=>{
    try {
      const permission =[
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.CAMERA
      ]
      const granted = await PermissionsAndroid.requestMultiple(permission);
      console.log('granted',PermissionsAndroid.RESULTS.GRANTED);
      
    } 
    catch (err) {
      console.log(err);
    }
  }
 const checkin =async ()=>{
  await requestPermission()
  await navigation.navigate('ScanScreen',{page:'checkin'})
 }
 const check_out =async ()=>{
  await requestPermission()
  await navigation.navigate('ScanScreen', {page:'checkout'})
 }
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="OSG ABSEN" desc="Absen kehadiran" height={60} />
        <View style={styles.content}>
          <CardInfo data={getStatistic} />
          {/* <View style={}> */}
          <Gap height={20} />

          <Text style={styles.label}>Menu Aktivitas</Text>
          <View style={styles.cardWrapper}>
            <Card
              type={'in'}
              title="Absen Masuk"
              scan={checkin}
            />
            <Card
              type={'out'}
              title="Absen Pulang"
              scan={check_out}
            />
          </View>
          <Gap height={10} />
          <View style={styles.cardWrapper}>
            <Card
              type={'history'}
              title="Riwayat"
              onPress={() => navigation.navigate('History')}
            />
            <Card
              type={'izin'}
              title="Perizinan"
              onPress={izin}
            />
          </View>
          <Gap height={20} />
          <Text style={styles.label}>Pemberitahuan</Text>
          <CardInfo type={'info'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    marginTop: -40,
    marginBottom: 20,
    marginHorizontal: 25,
  },
  imageWrapper: {alignItems: 'center'},
  image: {
    resizeMode: 'contain',
    width: 185,
    height: 185,
  },
  cardWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
