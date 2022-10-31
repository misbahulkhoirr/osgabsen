import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Gap } from '../../../components';
import {
  IconAlpa,
  IconBulhorn, IconCuti,
  IconMasuk, Text
} from '../../atoms';

import { colors } from '../../../utils';

const CardInfo = ({data, time, type, profile}) => {
  console.log('data ', data);
  return (
    <View style={styles.container}>
      {
      // time ? (
      //   <>
      //     <View style={styles.wrapperTime}>
      //       <IconClock filled={true} size={35} />
      //       <Text style={styles.time}>{time}</Text>
      //     </View>
      //   </>
      // ) : 
      data ? (
        <>
          <View style={styles.wrapperBox}>
            <View style={styles.box}>
              <IconMasuk size={20} color="white" filled={true} />
            </View>

            <Text style={styles.text}>Masuk</Text>
            <Text style={styles.label}>{data.data.totalAttendaces}</Text>
          </View>
          <View style={styles.wrapperBox}>
            <View style={styles.box}>
              <IconCuti size={20} color="white" filled={true} />
            </View>

            <Text style={styles.text}>Izin</Text>
            <Text style={styles.label}>{data.data.totalPermissions}</Text>
          </View>
          <View style={styles.wrapperBox}>
            <View style={styles.box}>
              <IconAlpa size={20} color="white" filled={true} />
            </View>

            <Text style={styles.text}>Alpa</Text>
            <Text style={styles.label}>{data.data.totalAlpa}</Text>
          </View>
        </>
      ) : profile ? (
        <View style={styles.profileHeader}>
          <View style={styles.profileName}>
            <Text style={styles.text}>Name</Text>
            <Text style={styles.text}>{profile.data.full_name}</Text>
          </View>
          <Gap height={10} />
          <View style={styles.profileName}>
            <Text style={styles.text}>Position</Text>
            <Text style={styles.text}>{profile.data.position.name}</Text>
          </View>
        </View>
      ) : type == 'info' ? (
        <View style={styles.info}>
          <View>
            <IconBulhorn size={40} color={colors.primary} filled={true} />
          </View>
          <View style={styles.wrapperBox}>
            <Text style={styles.labelInfo}>Perubahan sistem absensi</Text>
            <Text style={styles.textInfo}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </Text>
          </View>
        </View>
      ) : type == 'profile' ? (
        <View style={styles.info}>
          <View>
            <Text style={styles.labelInfo}>Perubahan sistem absensi</Text>
          </View>
        </View>
      ) : (
        ''
      )}
    </View>
  );
};

export default CardInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    // borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 9,
  },
  wrapperBox: {
    padding: 10,
  },
  wrapperTime: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    marginHorizontal: 20,
    color: colors.text.secondary,
    fontSize: 20,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 10,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  profileHeader: {
    padding: 10,
    flex: 1,
  },
  profileName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profileAddress: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    color: colors.text.secondary,
  },
  label: {
    textAlign: 'center',
    color: colors.text.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  labelInfo: {
    color: colors.text.secondary,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 15,
    // paddingHorizontal: 15,
  },
  textInfo: {
    color: colors.text.secondary,
    marginLeft: 15,
    fontSize: 11,
    textAlign: 'justify',
    flexShrink: 1,
  },
});
