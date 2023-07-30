import { View, Text, StyleSheet, ScrollView,TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunity from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const HostLivePlayroomChooseModal2 = () => {

  const [checkbox,setcheckbox]=useState(false);
  return (
    <ScrollView style={{flex:1,backgroundColor:"black"}}>
      <Text  style={[styles.text,{marginLeft:20,marginBottom:20}]}>Choose modal</Text>
<View style={{flexDirection:"row",justifyContent:'space-between',paddingHorizontal:10,marginBottom:20}}>
<View style={[styles.contaienr]}>
        <View style={[styles.box,,styles.centercontainer,]}><Text style={[{color:"white",fontSize:20,fontWeight:"bold"}]}>Doubles</Text></View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5}}>
       <View 
        style={[styles.teambox,{backgroundColor:"rgba(255,255,255,.3)",flexDirection:"row",justifyContent:"space-evenly"}]}   
             
              >
            <View> 
            <Image source={require("../Assets/download1.png")} style={{width:25,height:25,borderRadius:12.5}}/>
             <Text style={{fontSize:12,color:"white"}}>priti</Text></View>
             <View> 
            <Image source={require("../Assets/download1.png")} style={{width:25,height:25,borderRadius:12.5}}/>
             <Text style={{fontSize:12,color:"white"}}>priti</Text></View>
              </View>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5,marginBottom:20}}>
       <View 
        style={[styles.teambox,{backgroundColor:"rgba(255,255,255,.3)",flexDirection:"row",justifyContent:"space-evenly"}]}   
             
              >
            <View> 
            <Image source={require("../Assets/download1.png")} style={{width:25,height:25,borderRadius:12.5}}/>
             <Text style={{fontSize:12,color:"white"}}>priti</Text></View>
             <View> 
            <Image source={require("../Assets/download1.png")} style={{width:25,height:25,borderRadius:12.5}}/>
             <Text style={{fontSize:12,color:"white"}}>priti</Text></View>
              </View>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={[{flexDirection:"row",width:"100%",height:30,marginBottom:-10}]}>
        <LinearGradient    colors={['rgba(255,255,255,.1)', 'rgba(255,255,255,.5)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}} style={[{height:30,width:"50%"},styles.centercontainer]}>
                   <MaterialCommunity name="reload" size={25} color="white" />
              </LinearGradient>
        <TouchableOpacity style={[{height:30,width:"50%",backgroundColor:"#0a871e"},styles.centercontainer]}>
        <MaterialCommunity name="check" size={30} color="white" />
        </TouchableOpacity>
       </View>
       
    </View>
    <View style={[styles.contaienr]}>
        <View style={[styles.box,,styles.centercontainer,]}><Text style={[{color:"white",fontSize:20,fontWeight:"bold"}]}>Doubles</Text></View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5}}>
       <View 
        style={[styles.teambox,{backgroundColor:"rgba(255,255,255,.3)",flexDirection:"row",justifyContent:"space-evenly"}]}   
             
              >
            <View> 
            <Image source={require("../Assets/download1.png")} style={{width:25,height:25,borderRadius:12.5}}/>
             <Text style={{fontSize:12,color:"white"}}>priti</Text></View>
             <View> 
            <Image source={require("../Assets/download1.png")} style={{width:25,height:25,borderRadius:12.5}}/>
             <Text style={{fontSize:12,color:"white"}}>priti</Text></View>
              </View>
              
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5,marginBottom:20}}>
       <View 
        style={[styles.teambox,{backgroundColor:"rgba(255,255,255,.3)",flexDirection:"row",justifyContent:"space-evenly"}]}   
             
              >
            <View> 
            <Image source={require("../Assets/download1.png")} style={{width:25,height:25,borderRadius:12.5}}/>
             <Text style={{fontSize:12,color:"white"}}>priti</Text></View>
             <View> 
            <Image source={require("../Assets/download1.png")} style={{width:25,height:25,borderRadius:12.5}}/>
             <Text style={{fontSize:12,color:"white"}}>priti</Text></View>
              </View>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={[{flexDirection:"row",width:"100%",height:30,marginBottom:-10}]}>
        <LinearGradient    colors={['rgba(255,255,255,.1)', 'rgba(255,255,255,.5)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}} style={[{height:30,width:"50%"},styles.centercontainer]}>
                   <MaterialCommunity name="reload" size={25} color="white" />
              </LinearGradient>
        <TouchableOpacity style={[{height:30,width:"50%",backgroundColor:"#0a871e"},styles.centercontainer]}>
        <MaterialCommunity name="check" size={30} color="white" />
        </TouchableOpacity>
       </View>
       
    </View>
   
   
</View>
<View style={{flexDirection:"row",justifyContent:'space-between',paddingHorizontal:10,marginBottom:20}}>
<View style={[styles.contaienr]}>
        <View style={[styles.box,,styles.centercontainer,]}><Text style={[{color:"white",fontSize:20,fontWeight:"bold"}]}>Doubles</Text></View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5}}>
       <View 
        style={[styles.teambox,{backgroundColor:"rgba(255,255,255,.3)",flexDirection:"row",justifyContent:"space-evenly"}]}   
             
              >
            <View> 
            <Image source={require("../Assets/download1.png")} style={{width:25,height:25,borderRadius:12.5}}/>
             <Text style={{fontSize:12,color:"white"}}>priti</Text></View>
             <View> 
            <Image source={require("../Assets/download1.png")} style={{width:25,height:25,borderRadius:12.5}}/>
             <Text style={{fontSize:12,color:"white"}}>priti</Text></View>
              </View>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5,marginBottom:20}}>
       <View 
        style={[styles.teambox,{backgroundColor:"rgba(255,255,255,.3)",flexDirection:"row",justifyContent:"space-evenly"}]}   
             
              >
            <View> 
            <Image source={require("../Assets/download1.png")} style={{width:25,height:25,borderRadius:12.5}}/>
             <Text style={{fontSize:12,color:"white"}}>priti</Text></View>
             <View> 
            <Image source={require("../Assets/download1.png")} style={{width:25,height:25,borderRadius:12.5}}/>
             <Text style={{fontSize:12,color:"white"}}>priti</Text></View>
              </View>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={[{flexDirection:"row",width:"100%",height:30,marginBottom:-10}]}>
        <LinearGradient    colors={['rgba(255,255,255,.1)', 'rgba(255,255,255,.5)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}} style={[{height:30,width:"50%"},styles.centercontainer]}>
                   <MaterialCommunity name="reload" size={25} color="white" />
              </LinearGradient>
        <TouchableOpacity style={[{height:30,width:"50%",backgroundColor:"#0a871e"},styles.centercontainer]}>
        <MaterialCommunity name="check" size={30} color="white" />
        </TouchableOpacity>
       </View>
       
    </View>
    <View style={[styles.contaienr]}>
        <View style={[styles.box,,styles.centercontainer,]}><Text style={[{color:"white",fontSize:20,fontWeight:"bold"}]}>Doubles</Text></View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5}}>
       <View 
        style={[styles.teambox,{backgroundColor:"rgba(255,255,255,.3)",flexDirection:"row",justifyContent:"space-evenly"}]}   
             
              >
            <View> 
            <Image source={require("../Assets/download1.png")} style={{width:25,height:25,borderRadius:12.5}}/>
             <Text style={{fontSize:12,color:"white"}}>priti</Text></View>
             <View> 
            <Image source={require("../Assets/download1.png")} style={{width:25,height:25,borderRadius:12.5}}/>
             <Text style={{fontSize:12,color:"white"}}>priti</Text></View>
              </View>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",paddingVertical:5,marginBottom:20}}>
       <View 
        style={[styles.teambox,{backgroundColor:"rgba(255,255,255,.3)",flexDirection:"row",justifyContent:"space-evenly"}]}   
             
              >
            <View> 
            <Image source={require("../Assets/download1.png")} style={{width:25,height:25,borderRadius:12.5}}/>
             <Text style={{fontSize:12,color:"white"}}>priti</Text></View>
             <View> 
            <Image source={require("../Assets/download1.png")} style={{width:25,height:25,borderRadius:12.5}}/>
             <Text style={{fontSize:12,color:"white"}}>priti</Text></View>
              </View>
              <TouchableOpacity style={[styles.checkbox]} onPress={()=>setcheckbox(!checkbox)}>
            { checkbox && <MaterialCommunity name="check" size={25} color="#86D957" />}
              </TouchableOpacity>
       </View>
       <View style={[{flexDirection:"row",width:"100%",height:30,marginBottom:-10}]}>
        <LinearGradient    colors={['rgba(255,255,255,.1)', 'rgba(255,255,255,.5)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}} style={[{height:30,width:"50%"},styles.centercontainer]}>
                   <MaterialCommunity name="reload" size={25} color="white" />
              </LinearGradient>
        <TouchableOpacity style={[{height:30,width:"50%",backgroundColor:"#0a871e"},styles.centercontainer]}>
        <MaterialCommunity name="check" size={30} color="white" />
        </TouchableOpacity>
       </View>
       
    </View>

   
   
</View>
       <TouchableOpacity  
          onPress={()=>{}}
            style={[
              styles.NextButton,
              {width: 50, height: 50, marginBottom: 10, },
            ]}>
            <LinearGradient
              colors={['#60a66a','rgba(255,255,255,.5)', '#282F2E']}
              start={{ x: 0.2, y: 0 }}
              style={[
                styles.LinearGradientButton,
                {padding: 0, justifyContent: 'center'},
              ]}>
              <Text style={[styles.LoginButtonText, {fontSize: 34}]}>+</Text>
            </LinearGradient>
          </TouchableOpacity>

<View style={{width:"95%",flexDirection:"row",justifyContent:"space-between",marginBottom:20,marginHorizontal:10}}>
    <LinearGradient    colors={['rgba(255,255,255,.4)','#7fb95e','#7fb95e','#7fb95e', 'rgba(255,255,255,.4)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}} style={[{height:45,width:"45%",borderRadius:10},styles.centercontainer]}>
                   <TouchableOpacity><Text  style={[{color:"white",fontSize:20,fontWeight:"bold"}]}>Leave Room</Text></TouchableOpacity>
              </LinearGradient>
              <LinearGradient    colors={['rgba(255,255,255,.4)','#7fb95e','#7fb95e','#7fb95e', 'rgba(255,255,255,.4)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}} style={[{height:45,width:"45%",borderRadius:10},styles.centercontainer]}>
                   <TouchableOpacity><Text  style={[{color:"white",fontSize:20,fontWeight:"bold"}]}>End Room</Text></TouchableOpacity>
              </LinearGradient>
    </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({

  centercontainer:{
   justifyContent:"center",
   alignItems:"center"
  },

  text2:{
    fontSize:17,
    color:"black",
    fontWeight:"bold"
  },
    text:{
        color:"#7fb95e",
        fontSize:17,

    },
    contaienr:{
       width:"45%",
       height:185,
       borderRadius:5,
       backgroundColor:"rgba(255,255,255,.2)",
       justifyContent:"center",
       alignItems:"center",
    
    },
    box:{
      backgroundColor:"#4f7240",
      width:"90%",
      height:40,
      borderRadius:10,
      marginTop:5
    }
    ,teambox:{
      width:"60%",
      height:40,
      opacity:.8,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:5,
      backgroundColor:"rgba(255,255,255,.3)"
    },
    checkbox:{
      height:40,
      width:35,
      borderRadius:5,
      borderWidth:1.5,
      borderColor:"#86D957"
    },
    NextButton: {
      backgroundColor: '#436A2E',
      alignItems: 'center',
      width: '85%',
      borderRadius: 20,
      alignSelf: 'center',
    },
    LoginButtonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    LinearGradientButton: {
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      width: '100%',
    },
})

export default HostLivePlayroomChooseModal2