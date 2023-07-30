import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunity from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import HeaderTop from '../Components/Header';

const Settings = () => {
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
 <HeaderTop route={"settings"}/>
 <TouchableOpacity style={[styles.container,{marginLeft:10}]}>
    <Ionicons name="notifications" size={20} color="white"/>
    <Text style={styles.text}> Notification</Text>
 </TouchableOpacity>
 <TouchableOpacity style={[styles.container,{marginLeft:10}]}>
    <MaterialCommunity name="block-helper" size={20} color="white"/>
    <Text style={styles.text}>Blocks</Text>
 </TouchableOpacity>
 <TouchableOpacity style={[styles.container,{marginLeft:10}]}>
    <Ionicons name="save" size={20} color="white"/>
    <Text style={styles.text}>Save</Text>
 </TouchableOpacity>
 <TouchableOpacity style={[styles.container,{marginLeft:10}]}>
    <Ionicons name="heart-dislike" size={20} color="white"/>
    <Text style={styles.text}>Hide Likes</Text>
 </TouchableOpacity>
 <TouchableOpacity style={[styles.container,{marginLeft:10}]}>
    <Ionicons name="person-add-outline" size={20} color="white"/>
    <Text style={styles.text}>Add Account</Text>
 </TouchableOpacity>
 <TouchableOpacity style={[styles.container,{marginLeft:10}]}>
    <MaterialCommunity name="logout" size={20} color="white"/>
    <Text style={styles.text}>Log Out</Text>
 </TouchableOpacity>
      
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
    flexDirection:"row",
   
    padding:10,
    width:"60%"
  
    },
    text:{
        color:"white",
        fontSize:18,
        marginLeft:10,
       
    }
})

export default Settings