import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  CardInfo,
  Gap,
  Header,
  SectionMenu
} from '../../components';
import { logoutAction, profileAction } from '../../redux/actions';
import { loading as resetError } from '../../redux/actions/account/changePasswordAction';
import { colors, fonts } from '../../utils';

const ProfileAccount = ({navigation}) => {
  const getUser = useSelector(state => state.profileReducer.data);
  const dispatch = useDispatch();
  const menuListGeneral = [
    {
      id: 1,
      icon: 'user',
      label: 'Profil',
      onPress: () => navigation.navigate('ProfilDetail'),
    },
    {
      id: 1,
      icon: 'edit-password',
      label: 'Ubah Password',
      onPress: ()=>{
        dispatch(resetError())
        navigation.navigate('ChangePassword')
      },
    },
  ];
  const menuListOther = [
    {
      id: 1,
      icon: 'logout',
      label: 'Keluar',
      onPress: () => onLogout(),
    },
  ];
  const onLogout = async () => {
    await dispatch(logoutAction({navigation}));
  };
  

  useEffect(() => {
    dispatch(profileAction());
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Header title="Profile Account" desc="Menu profile" height={60} />
        <View style={styles.content}>
          <CardInfo profile={getUser} />
          {/* <View style={}> */}
          <Gap height={20} />
          {/* <CardInfo type="profile" /> */}
          <SectionMenu
            title="Umum"
            data={menuListGeneral}
            navigation={navigation}
          />
          <Gap height={20} />
          <SectionMenu data={menuListOther} navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileAccount;
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
  },
  image: {
    width: 80,
    height: 80,
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
    justifyContent: 'space-around',
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

  cardWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
