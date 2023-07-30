import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Share,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunity from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import History from './History';

const Postcomponent = () => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#16191e',
        marginTop: 15,
        alignItems: 'center',
      
        marginBottom: 20,
      }}>
      <View
        style={{
          width: '95%',
          justifyContent: 'center',
          backgroundColor: 'black',
          marginTop: 15,
          padding: 10,
          borderRadius: 20,
          marginBottom: 10,
        }}>
      <History/>
      <History/>
      <History/>
      <Text style={{color:"#86D957",fontSize:14,marginLeft:"auto"}}>see more...</Text>
      </View>
      <Image
        style={{width: '100%', borderRadius: 10, margin: 5}}
        source={require('../Assets/download.jpg')}
      />
      <Text style={{color: 'white', fontSize: 14, margin: 5}}>
        The lorem ipsum text is usually a section of a Latin text by Cicero with
        words altered, added and removed to make it nonsensical. Lorem ipsum
        text is used in mock-ups of visual design projects before the actual
        words are ........
      </Text>
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: 'black',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View style={styles.box}>
        <MaterialCommunity name ="fire" size={25} color="orange"/>
          <Text style={styles.text}>102k</Text>
        </View>
        <View style={styles.box}>
        <EvilIcons name="comment" size={25} color="white"/>
          <Text style={styles.text}>12k</Text>
        </View>
        <View style={styles.box}>
        <MaterialCommunity name ="share" size={25} color="white"/>
          <Text style={styles.text}>1k</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#16191e',
    height: 30,
    width: 60,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:"center"
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default Postcomponent;
