
import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NoteList } from '../../assets';
import { CardInfo, Gap, Header, HistoryInfo, Text } from '../../components';
import { permissionGetAction, profileAction } from '../../redux/actions';
import { colors, fonts } from '../../utils';

const History = ({navigation}) => {
  const getUser = useSelector(state => state.profileReducer.data);
  const getPermission = useSelector(state => state.permissionGetReducer.data.data);
  const [refreshing, setRefreshing] = useState(false)
  const dispatch = useDispatch();

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout))
}

  const onRefresh = useCallback(() => {
    wait(1000).then(() => setRefreshing(false))
    dispatch(permissionGetAction())
  }, [])

  useEffect(() => {
    dispatch(profileAction());
    dispatch(permissionGetAction());
  }, []);
console.log('getPermission', getPermission);
  return (
    <View style={styles.container}>
      <ScrollView 
      showsVerticalScrollIndicator={true}
      refreshControl={
        <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        />}
      >
        <Header title="Riwayat Izin" desc="Daftar riwayat pengajuan izin" height={60} />
        <View style={styles.content}>
          <CardInfo profile={getUser} />
          {/* <View style={}> */}
          {/* <Gap height={20} />
          <Text style={styles.label}>Bulan ini</Text> */}
          <Gap height={20} />
          {getPermission && getPermission.data != null ? (
          <View>          
              <HistoryInfo 
                data={getPermission}
              />
            </View>)
            :(
            <View style={styles.emptyCartWrapper}>
              <NoteList width={150} height={150} />
              <Text style={styles.emptyCartText}>
                  Tidak ada riwayat izin.
              </Text>
          </View>)
          }
          <Gap height={60} />
        </View>
      </ScrollView>
    </View>
  );
};

export default History;
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
    fontSize: 16,
    fontWeight: 'bold',
  },
 
  image: {
    width: 80,
    height: 80,
    borderRadius: 50 / 2,
  },
  profileName: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[500],
    fontSize: 16,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  inOutWrapper: {
    flexDirection: 'row',
    flex: 1,
    // justifyContent: 'space-between',
  },
  inOut: {
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
  emptyCartWrapper: { alignItems: 'center', paddingTop: 50 },
    emptyCartText: {
        color: colors.text.secondary,
        fontFamily: fonts.primary[400],
        fontSize: 16,
        marginTop: 10
    }
 
});
