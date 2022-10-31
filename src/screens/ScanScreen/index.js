import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import { getPreciseDistance } from 'geolib';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
// import RNMockLocationDetector from "react-native-mock-location-detector";
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { useDispatch } from 'react-redux';
import { Text } from '../../components';
import { checkinAction, checkoutAction } from '../../redux/actions';
import { API_URL, showError, showSuccess } from '../../utils';

const ScanScreen = ({navigation, route}) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [jarak, setJarak] = useState('');
  const [viewFocused, setViewFocused] = useState(false);
  const [mockLocation, setMockLocation]= useState('');
  const page = route && route.params && route.params.page
  const dispatch=useDispatch()
  // const isLocationMocked =  RNMockLocationDetector.checkMockLocationProvider();
 
  const checkinSuccess = () => showSuccess('Checkin berhasil.')
  const checkinFailed = () => showError('Anda sudah melakukan checkin..')

  const checkoutSuccess = () => showSuccess('Checkout berhasil.')
   const checkoutFailed = () => showError('Anda belum melakukan checkin..')
   
  const onSuccess = (e) => {
    if (mockLocation == false) {
      // console.log('isLocationMocked', isLocationMocked._W);
      if (page == 'checkin'){
        if (parseInt(jarak) <= 1 ){
          dispatch(checkinAction(e.data.replace('check_in:',''),latitude, longitude, navigation, { checkinSuccess, checkinFailed }))
        }else{
          showError('JARAK LEBIH DARI 1 KM')
        }
      }
      if (page == 'checkout'){
        if((jarak) <= 1){
         dispatch(checkoutAction(e.data.replace('check_out:',''), navigation, { checkoutSuccess, checkoutFailed }))
        }else{
          showError('JARAK LEBIH DARI 1 KM')
        }
      }
      
    }else{
      showError('ANDA MENGGUNAKAN LOKASI PALSU')
    }
   
  };

    const CallAPI = async () => {
      console.log('callapi');
      const accessToken = await AsyncStorage.getItem('access_token')
      axios({
          method: 'GET',
          url: `${API_URL}/setting`,
          headers: { Authorization: 'Bearer ' + JSON.parse(accessToken) }
      })
          .then(response => 
            getOneTimeLocation(response.data.data),
            )
          .catch(error => {})
      }

    const getOneTimeLocation = (data) => {
      console.log('DATA',data);
       Geolocation.getCurrentPosition(
        position => {
          console.log('position', position);
          setMockLocation(position.mocked)
          const currentLongitude = JSON.stringify(position.coords.longitude);
          const currentLatitude = JSON.stringify(position.coords.latitude);
          const hitungjarak = getPreciseDistance(
            {latitude: data.latitude, longitude:data.longitude},
            {latitude: currentLatitude, longitude: currentLongitude},
          
          );
          console.log('currentLongitude', currentLongitude);
          console.log('currentLatitude', currentLatitude);
          console.log('hitungjarak', hitungjarak);
          const jarak= hitungjarak / 1000;
          setJarak(jarak);
          setLatitude(currentLongitude);
          setLongitude(currentLatitude);
        },
        error => {
          // CallAPI()
          // alert(error)
        },
        {
          enableHighAccuracy: false,
          timeout: 1000,
          maximumAge: 1000,
        },
      );
    };
    
    
    useEffect(() => {
      CallAPI()
      const reActive =()=>{
        const onFocus = navigation.addListener('focus', () => {
          setViewFocused(true);
        });
    
        const onBlur = navigation.addListener('blur', () => {
          setViewFocused(false);
        });
    
        return {onFocus, onBlur}
      }
      reActive()
  }, [navigation]);

  console.log('latitude', latitude);
  console.log('longitude', longitude);
  console.log('jarak', jarak);
  console.log('mock', mockLocation);
  
  return (
    viewFocused && (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode.auto}
      reactivate={true}
      reactivateTimeout={5000}
      topContent={
        <Text style={styles.centerText}>
          {page == 'checkin' ?
          <Text style={styles.textBold}>CHECK IN</Text>:<Text style={styles.textBold}>CHECK OUT</Text>}
          {' '}
          
        </Text>
      }
      // bottomContent={
      //   <TouchableOpacity style={styles.buttonTouchable}>
      //     <Text style={styles.buttonText}>OK. Got it!</Text>
      //   </TouchableOpacity>
      // }
    />
    )
  );
};
export default ScanScreen;
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
