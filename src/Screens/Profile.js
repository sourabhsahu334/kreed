import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  Share,
  Switch
} from 'react-native';

import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunity from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {create} from 'react-test-renderer';
import Badmintontates from '../Components/BadmintonStates';
import CricketStates from '../Components/CricketStates';
import History from '../Components/History';
import {useNavigation} from '@react-navigation/native';
import Postcomponent from '../Components/Postcomponent';
import { statusCodes } from '@react-native-google-signin/google-signin';

const Post = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [statetype,setstatetype]=useState("cricket");
  const navigation = useNavigation();
  const [modalvisible2, setvisible2] = useState(false);
  const [modalvalue, setmodalvalue] = useState('');
  const [modalvisible, setvisible] = useState(false);
  const [state, setCreate] = useState(false);
  const [history, sethistory] = useState(false);
  const [post, setPost] = useState(true);
  const goto = () => {
    navigation.navigate('EditProfile');
  };
  const openoptions = () => {
    setvisible2(true);
    setmodalvalue('options');
  };
  const handleShare = () => {
    Share.share({
      message: 'Check out this amazing content!', // The content you want to share
    })
      .then(result => {
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // Content shared successfully
            console.log('Content shared successfully');
          } else {
            // Share was dismissed
            console.log('Share dismissed');
          }
        } else if (result.action === Share.dismissedAction) {
          // Share was dismissed
          console.log('Share dismissed');
        }
      })
      .catch(error => {
        // Error occurred while sharing
        console.log('Share error:', error);
      });
  };
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <View
        style={{
          height: 50,
          width: '100%',
          flexDirection: 'row',
          marginLeft: 'auto',
          padding: 5,
          marginRight: 10,
        }}>
        <TouchableOpacity onPress={() => setvisible(false)}>
          <Ionicons
            name="arrow-back"
            size={30}
            color="white"
            style={{margin: 5}}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            marginLeft: 10,
            marginTop: 10,
            marginRight: 'auto',
          }}>
          Priti Mondal
        </Text>
        <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
          <TouchableOpacity onPress={() => setvisible(true)}>
            <Ionicons
              name="search"
              size={30}
              color="white"
              style={{marginRight: 5}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Ionicons name="filter" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={{width: '100%', flex: 1}}>
          <Image
            style={{position: 'absolute', width: '100%'}}
            source={require('../Assets/download.jpg')}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{marginTop: '35%', flexDirection: 'column'}}>
              <Image
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
              <Text style={{color: 'white', marginLeft: 10, fontSize: 16}}>
                Priti Mondal
              </Text>
            </View>
            <View
              style={{
                marginTop: '50%',
                flexDirection: 'column',
                alignItems: 'center',
                width:65
              }}>
              <View
                style={{
                  height: 35,
                  width: 40,
                  backgroundColor: '#456439',
                  borderRadius: 13,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white'}}>80</Text>
              </View>
              <Text style={{color: 'white',fontSize:12.5 }}>Posts</Text>
            </View>
            <View
              style={{
                marginTop: '50%',
                flexDirection: 'column',
                alignItems: 'center',
                width:65
              }}>
              <View
                style={{
                  height: 35,
                  width: 40,
                  backgroundColor: '#456439',
                  borderRadius: 13,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white'}}>12k</Text>
              </View>
              <Text style={{color: 'white',fontSize:12.5}}>Followers</Text>
            </View>
            <View
              style={{
                marginTop: '50%',
                flexDirection: 'column',
                alignItems: 'center',
                width:68
              }}>
              <View
                style={{
                  height: 35,
                  width: 40,
                  backgroundColor: '#456439',
                  borderRadius: 13,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white'}}>30</Text>
              </View>
              <Text style={{color: 'white',fontSize:12.5}}>Following</Text>
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <Text style={{color: 'white',marginLeft: 5,}}>
              Priti Mondal, skilled badminton player with agility, precision,
              and passion. Dedicated to excellence on the court, aiming to
              achieve new heights in the world of badminton with unwavering
              determination.
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 30,marginLeft: 5,}}>
            <View
              style={{
                borderWidth: 2,
                borderColor: '#456349',
                borderRadius: 15,
                width: 100,
                height: 45,
                
              }}>
              <TouchableOpacity
                onPress={goto}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  marginTop: 10,
                }}>
                <Text style={{color: 'white', fontSize: 16}}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderWidth: 2,
                borderColor: '#456349',
                borderRadius: 15,
                width: 110,
                height: 45,
                marginLeft: 30,
              }}>
              <TouchableOpacity
                onPress={handleShare}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  marginTop: 10,
                }}>
                <Text style={{color: 'white', fontSize: 16}}>
                  Share Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setPost(true);
                  sethistory(false);
                  setCreate(false);
                }}
                style={{marginLeft: 40, marginTop: 40}}>
                <Text style={{color: 'white', fontSize: 17}}>Post</Text>
              </TouchableOpacity>
              <LinearGradient
                colors={post ? ['#D8E60E', '#4C9402'] : ['black', 'black']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{
                  height: '2.5%',
                  width: '60%',
                  marginLeft: 40,
                  borderRadius:10
                }}></LinearGradient>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  {
                    setCreate(true);
                    sethistory(false);
                    setPost(false);
                  }
                }}
                style={{marginRight: 40, marginTop: 40}}>
                <Text style={{color: 'white', fontSize: 17, marginLeft: 40}}>
                  State
                </Text>
              </TouchableOpacity>

              <LinearGradient
                colors={state ? ['#D8E60E', '#4C9402'] : ['black', 'black']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{
                  height: '4%',
                  width: '40%',
                  marginLeft: 40,
                  borderRadius:10
                }}></LinearGradient>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  {
                    sethistory(true);
                    setCreate(false);
                    setPost(false);
                  }
                }}
                style={{marginRight: 40, marginTop: 40}}>
                <Text style={{color: 'white', fontSize: 17}}>History</Text>
              </TouchableOpacity>

              <LinearGradient
                colors={history ? ['#D8E60E', '#4C9402'] : ['black', 'black']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{height: '4%', width: '60%', borderRadius:10}}></LinearGradient>
            </View>
          </View>
          {history && <ScrollView style={{padding:10,paddingBottom:50,marginTop:-10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginRight: 10,
              marginBottom:10
            }}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
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
            {/* <TouchableOpacity onPress={openoptions} style={{marginTop: 3}}>
              <MaterialCommunity name="dots-vertical" size={20} color="white" />
            </TouchableOpacity> */}
          </View>
            <History/>
            <History/>
            <History/>
            <History/>
            <History/>
            <History/>
            <History/>
            <History/>
            <History/>
          </ScrollView>}
          
          {state && <View style={{flex:1}}><ScrollView><View style={{width:"90%",height:40,flexDirection:"row",justifyContent:"space-between",margin:10,marginLeft:17,backgroundColor:"rgba(255,255,255,0.3)",alignItems:"center",borderRadius:20,paddingHorizontal:10,marginBottom:20}}>
            <TouchableOpacity  onPress={()=>setstatetype("badminton")} style={{backgroundColor:statetype==="badminton"?"#183c04":"transparent",height:40,width:"55%",marginLeft:-10,justifyContent:"center",paddingHorizontal:30,borderRadius:20}}><Text style={[styles.Text,{margin:"auto"}]}>Badminton</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setstatetype("cricket")} style={{backgroundColor:statetype==="cricket"?"#183c04":"transparent",height:40,width:"55%",marginLeft:-10,justifyContent:"center",paddingHorizontal:30,borderRadius:20}}><Text style={[styles.Text,{marginLeft:"auto",marginRight:"auto"}]}>Cricket</Text></TouchableOpacity>
          </View>
        {statetype==="cricket"?<CricketStates/>:<Badmintontates/>}
          
          
          </ScrollView></View>}
          {post && (
            <ScrollView style={{paddingBottom:10,marginTop:"-20%"}}>
             <View>
              
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
                width: 50,
                height: 50,
                borderRadius: 25,
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
                width: 50,
                height: 50,
                borderRadius: 25,
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
                width: 50,
                height: 50,
                borderRadius: 25,
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
                width: 50,
                height: 50,
                borderRadius: 25,
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
          )}
        </View>
      </ScrollView>
      <Modal
        visible={modalvisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setvisible(false)}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,1)'}}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <TouchableOpacity onPress={() => setvisible(false)}>
              <Ionicons
                name="arrow-back"
                size={30}
                color="white"
                style={{margin: 5}}
              />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,0.5)',
                width: '80%',
                borderRadius: 15,
                margin: 5,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 5,
              }}>
              <Ionicons
                name="search"
                size={20}
                color="white"
                style={{marginRight: 5}}
              />

              <Text style={{color: 'white', fontSize: 18}}>Search</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
              padding: 10,
            }}>
            <Text style={styles.Text}>Recent Search</Text>
            <Text style={[styles.Text, {color: '#86d957'}]}>See All</Text>
          </View>
          <ScrollView>
            <View
              style={{
                marginTop:10,
                width: '95%',
                height: 100,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft:"auto",
                marginRight:"auto"
              }}>
              <View>
                <Image
               style={{height: 60, width: 60, borderRadius: 30}}
                  source={require('../Assets/download1.png')}
                />
              </View>
              <View style={{marginRight: 'auto', marginLeft: 10}}>
                <Text style={styles.Text}>Akash Datta</Text>
                <Text
                  style={[styles.Text, {fontSize: 13, fontWeight: 'normal'}]}>
                  Akash_334
                </Text>
                <Text
                  style={[styles.Text, {fontSize: 13, fontWeight: 'bold'}]}>
                  Following
                </Text>
              </View>
              <TouchableOpacity onPress={() => console.log('cancel')}>
                <Text style={[styles.Text, {fontSize: 20}]}>x</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
         
                width: '95%',
                height: 100,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft:"auto",
                marginRight:"auto"
              }}>
              <View>
                <Image
               style={{height: 60, width: 60, borderRadius: 30}}
                  source={require('../Assets/download1.png')}
                />
              </View>
              <View style={{marginRight: 'auto', marginLeft: 10}}>
                <Text style={styles.Text}>Akash Datta</Text>
                <Text
                  style={[styles.Text, {fontSize: 13, fontWeight: 'normal'}]}>
                  Akash_334
                </Text>
                <Text
                  style={[styles.Text, {fontSize: 13, fontWeight: 'bold'}]}>
                  Following
                </Text>
              </View>
              <TouchableOpacity onPress={() => console.log('cancel')}>
                <Text style={[styles.Text, {fontSize: 20}]}>x</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
               
                width: '95%',
                height: 100,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft:"auto",
                marginRight:"auto"
              }}>
              <View>
                <Image
               style={{height: 60, width: 60, borderRadius: 30}}
                  source={require('../Assets/download1.png')}
                />
              </View>
              <View style={{marginRight: 'auto', marginLeft: 10}}>
                <Text style={styles.Text}>Akash Datta</Text>
                <Text
                  style={[styles.Text, {fontSize: 13, fontWeight: 'normal'}]}>
                  Akash_334
                </Text>
                <Text
                  style={[styles.Text, {fontSize: 13, fontWeight: 'bold'}]}>
                  Following
                </Text>
              </View>
              <TouchableOpacity onPress={() => console.log('cancel')}>
                <Text style={[styles.Text, {fontSize: 20}]}>x</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '95%',
                height: 100,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft:"auto",
                marginRight:"auto"
               
              }}>
              <View>
                <Image
                  style={{height: 60, width: 60, borderRadius: 30}}
                  source={require('../Assets/download1.png')}
                />
              </View>
              <View style={{marginRight: 'auto', marginLeft: 10}}>
                <Text style={styles.Text}>Akash Datta</Text>
                <Text
                  style={[styles.Text, {fontSize: 13, fontWeight: 'normal'}]}>
                  Akash_334
                </Text>
                <Text
                  style={[styles.Text, {fontSize: 13, fontWeight: 'bold'}]}>
                  Following
                </Text>
              </View>
              <TouchableOpacity onPress={() => console.log('cancel')}>
                <Text style={[styles.Text, {fontSize: 20}]}>x</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        visible={modalvisible2}
        transparent={true}
        onRequestClose={() => setvisible2(false)}>
        <TouchableWithoutFeedback onPress={() => setvisible2(false)}>
          <View style={[styles.modaloverlay,{paddingBottom:modalvalue=="options" ? 300:10}]}></View>
        </TouchableWithoutFeedback>
        {modalvalue === 'notification' ? (
          <View style={styles.modal}>
            <View style={styles.modalcontainer}>
              <View
                style={{
                  backgroundColor: 'rgba(255, 255, 255, .2)',
                  width: '98%',
                  height: 50,
                  borderRadius: 10,
                  margin: 2,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 30, height: 30, borderRadius: 15}}
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
                  backgroundColor: 'rgba(255, 255, 255, .2)',
                  width: '98%',
                  height: 50,
                  borderRadius: 10,
                  margin: 2,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 30, height: 30, borderRadius: 15}}
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
                  backgroundColor: 'rgba(255, 255, 255, .2)',
                  width: '98%',
                  height: 50,
                  borderRadius: 10,
                  margin: 2,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 30, height: 30, borderRadius: 15}}
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

const styles = StyleSheet.create({
  Text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
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

export default Post;
