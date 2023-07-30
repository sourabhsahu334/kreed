import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {useNavigation} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Message = () => {

  const navigation = useNavigation();
  const goback=()=>{
    navigation.goBack();
  }

  const goto = () => {
    navigation.navigate('Chat');
  };
  const gotoprofile = () => {
    navigation.navigate('Profile');
  };
  const colors = [
    '#FFCDD2',
    '#F8BBD0',
    '#E1BEE7',
    '#D1C4E9',
    '#C5CAE9',
    '#BBDEFB',
    '#B3E5FC',
    '#B2EBF2',
    '#B2DFDB',
    '#C8E6C9',
  ];
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const messages = [
    {
      id: 1,
      avatar: require('../Assets/download1.png'),
      name: 'Ravi',
      timestamp: 'Tuesday, 4 July 2023 6:07 pm',
      hasRead: true,
    },
    {
      id: 1,
      avatar: require('../Assets/download1.png'),
      name: 'Ravi',
      timestamp: 'Tuesday, 4 July 2023 6:07 pm',
      hasRead: true,
    },
    {
      id: 1,
      avatar: require('../Assets/download1.png'),
      name: 'Ravi',
      timestamp: 'Tuesday, 4 July 2023 6:07 pm',
      hasRead: true,
    },

    {
      id: 1,
      avatar: require('../Assets/download1.png'),
      name: 'Ravi',
      timestamp: 'Tuesday, 4 July 2023 6:07 pm',
      hasRead: true,
    },
    {
      id: 1,
      avatar: require('../Assets/download1.png'),
      name: 'Ravi',
      timestamp: 'Tuesday, 4 July 2023 6:07 pm',
      hasRead: true,
    },
    {
      id: 1,
      avatar: require('../Assets/download1.png'),
      name: 'Ravi',
      timestamp: 'Tuesday, 4 July 2023 6:07 pm',
      hasRead: true,
    },
    // Add more message objects as needed
  ];
  const CircleIcon2 = ({avatar, name, hasRead, timestamp, backgroundColor}) => {
    return (
      <TouchableOpacity onPress={goto} style={styles.box}>
        <View>
          <Image
            style={{height: 50, width: 50, borderRadius: 25, margin: 20}}
            source={avatar}
          />
        </View>
        <View
          style={{
            padding: 20,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text2}>{timestamp}</Text>
        </View>
        <View style={styles.box2}>
          <Icon name="check" size={20} color={hasRead ? 'green' : 'red'} />
        </View>
      </TouchableOpacity>
    );
  };
  const CircleIcon = ({name, backgroundColor}) => {
    return (
      <TouchableOpacity style={styles.iconContainer}>
        <View
          style={{
            height: 70,
            width: 70,
            backgroundColor: backgroundColor,
            borderRadius: 45,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
            marginLeft: 10,
          }}>
          <Image
            style={{height: 55, width: 55}}
            source={require('../Assets/download1.png')}
          />
        </View>
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    );
  };
  const iconNames = ['Icon1', 'Icon2', 'Icon3', 'Icon4', 'Icon5'];
  return (
    <View style={{alignItems: 'center', flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
        }}>
        <TouchableOpacity onPress={goback} style={{margin:15}}>
        <Ionicons name={'arrow-back-outline'} size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoprofile} style={{marginTop: 15,marginRight:"auto"}}>
          <Image
            style={{width: 45, height: 45, borderRadius: 22.5}}
            source={require('../Assets/download1.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 15}}>
          <Icon name="search" size={45} color="#2ec3ed" />
        </TouchableOpacity>
      </View>

      {/* Other components */}
      <ScrollView>
        {messages.map(message => (
          <CircleIcon2
            key={message.id}
            avatar={message.avatar}
            name={message.name}
            timestamp={message.timestamp}
            hasRead={message.hasRead}
            backgroundColor={getRandomColor()}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  box2: {
    width: 25,
    borderWidth: 1,
    borderColor: 'green',
    marginTop: 10,
    height: 25,
    borderRadius: 17,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 30,
  },
  text: {
    fontsize: 19,
    color: 'white',
    fontWeight: 'bold',
  },
  text2: {
    color: 'white',
    fontSize: 11,
    opacity: 0.8,
  },
  box: {
    width: windowWidth - 20,
    height: 85,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',

    borderRadius: 7,
    flexDirection: 'row',

    marginTop: 20,
  },
  flex: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  iconContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: 'blue',
  },
  name: {
    marginTop: 10,
  },
});

export default Message;
