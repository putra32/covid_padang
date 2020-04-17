/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const DetailScreen = () => {
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
      <ScrollView>
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
          <Text style={{color: 'white', fontSize: 20}}>Apa itu COVID-19 ?</Text>
        </View>
        <View style={{marginHorizontal: 8}}>
          <Text>
            COVID-19 adalah penyakit menular yang disebabkan oleh jenis
            coronavirus yang baru ditemukan. Ini merupakan virus baru dan
            penyakit yang sebelumnya tidak dikenal sebelum terjadi wabah di
            Wuhan, Tiongkok, bulan Desember 2019.
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
            padding: 10,
            backgroundColor: 'black',
            marginLeft: '20%',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>
            Seberapa besar kemungkinan saya tertular COVID-19?
          </Text>
        </View>
        <View style={{marginHorizontal: 8}}>
          <Text>
            Risiko tertular tergantung lokasi Anda – lebih tepatnya, apakah
            sedang terjadi wabah COVID-19 di sana. Di sebagian besar lokasi,
            risiko tertular COVID-19 masih rendah. Namun, ada tempat-tempat
            (kota atau wilayah) di seluruh dunia di mana penyakit ini menyebar.
            Orang yang tinggal di atau mengunjungi wilayah-wilayah ini lebih
            berisiko tertular COVID-19. Pemerintah-pemerintah dan otoritas
            kesehatan mengambil tindakan tegas setiap kali kasus COVID-19 baru
            teridentifikasi. Patuhilah larangan-larangan perjalanan, pergerakan
            atau pertemuan dengan jumlah peserta yang besar yang diberlakukan di
            tempat Anda berada. Bekerja sama dengan upaya-upaya pengendalian
            penyakit akan menurunkan risiko Anda tertular atau menyebarkan
            COVID-19.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
