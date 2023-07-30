import {
  View,
  Text,
  TouchableOpacity,
  Image,
  RefreshControlBase,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const SelectGame = () => {
    const navigation =useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          flexDirection: 'row',
          height: 70,
          backgroundColor: 'black',
          color: 'black',
          width: '100%',
        }}>
        <Text style={{fontSize: 25, color: 'white', margin: 5}}>LOGO</Text>
        <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
          <TouchableOpacity onPress={() => console.log('hi')}>
            <View
              style={{
                height: 6,
                width: 6,
                backgroundColor: 'red',
                borderRadius: 3,
                marginBottom: -17,
                marginLeft: 'auto',
                marginRight: 12,
                marginTop: 10,
              }}></View>
            <Ionicons
              name="ios-notifications-outline"
              size={30}
              color="white"
              style={{margin: 7}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Message')}>
            <Image
              style={{marginRight: 15, marginTop: 10}}
              source={require('../Assets/Vector.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: 'black',marginBottom:50
        }}>
        <Image
          style={styles.photo}
          source={require('../Assets/badminton.png')}
        />
        <LinearGradient style={styles.gameselectbox}
        colors={['rgba(0,0,0,0.5)','#5e7137', '#5e7137','rgba(0,0,0,0.5)']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}>
            <View style={{height:"55%",justifyContent:"center",alignItems:"center",paddingTop:26}}><Text style={styles.heading}>Badminton</Text></View>
            <View style={{flexDirection:"row",width:"100%",flex:1}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Room")} style={{width:"50%",height:"100%",borderColor:'#8ec353',borderWidth:1,borderBottomLeftRadius:10,justifyContent:"center",alignItems:"center" }}><Text style={styles.subheading}>Create</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Room")} style={{width:"50%",height:"100%",borderColor:'#8ec353',borderWidth:1,borderBottomRightRadius:1,justifyContent:"center",alignItems:"center" }}><Text style={styles.subheading}>Join</Text></TouchableOpacity>
        </View>
        </LinearGradient>
        <Image
          style={styles.photo}
          source={require('../Assets/cricket.png')}
        />
        <LinearGradient style={styles.gameselectbox}
        colors={['rgba(0,0,0,0.5)','#5e7137', '#5e7137','rgba(0,0,0,0.5)']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}>
            <View style={{height:"55%",justifyContent:"center",alignItems:"center",paddingTop:26}}><Text style={styles.heading}>Badminton</Text></View>
            <View style={{flexDirection:"row",width:"100%",flex:1}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Room")} style={{width:"50%",height:"100%",borderColor:'#8ec353',borderWidth:1,borderBottomLeftRadius:10,justifyContent:"center",alignItems:"center" }}><Text style={styles.subheading}>Create</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Room")} style={{width:"50%",height:"100%",borderColor:'#8ec353',borderWidth:1,borderBottomRightRadius:1,justifyContent:"center",alignItems:"center" }}><Text style={styles.subheading}>Join</Text></TouchableOpacity>
        </View>
        </LinearGradient>
        
    
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

    heading:{
     color:"white",
     fontSize:25,
     margin:5,  textShadowColor:'rgba(255,255,255,.5)',
     textShadowRadius:5
    },
    subheading:{
        fontSize:20,
        color:'#8ec353',
        fontWeight:"bold",
        textShadowColor:'rgba(255,255,255,.5)',
        textShadowRadius:.5
    },
  photo: {
    
   
  
   
    marginBottom: -80,
    zIndex: 1,
   
  },
  gameselectbox: {
    backgroundColor: '#5e7137',
    width: '95%',
    height: 170,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#8ec353',
    alignItems:"center",
    justifyContent:"center"
  },
});

export default SelectGame;
