/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';

const HomeScreen = ({navigation}) => {
  const [sehat, setSehat] = useState('');
  const [positif, setPositif] = useState('');
  const [meningal, setMeningal] = useState('');
  const [dirawat, setDirawat] = useState('');
  const [rumah, setRumah] = useState('');
  const d = new Date();
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

  axios
    .get('http://minangtech.com/home/getCoronaLast/sumatera_barat')
    .then(response => {
      setSehat(response.data.covid_sembuh);
      setPositif(response.data.positif);
      setMeningal(response.data.covid_meninggal);
      setDirawat(response.data.covid_dirawat);
      setRumah(response.data.covid_isolasi_dirumah);
    })
    .catch(error => {
      console.log(error);
    });
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
            padding: 20,
            backgroundColor: 'black',
            marginLeft: '20%',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <Text style={{color: 'white'}}>Apa itu COVID-19</Text>
            <Text style={{color: 'white'}}>
              Mari cari tau lebih lengkap mengenai COVID-19
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 8,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            Covid-19
          </Text>
          <Text style={{marginLeft: 8, color: 'green', marginTop: 10}}>
            Detail
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={styles.shadow}>
              <Icon
                name="ios-heart"
                size={30}
                style={{marginTop: 10, color: 'green'}}
              />
              <Text style={{marginTop: 10, color: 'green'}}>{sehat}</Text>
              <Text style={{marginTop: 10, color: 'green'}}>Sehat</Text>
            </View>
            <View style={styles.shadow}>
              <Icon
                name="ios-person-add"
                size={30}
                style={{marginTop: 10, color: 'orange'}}
              />
              <Text style={{marginTop: 10, color: 'orange'}}>{positif}</Text>
              <Text style={{marginTop: 10, color: 'orange'}}>Positif</Text>
            </View>
            <View style={styles.shadow}>
              <Icon
                name="ios-flower"
                size={30}
                style={{marginTop: 10, color: 'red'}}
              />
              <Text style={{marginTop: 10, color: 'red'}}>{meningal}</Text>
              <Text style={{marginTop: 10, color: 'red'}}>Meningal</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={styles.shadow}>
              <Icon
                name="ios-business"
                size={30}
                style={{marginTop: 10, color: 'orange'}}
              />
              <Text style={{marginTop: 10, color: 'orange'}}>{dirawat}</Text>
              <Text style={{marginTop: 10, color: 'orange'}}>Dirawat</Text>
            </View>
            <View style={styles.shadow}>
              <Icon
                name="ios-home"
                size={30}
                style={{marginTop: 10, color: 'orange'}}
              />
              <Text style={{marginTop: 10, color: 'orange'}}>{rumah}</Text>
              <Text style={{marginTop: 10, color: 'orange'}}>
                Isolasi Di Rumah
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Gejala')}>
          <View
            style={{
              marginTop: 20,
              marginBottom: 20,
              padding: 20,
              backgroundColor: 'black',
              marginRight: '20%',
            }}>
            <Text style={{color: 'white'}}>Bagaimana gejala COVID-19 ?</Text>
            <Text style={{color: 'white'}}>
              Mari cari tau lebih lengkap mengenai COVID-19
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  shadow: {
    flex: 1,
    marginHorizontal: 10,
    height: 120,
    width: '30%',
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
