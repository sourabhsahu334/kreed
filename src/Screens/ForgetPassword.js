import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Color } from '../Components/GlobalStyle'
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
const Forgetpassword = ({ navigation }) => {

  const [passwordshow,setpasswordshow]=useState(true);


  const [username, setusername] = useState()
  const [password, setpassword] = useState();
  const gotosignup=()=>{
    navigation.navigate("Login")
  }





  return (
    <View style={{ flex: 1, backgroundColor: '#113513' }}>
      <LinearGradient colors={['#000', '#154015', '#154015', '#154015', '#154015', '#000']} style={{ flex: 1 }}>


        <View style={[styles.Box,{alignItems:"center"}]}>
          <Text style={styles.LoginHeading}>
            Trouble With Loggin In ?
          </Text>
          <Text style={{color:"white",width:250,textAlign:"justify",marginTop:20}}>
          Enter your email or phone number and we’ll send you a link to get back into your account
          </Text>
          <View style={styles.TextInputBox}>
            <TextInput
              placeholder='Email or Phone Number'
              placeholderTextColor={'#878A8B'}
              style={{ color: 'white' }}
              onChangeText={(text) => setusername(text)}
              value={username}
            />
          </View>
      
 
          <TouchableOpacity  style={styles.LoginButton}>
            <Text style={styles.LoginButtonText}>Send Link</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

            <TouchableOpacity onPress={gotosignup}><Text style={[styles.ForgetText, { color: '#134bb4', fontWeight: 'bold',textShadowColor:"white",textShadowRadius:.5 }]}>Back To Tog In</Text></TouchableOpacity>
          </View>

        </View>
      </LinearGradient>
    </View>
  )
}

export default Forgetpassword

const styles = StyleSheet.create({
  Box: {
    marginLeft: 20,
    marginTop: "auto",
    marginBottom:"auto",
    backgroundColor: 'black',
    borderRadius: 40,
    width: 320,
    height: 360
  },
  LoginHeading: {
    color: 'white',

    marginTop: 30,
    fontSize: 22,
    fontWeight: 'bold',
    textShadowColor:'white',
    textShadowRadius:5
  },
  TextInputBox: {
    backgroundColor: '#33363A',
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 40,
    paddingHorizontal: 15,
    alignItems:"center",
    justifyContent:'center',
    width:280
  },
  IconBox: {
    marginTop: 15,
    marginHorizontal: 50,
    backgroundColor: "#0D1D12",
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  ForgetText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '300',
    marginTop: 15
  },
  LoginButton: {
    backgroundColor: '#436A2E',
    paddingHorizontal: 5,
    paddingVertical: 7,
    alignItems: 'center',
    width: 150,

    borderRadius: 20,
    marginTop: 25
  },
  LoginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})