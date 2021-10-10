import React from 'react';
import { View, Image, Button, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const SERVER_URL = 'https://strassium1.loca.lt';



const App = () => {
  const [photo, setPhoto] = React.useState(null);

  const createFormData = (uri) => {
    const formData = new FormData()
    formData.append('file', {
      uri: photo.uri,
      type: "image/jpeg",
      name: "photo.jpg"
   }) 
  let res = apiPostWithTokenAndImage(
    formData,
  );
  };
  const apiPostWithTokenAndImage = async (inputParam) => {
     let URL = SERVER_URL + '/upload'
     console.log('URL:' + URL);
     let param = inputParam;
     let headers = {
       'Content-Type': 'multipart/form-data',// this is a imp line
       Accept: 'application/json',
     };
     let obj = {
       method: 'POST',
       headers: headers,
       body: param,
     };
     return fetch(URL, obj)// put your API URL here
       .then(resp => resp.json().then(json => console.log(json)))
   };

  const handleChoosePhoto = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const response = await ImagePicker.launchImageLibraryAsync({
      
      base64: true,
      quality:0.5,
      
      allowsEditing:true});
      if (response) {
        setPhoto(response);
      }
    };

  const handleUploadPhoto = () => {
    console.log(`${SERVER_URL}/upload`)
    createFormData();
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {photo && (
        <>
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
          <Button title="Upload Photo" onPress={handleUploadPhoto} />
        </>
      )}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
    </View>
  );
};

export default App;