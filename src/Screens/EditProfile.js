import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import * as RNPickerSelect from 'react-native-picker-select';
import { Picker } from '@react-native-picker/picker';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
const EditProfileScreen = () => {
    const [modalvisible, setvisible] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState('');
  const navigation = useNavigation();
  const goto=()=>{
    navigation.goBack();
  }

  const handleSaveProfile = () => {
    // Logic to save the profile data
    console.log('Profile saved');
  };
  const pickerStyles = {
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
    
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  };
  

  const [selectedgame, setgame] = useState('');
  const [selectedgrip, setgrip] = useState('');
  const [selectedgamelevel, setgamelevel] = useState('');

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
    // Implement your logic for handling language change here
  };
  
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 60,
          backgroundColor: 'black',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={goto}>
          <Icon name="arrow-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={{fontSize: 18, color: 'white'}}>Pratik Modal</Text>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
          <Text style={styles.buttonText}>Save </Text>
        </TouchableOpacity>
      </View>
      <View
      // Adjust the blur radius as needed
      >
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              source={require('../Assets/download1.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* Name input */}
        <View style={styles.fieldContainer}>
          <TextInput
            style={[styles.input,styles.blurredBackground  ]}
            placeholder="Name"
            placeholderTextColor={"rgba(255,255,255,.7)"}
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Username input */}
        <View style={styles.fieldContainer}>
          <TextInput
            style={[styles.input, styles.blurredBackground]}
            placeholder="Username"
            placeholderTextColor={"rgba(255,255,255,.7)"}
            value={username}
            onChangeText={setUsername}
          />
        </View>

        {/* Bio input */}
        <View style={styles.fieldContainer}>
          <TextInput
            style={[styles.input, styles.blurredBackground, styles.bioInput]}
            placeholder="Bio"
            placeholderTextColor={"rgba(255,255,255,.7)"}
            value={bio}
            onChangeText={setBio}
            multiline
            numberOfLines={4}
          />
        </View>

        {/* Gender selection */}
        <View style={[styles.fieldContainer, {backgroundColor: 'black'}]}>
          <Text style={styles.label}>Select Gender:</Text>
<View style={{flexDirection:"row",justifyContent:"space-between"}}>
<View style={{flexDirection: 'row',margin:5}}>
            <TouchableOpacity
              style={[
                styles.genderOption,
                gender === 'male' && styles.selectedOption,
              ]}
              onPress={() => setGender('male')}>
              <Text
                style={[
                  styles.optionText,
                  gender === 'male' && styles.selectedText,
                ]}></Text>
            </TouchableOpacity>
            <Text style={{fontSize: 15, color: 'white', marginLeft: 10}}>
              Male
            </Text>
          </View>
          <View style={{flexDirection: 'row',margin:5}}>
            <TouchableOpacity
              style={[
                styles.genderOption,
                gender === 'female' && styles.selectedOption,
              ]}
              onPress={() => setGender('female')}>
              <Text
                style={[
                  styles.optionText,
                  gender === 'female' && styles.selectedText,
                ]}></Text>
            </TouchableOpacity>
            <Text style={{fontSize: 15, color: 'white', marginLeft: 10}}>
              Female
            </Text>
          </View>
          <View style={{flexDirection: 'row',margin:5}}>
            <TouchableOpacity
              style={[
                styles.genderOption,
                gender === 'other' && styles.selectedOption,
              ]}
              onPress={() => setGender('other')}>
              <Text
                style={[
                  styles.optionText,
                  gender === 'other' && styles.selectedText,
                ]}></Text>
            </TouchableOpacity>
            <Text style={{fontSize: 15, color: 'white', marginLeft: 10}}>
              Others
            </Text>
          </View>
</View>
        </View>
        
        <TouchableOpacity onPress={()=>setvisible(true)} style={[styles.fieldContainer,{backgroundColor:"black",borderWidth:2,borderColor:"rgba(255, 255, 255, 0.5)",marginTop:30}]}><Text style={{color:"green",fontSize:16,fontWeight:"bold",padding:10}}>Edit game Infromation         {">"}</Text></TouchableOpacity>
      </View>
      <Modal
   animationType="slide"
        visible={modalvisible}
        transparent={true}
        onRequestClose={() => setvisible(false)}
      >
      <TouchableWithoutFeedback onPress={()=>setvisible(false)}>
        <View style={{backgroundColor:"rgba(0,0,0,0.2)",flex:1}}></View>
      </TouchableWithoutFeedback>
    <View style={{height:300,backgroundColor:"grey",marginTop:"auto",borderRadius:10}}>
    <Picker
            selectedValue={selectedgame}
            onValueChange={setgame}
            style={[styles.input, { borderRadius: 20 }]}
            itemStyle={{ borderRadius: 20 }}
          >
            <Picker.Item label="Game" value="" />
           
            <Picker.Item label="Cricket" value="cri" />
            <Picker.Item label="badminton" value="badmin" />
          
            {/* Add more language options as needed */}
          </Picker>
          <Picker
            selectedValue={selectedgrip}
            onValueChange={setgrip}
            style={[styles.input, { borderRadius: 20 }]}
            itemStyle={{ borderRadius: 20 }}
          >
            <Picker.Item label="Game Grip" value="" />
            
            <Picker.Item label="Right Hand" value="r" />
            <Picker.Item label="Left Hand" value="l" />
          
            {/* Add more language options as needed */}
          </Picker>
          <Picker
            selectedValue={selectedgamelevel}
            onValueChange={setgamelevel}
            style={[styles.input, { borderRadius: 20 }]}
            itemStyle={{ borderRadius: 20 }}
          >
            <Picker.Item label="Add player Level" value="" />
            
            <Picker.Item label="Begginer" value="b" />
            <Picker.Item label="Intermediate" value="in" />
            <Picker.Item label="Advanced" value="ad" />
            <Picker.Item label="Expert" value="ex" />
          
            {/* Add more language options as needed */}
          </Picker>
    </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#2d3034',
    borderWidth:1,
    borderColor:"green",
    borderRadius: 5,
    height: 50,
    width: '90%',

    color: 'black',
    fontSize: 16,
    marginVertical: 10,
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
    marginRight: 'auto',
    marginLeft: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  fieldContainer: {
    backgroundColor:"#2d3034", // Adjust the opacity as needed
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    color: 'white',
  },
  blurredBackground: {
    backgroundColor: 'transparent',
  // For iOS, adjust the blur radius as needed
    paddingHorizontal: 10,
  },
  bioInput: {
    textAlignVertical: 'top',
    height: 80,
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  genderOption: {
    padding: 8,
    borderWidth: 1,
    borderColor: 'white',
    margin: 2,
    borderRadius: 10,
   
    width: 20,
    height: 20,
  },
  selectedOption: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  optionText: {
    color: 'black',
  },
  selectedText: {
    color: 'white',
  },
  saveButton: {
    backgroundColor: 'green',
    marginLeft: 'auto',
    marginRight: 20,
    width: 80,
    padding: 5,
    borderRadius: 4,
    alignItems: 'center',

    marginHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
