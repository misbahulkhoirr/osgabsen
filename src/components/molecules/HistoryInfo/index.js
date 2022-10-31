import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const HistoryInfo = ({ data }) => {
    console.log('components = ',data);
  return (
    <View>
            {data
                ? data &&
                data.data.map((item, index) => (
                    <View style={styles.container} key={index}>
                          <View style={styles.Wrapper}>
                                <Text style={styles.textKet}>Tipe izin</Text>
                                <Text>:</Text>
                                <View style={styles.wrapperAprrove}>
                                    <Text>{item.permission_type.name}</Text>
                                    <Text style={styles.approve(item)}>
                                    { item.approved_at ? "Diterima" :item.rejected_at ? "Ditolak" : "Menunggu"}
                                    </Text>
                                  </View>
                               
                            </View>
                           
                            <View style={styles.Wrapper}>
                                <Text style={styles.textKet}>Dari tgl</Text>
                                <Text>:</Text>
                                <Text style={styles.text}>{moment(item.from_date).format(
                                    'DD MMMM YYYY'
                                )}</Text>
                            </View>
                      
                            <View style={styles.Wrapper}>
                                <Text style={styles.textKet}>Sampai tgl</Text>
                                <Text>:</Text>
                                <Text style={styles.text}>{moment(item.to_date).format(
                                    'DD MMMM YYYY'
                                )}</Text>
                            </View>
                            <View style={styles.Wrapper}>
                                <Text style={styles.textKet}>Keterangan</Text>
                                <Text>:</Text>
                                <Text style={styles.text}>
                                {item.description}
                                </Text>
                            </View>
                  </View>
                    ))
                : null}
        </View>
  )
}

export default HistoryInfo

const styles = StyleSheet.create({
  container:{
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
    label: {
      fontFamily: fonts.primary[400],
      fontSize: 16,
      fontWeight: 'bold',
    },
    
    Wrapper: {
      flexDirection: 'row',
      flex:1,
    },
    textKet: {
      color: colors.text.secondary,
      fontFamily: fonts.primary[400],
      fontSize: 14,
      marginBottom: 5,
      textAlign: 'left',
      borderRadius: 5,
      width: '25%',
    },
    text: {
      marginLeft: 10,
      color: colors.text.secondary,
      textWrap: 'wrap',
      width: '70%',
    },
    wrapperAprrove:{
      marginLeft: 10,
      color: colors.text.secondary,
      flexDirection:'row',
      flex:1,
      justifyContent:'space-between',
    },
    approve: (item)=>({
      paddingHorizontal: 10,
      paddingVertical: 3,
      backgroundColor: item.approved_at ? '#2a88fa' : item.rejected_at ? '#E06379':'#ffcc33',
      color: 'white',
      fontFamily: fonts.primary[400],
      fontSize: 12,
      textAlign: 'center',
      borderRadius: 5,
    }),
  });