import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { useNavigation } from '@react-navigation/native';
const HeaderTop = (props) => {
    const navigation = useNavigation();
    const goback=()=>{
        navigation.goBack();
    }
  return (
    <View style={{height: 60, backgroundColor: 'black', width: '100%'}}>
      <View style={styles.container}>
        <TouchableOpacity style={{marginRight:10}} onPress={goback}>
          <Ionicons
            name={'arrow-back-outline'}
            size={30}
            color="white"
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{props.route}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight:"bold"
  },
});

export default HeaderTop;
