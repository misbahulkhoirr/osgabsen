import React, {useCallback, useEffect, useState} from 'react';
import {Image, RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {avatarDefault, TodoList} from '../../assets';
import {
  CardInfo,
  Gap,
  Header,
  Text,
} from '../../components';
import {colors, fonts} from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { attendancesAction, profileAction } from '../../redux/actions';
import moment from 'moment';
import { useIsFocused } from '@react-navigation/native';

const Attendances = ({navigation}) => {
  const getUser = useSelector(state => state.profileReducer.data);
  const Attendances = useSelector(state => state.attendancesReducer.data.data);
  const [refreshing, setRefreshing] = useState(false)
  const dispatch = useDispatch();
  const isFocused = useIsFocused()

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout))
}

const onRefresh = useCallback(() => {
    wait(1000).then(() => setRefreshing(false))
    dispatch(attendancesAction())
}, [])

  useEffect(() => {
    dispatch(profileAction());
    dispatch(attendancesAction())
  }, [isFocused]);
  
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}
      refreshControl={
        <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        />}
     >
        <Header title="Aktivitas Kehadiran" desc="Daftar riwayat kehadiran" height={60} />
        <View style={styles.content}>
        <CardInfo profile={getUser} />
          <Gap height={30} />

          {/* <Text style={styles.label}>Hari ini</Text> */}
          {
              Attendances && Attendances.data.map((item, index) => (
                item != null ?
          (<View style={styles.profileHeader} key={index}>
            <Image source={avatarDefault} style={styles.image} />
            <Gap width={15} />
            <View>
                <View style={styles.inOutWrapper}>
                <Text style={styles.inOut}>Masuk</Text>
                <Text style={styles.text}>
                  {moment(item && item.check_in.split(' ')[0]).format(
                                    'DD MMMM YYYY'
                                )} , {item.check_in.split(' ')[1]}
                                </Text>
              </View>
              <View style={styles.inOutWrapper}>
                <Text style={styles.inOut}>Pulang</Text>
                <Text style={styles.text}>{item.check_out ? moment(item.check_out.split(' ')[0] ).format(
                                    'DD MMMM YYYY'
                                ):''} , {item.check_out ? item.check_out.split(' ')[1]:''}</Text>
              </View>
            </View>
          
          </View>)

          :(
            <View style={styles.emptyCartWrapper}>
              <TodoList width={150} height={150} />
              <Text style={styles.emptyCartText}>
                  Tidak ada riwayat izin.
              </Text>
          </View>)
          ))
        }
        </View>
      </ScrollView>
      
    </View>
  );
};

export default Attendances;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {marginTop: -40, marginHorizontal: 25},
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
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom :15
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50 / 2,
  },
  profileName: {
    color: '#2C3E50',
    fontFamily: fonts.primary[500],
    fontSize: 16,
    marginBottom: 2,
  },

  inOutWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inOut: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: colors.primary,
    color: 'white',
    fontFamily: fonts.primary[400],
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'center',
    borderRadius: 5,
  },
  text: {
    marginLeft: 10,
    color: colors.text.secondary,
  },
  emptyCartWrapper: { alignItems: 'center', paddingTop: 50 },
    emptyCartText: {
        color: colors.text.secondary,
        fontFamily: fonts.primary[400],
        fontSize: 16,
        marginTop: 10
    }
});
