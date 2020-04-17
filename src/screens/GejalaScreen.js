/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StatusBar} from 'react-native';

const GejalaScreen = () => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const d = new Date();
  return (
    <View>
      <StatusBar barStyle={'light-content'} />
      <Text style={{marginLeft: 8, marginTop: 10}}>Keadaan Saat Ini</Text>
      <Text style={{fontSize: 48, fontWeight: 'bold', letterSpacing: 8}}>
        Padang
      </Text>
      <Text style={{marginLeft: 8, fontWeight: '300', color: 'grey'}}>
        {d.getDate()} {monthNames[d.getMonth()]} {d.getFullYear()}
      </Text>
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          padding: 10,
          backgroundColor: 'black',
          marginRight: '20%',
        }}>
        <Text style={{color: 'white', fontSize: 20}}>
          Apa saja gejala COVID-19?
        </Text>
      </View>
      <View style={{marginHorizontal: 8}}>
        <Text>
          Gejala-gejala COVID-19 yang paling umum adalah demam, rasa lelah, dan
          batuk kering. Beberapa pasien mungkin mengalami rasa nyeri dan sakit,
          hidung tersumbat, pilek, sakit tenggorokan atau diare, Gejala-gejala
          yang dialami biasanya bersifat ringan dan muncul secara bertahap.
          Beberapa orang yang terinfeksi tidak menunjukkan gejala apa pun dan
          tetap merasa sehat. Sebagian besar (sekitar 80%) orang yang terinfeksi
          berhasil pulih tanpa perlu perawatan khusus. Sekitar 1 dari 6 orang
          yang terjangkit COVID-19 menderita sakit parah dan kesulitan bernapas.
          Orang-orang lanjut usia (lansia) dan orang-orang dengan kondisi medis
          yang sudah ada sebelumnya seperti tekanan darah tinggi, gangguan
          jantung atau diabetes, punya kemungkinan lebih besar mengalami sakit
          lebih serius. Mereka yang mengalami demam, batuk dan kesulitan
          bernapas sebaiknya mencari pertolongan medis.
        </Text>
      </View>
    </View>
  );
};

export default GejalaScreen;
