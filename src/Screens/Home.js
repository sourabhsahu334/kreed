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
  Switch
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunity from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Postcomponent from '../Components/Postcomponent';

const Home = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [modalvisible, setvisible] = useState(false);
  const [modalvalue, setmodalvalue] = useState('');
  const navigation = useNavigation();
  const handleShare = () => {
    Share.share({
      message: 'Check out this amazing content!', // The content you want to share
    })
      .then((result) => {
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            console.log('Content shared successfully');
          } else {
            console.log('Share dismissed');
          }
        } else if (result.action === Share.dismissedAction) {
          console.log('Share dismissed');
        }
      })
      .catch((error) => {
        console.log('Share error:', error);
      });
  };
  const gotocreateteam = () => {
    navigation.navigate('Room');
  };

  const opennotification = () => {
    setvisible(true);
    setmodalvalue('notification');
  };
  const openoptions = () => {
    setvisible(true);
    setmodalvalue('options');
  };
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
          <TouchableOpacity onPress={opennotification}>
          <View style={{height:6,width:6,backgroundColor:"red",borderRadius:3,marginBottom:-17,marginLeft:"auto",marginRight:12,marginTop:10}}></View>
            <Ionicons
              name="ios-notifications-outline"
              size={30}
              color="white"
              style={{margin: 7}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("Message")}>
            <Image
              style={{marginRight: 15, marginTop: 10}}
              source={require('../Assets/Vector.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginRight: 10,
            }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                objectFit: 'containe',
              }}
              source={require('../Assets/download1.png')}
            />
            <View style={{width: '80%', marginLeft: 5}}>
              <Text style={{color: 'white', fontSize: 18}}>
                Priti Mondal has played with Parth and 3 others.
              </Text>
              <Text style={{color: '#86D957', fontSize: 12,marginLeft:20}}>june 2 2023</Text>
            </View>
            <TouchableOpacity onPress={openoptions} style={{marginTop: 3}}>
              <MaterialCommunity name="dots-vertical" size={20} color="white" />
            </TouchableOpacity>
          </View>
    
        
        
     <Postcomponent/>
     <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginRight: 10,
              marginTop:20
            }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                objectFit: 'containe',
              }}
              source={require('../Assets/download1.png')}
            />
            <View style={{width: '80%', marginLeft: 5}}>
              <Text style={{color: 'white', fontSize: 18}}>
                Priti Mondal has played with Parth and 3 others.
              </Text>
              <Text style={{color: '#86D957', fontSize: 12,marginLeft:20}}>june 2 2023</Text>
            </View>
            <TouchableOpacity onPress={openoptions} style={{marginTop: 3}}>
              <MaterialCommunity name="dots-vertical" size={20} color="white" />
            </TouchableOpacity>
          </View>
     <Postcomponent/>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        visible={modalvisible}
        transparent={true}
        onRequestClose={() => setvisible(false)}>
        <TouchableWithoutFeedback onPress={() => setvisible(false)}>
          <View style={[styles.modaloverlay,{paddingBottom:modalvalue=="options" ? 300:10}]}></View>
        </TouchableWithoutFeedback>
        {modalvalue === 'notification' ? (
          <View style={styles.modal}>
            <View style={styles.modalcontainer}>
              <View
                style={{
                  backgroundColor: '#0c0f14',
                  width: '98%',
                  height: 50,
                  borderRadius: 10,
                  margin: 2,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                 style={{width: 35, height: 35, borderRadius: 17.5,marginLeft:10}}
                  source={require('../Assets/download1.png')}
                />
                <Text style={{color: 'white', fontSize: 17, marginLeft: 10}}>
                  Sampati Datta
                </Text>
                <TouchableOpacity style={{marginLeft: 'auto', marginRight: 10}}>
                  <AntDesign name="adduser" size={30} color="green" />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#0c0f14',
                  width: '98%',
                  height: 50,
                  borderRadius: 10,
                  margin: 2,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 35, height: 35, borderRadius: 17.5,marginLeft:10}}
                  source={require('../Assets/download1.png')}
                />
                <Text style={{color: 'white', fontSize: 17, marginLeft: 10}}>
                  Sampati Datta
                </Text>
                <TouchableOpacity style={{marginLeft: 'auto', marginRight: 10}}>
                  <AntDesign name="adduser" size={30} color="green" />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#0c0f14',
                  width: '98%',
                  height: 50,
                  borderRadius: 10,
                  margin: 2,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                 style={{width: 35, height: 35, borderRadius: 17.5,marginLeft:10}}
                  source={require('../Assets/download1.png')}
                />
                <Text style={{color: 'white', fontSize: 17, marginLeft: 10}}>
                  Sampati Datta
                </Text>
                <TouchableOpacity style={{marginLeft: 'auto', marginRight: 10}}>
                  <AntDesign name="adduser" size={30} color="green" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <ScrollView style={[ { paddingTop:20 ,height:250,backgroundColor:"black",borderWidth:1,borderTopColor:'green',borderRadius:10}]}>
         
            <View style={[styles.flex, {marginLeft: 40, marginRight: 'auto',marginBottom:10}]}>
              <MaterialIcon name="block" color="white" size={25} />
              <TouchableOpacity><Text style={[styles.Text,{marginLeft:20}]}>Block</Text></TouchableOpacity>
            </View>
            <View style={[styles.flex, {marginLeft: 40, marginRight: 'auto',marginBottom:10}]}>
              <MaterialIcon name="share" color="white" size={25} />
              <TouchableOpacity onPress={handleShare}><Text style={[styles.Text,{marginLeft:20}]}>Share Profile</Text></TouchableOpacity>
            </View>
            <View style={[styles.flex, {marginLeft: 40, marginRight: 'auto',marginBottom:10}]}>
              <MaterialIcon name="save" color="white" size={25} />
              <TouchableOpacity><Text style={[styles.Text,{marginLeft:20}]}>Save</Text></TouchableOpacity>
            </View>

            <View style={[styles.flex, {marginLeft: 40, marginRight: 'auto',marginBottom:10}]}>
              <MaterialIcon name="notifications-active" color="white" size={25} />
             <TouchableOpacity><Text style={[styles.Text,{marginLeft:20}]}>Notification for this post </Text></TouchableOpacity>
             <Switch
              
        trackColor={{false: '#70b64a', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : 'rgba(255,255,255,0.9)'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
            </View>
            <View style={[styles.flex, {marginLeft: 40, marginRight: 'auto',marginBottom:10}]}>
              <MaterialIcon name="edit" color="white" size={25} />
             <TouchableOpacity><Text style={[styles.Text,{marginLeft:20}]}>Edit Post</Text></TouchableOpacity>
            </View>
            <View style={[styles.flex, {marginLeft: 40, marginRight: 'auto',marginBottom:10}]}>
              <MaterialIcon name="report" color="red" size={25} />
             <TouchableOpacity><Text style={[styles.Text,{marginLeft:20}]}>Report</Text></TouchableOpacity>
            </View>
            <View style={[styles.flex, {marginLeft: 40, marginRight: 'auto',marginBottom:10}]}>
              <MaterialIcon name="delete-outline" color="red" size={25} />
             <TouchableOpacity><Text style={[styles.Text,{marginLeft:20}]}>Delete</Text></TouchableOpacity>
            </View>
          </ScrollView>
        )}
        {modalvalue === 'notification' && (
          <TouchableWithoutFeedback onPress={() => setvisible(false)}>
            <View style={styles.modaloverlay}></View>
          </TouchableWithoutFeedback>
        )}
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  modalcontainer: {
    width: '90%',
    height: 230,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',

    height: 250,
    backgroundColor: 'black',
  },
  modaloverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,

    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  NavbarIcon: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  LoginButton: {
    backgroundColor: '#436A2E',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    width: 200,
    marginLeft: 55,
    borderRadius: 20,
    marginTop: 15,
  },
  LoginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Text:{
    color:"white",
    fontSize:16,
    fontWeight:"bold"
  }
});
