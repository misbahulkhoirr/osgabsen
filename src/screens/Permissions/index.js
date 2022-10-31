import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import DatePicker from 'react-native-date-picker';
import {
  ButtonOpacity,
  Gap,
  Header, InputDate,
  Select,
  TextArea
} from '../../components';
import { permissionStoreAction, permissionTypeAction } from '../../redux/actions';
import { colors, showSuccess, useForm } from '../../utils';

const Permissions = ({navigation}) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const [label, setLabel] = useState('');

  const typePermission = useSelector(
    state => state.permissionTypeReducer.data.data,
  );

  const {errorMessage: error} = useSelector(state => state.permissionStoreReducer);

  const [form, setForm] = useForm({
    label:'',
    permission_type: '',
    description: '',
    from_date: '',
    to_date: '',
  });

  const success = () => showSuccess('Data berhasil disimpan')
  
  const onSubmit = () => {
    dispatch(permissionStoreAction(form, navigation, { success, setForm }));
  };

  useEffect(() => {
    dispatch(permissionTypeAction());
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Permohonan Izin" desc="Form permohonan izin" height={40} />
      <View style={styles.content}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <Gap height={15} />

          <Select
            label="Tipe izin"
            placeholder="Tipe Izin"
            data={typePermission}
            onChange={(name, id) => {
              setForm('permission_type', {name, id});
            }}
            defaultValue={'' + form.permission_type.name}
            renderItems={(item, index) => (
              <Select.Item label={item.name} value={item.name} key={index}/>
            )}
            errorMessage={error && error.permission_type}

          />

          

          <Gap height={15} />
          <InputDate
            value={form.from_date}
            label="Dari Tanggal"
            title=" Dari Tanggal"
            press={() => setFromOpen(true)}
            errorMessage={error && error.from_date}

          />
          <DatePicker
            modal
            open={fromOpen}
            date={date}
            mode="date"
            onConfirm={date => {
              setForm('from_date', date.toLocaleDateString('en-GB'));
              setFromOpen(false);
            }}
            onCancel={() => {
              setFromOpen(false);
            }}
          />
          <Gap height={15} />
          <InputDate
            value={form.to_date}
            label="Sampai Tanggal"
            title=" Sampai Tanggal"
            press={() => setToOpen(true)}
            errorMessage={error && error.to_date}

          />
          <DatePicker
            modal
            open={toOpen}
            date={date}
            mode="date"
            onConfirm={date => {
              setForm('to_date', date.toLocaleDateString('en-GB'));
              setToOpen(false);
            }}
            onCancel={() => {
              setToOpen(false);
            }}
          />
          
          <Gap height={15} />
          <TextArea
            label="Keterangan"
            placeholder="Keterangan ..."
            defaultValue={form.description}
            onChangeText={value => setForm('description', value)}
            errorMessage={error && error.description}

          />
          {/* <Input label="Keterangan" placeholder="Keterangan ..." /> */}
          <Gap height={25} />
          <ButtonOpacity title="Simpan" onPress={onSubmit} />
          <Gap height={50} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Permissions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {flex: 1},
  scrollView: {paddingHorizontal: 45},
});
