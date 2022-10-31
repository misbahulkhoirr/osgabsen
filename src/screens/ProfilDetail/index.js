import React, { useEffect } from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {colors, fonts} from '../../utils';
import {
  Gap,
  Header,
  Input,
  Text,
  TextArea,
} from '../../components';
import { profileAction } from '../../redux/actions';

const ProfilDetail = ({navigation}) => {
  const userData = useSelector(state => state.profileReducer.data);
const dispatch =useDispatch()
  useEffect(() => {
    dispatch(profileAction());
  }, []);

  console.log(userData);

  return (
    <View style={styles.container}>
       <ScrollView showsVerticalScrollIndicator={false}>
          <Header title="Profil" desc="Detail profil" height={40} />
            <View style={styles.content}>
       
            <Gap height={60} />
          <View style={styles.card}>
              <View style={styles.Wrapper}>
                  <Text style={styles.label}>NIP</Text>
                  <Text>:</Text>
                  <Text style={styles.text}>{userData && userData.data.nip}</Text>
              </View>
              <View style={styles.Wrapper}>
                  <Text style={styles.label}>NIK</Text>
                  <Text>:</Text>
                  <Text style={styles.text}>{userData && userData.data.nik}</Text>
              </View>
              <View style={styles.Wrapper}>
                  <Text style={styles.label}>Full Name</Text>
                  <Text>:</Text>
                  <Text style={styles.text}>{userData && userData.data.full_name}</Text>
              </View>
              <View style={styles.Wrapper}>
                  <Text style={styles.label}>Username</Text>
                  <Text>:</Text>
                  <Text style={styles.text}>{userData && userData.data.username}</Text>
              </View>
              <View style={styles.Wrapper}>
                  <Text style={styles.label}>Tempat Lahir</Text>
                  <Text>:</Text>
                  <Text style={styles.text}>{userData && userData.data.place_of_birth}</Text>
              </View>
              <View style={styles.Wrapper}>
                  <Text style={styles.label}>Tanggal Lahir</Text>
                  <Text>:</Text>
                  <Text style={styles.text}>{userData && userData.data.date_of_birth}</Text>
              </View>
              <View style={styles.Wrapper}>
                  <Text style={styles.label}>Posisi</Text>
                  <Text>:</Text>
                  <Text style={styles.text}>{userData && userData.data.position.name}</Text>
              </View>
              <View style={styles.Wrapper}>
                  <Text style={styles.label}>Status</Text>
                  <Text>:</Text>
                  <Text style={styles.text}>{userData && userData.data.employee_status.name}</Text>
              </View>
              <View style={styles.Wrapper}>
                  <Text style={styles.label}>Mulai Kerja</Text>
                  <Text>:</Text>
                  <Text style={styles.text}>{userData && userData.data.work_start_date}</Text>
              </View>
              <View style={styles.Wrapper}>
                  <Text style={styles.label}>Alamat</Text>
                  <Text>:</Text>
                  <Text style={styles.text}>{userData && userData.data.address}</Text>
              </View>
          </View>
          <Gap height={30} />
      </View>
        </ScrollView>
    </View>
  );
};

export default ProfilDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {marginTop: -40, marginHorizontal: 25},
 
  card:{
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical:10,
    paddingHorizontal:15,
    marginBottom:10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
  Wrapper: {
    flexDirection: 'row',
    flex:1
  },
  label: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'left',
    borderRadius: 5,
    width: '25%',
  },
  text: {
    marginLeft: 15,
    marginHorizontal: 5,
    color: colors.text.secondary,
    textWrap: 'wrap',
    width: '70%',
  },
});
