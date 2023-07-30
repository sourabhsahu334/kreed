import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';

const History = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',

          backgroundColor: '#16191E',

          padding: 3,

          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'green',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                width: 25,
                height: 25,
                borderRadius: 12.5,
                objectFit: 'containe',
              }}
              source={require('../Assets/download1.png')}
            />
            <Image
              style={{
                width: 25,
                height: 25,
                borderRadius: 12.5,
                objectFit: 'containe',
                marginLeft: 5,
              }}
              source={require('../Assets/download1.png')}
            />
          </View>
          <Text style={styles.text}>Team 1 </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',

            flexDirection: 'row',
            width: 100,
          }}>
          <Text style={{color: 'white'}}>10</Text>
          <Text style={{color: 'white'}}>vs</Text>
          <Text style={{color: 'white'}}>5</Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                width: 25,
                height: 25,
                borderRadius: 12.5,
                objectFit: 'containe',
              }}
              source={require('../Assets/download1.png')}
            />
            <Image
              style={{
                width: 25,
                height: 25,
                borderRadius: 12.5,
                objectFit: 'containe',
                marginLeft: 5,
              }}
              source={require('../Assets/download1.png')}
            />
          </View>
          <Text style={styles.text}>Team 1 </Text>
        </View>
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 10,
  },
});

export default History;
