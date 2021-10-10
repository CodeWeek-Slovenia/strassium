import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import TesseractOcr, { LANG_ENGLISH } from 'react-native-tesseract-ocr';
import SomeComponent from './CustomBackground';
import ImgToBase64 from 'react-native-image-base64';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { col } from './clr';
import Accordion from 'react-native-collapsible/Accordion';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import LoadingScreen from './loadingScreen';

const SERVER_URL = 'https://strassium69420.loca.lt';

//const textAddValue = 5;
function RecepieScanScreen() {
  const textAddValue = useSelector(state => state.propertyReducer.size)
  // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState('');
  const[imageText,setText] = useState('');
  const[showWindow,setWindow] = useState(false);
  const[itemList,setItemList] = useState([]);
  const[check,setCheck] = useState(true)
  const[isLoading,setLoading] = useState(false);
  
  alert('Delicate module in early development ahead. Please be patient.')
  String.prototype.replaceAll = function(str1, str2, ignore) 
  {
      return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
  }
  const sendRequest = async (photo) => {
    setLoading(true);
    const formData = new FormData()
    formData.append('file', {
      uri: photo.uri,
      type: "image/jpeg",
      name: "photo.jpg"
   }) 
     let URL = SERVER_URL + '/upload'
     console.log('URL:' + URL);
     let param = formData;
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
     .then(response => {console.log('STATUS: ' + response.status);response.json().then((responseJson) => {setLoading(false);console.log(responseJson.imageText);setText(responseJson.imageText.replaceAll(' =+-n ', '\n'));setItemList(responseJson.imageText.split(' =+-n '));itemList.pop();setWindow(true)})})
   };
  const sendRequest1 = async (base64) =>{
    console.log(base64.length)
    let result = await fetch('https://strassium-ocr.herokuapp.com/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    imageString:base64
  })
}).then(response => {console.log('STATUS: ' + response.status);response.json().then((responseJson) => {setLoading(false);onsole.log(responseJson);setText(responseJson.text.replaceAll(' =+-n ', '\n'));setItemList(responseJson.text.split(' =+-n '));itemList.pop();setWindow(true)})})
  
  }

  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      
      base64: true,
      quality:0.5,
      
      allowsEditing:true
    });
    console.log(result.type)

    

    if (!result.cancelled) {
      setPickedImagePath(result);
      sendRequest(result)
    }
  }

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      base64: true,
      quality:0.5,
      allowsEditing:true,
      
    });

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      sendRequest(result.base64)
    }
  }
  

  function EditingList({list}){
    const[key,setKey] = useState('');
    const[quantity,setQuantity] = useState(0);
    const[measure,setMeasure] = useState(0);
    const[expDate,setExpDate] = useState(new Date(Date.now()));
    const[selectedValue,setSelectedValue] = useState('kg');
    const[picker,setPicker] = useState(false);
    const dispath = useDispatch();
    // function renderItem(item){

      
      
    //   const addItem = () => {
    //     console.log('Hellloooo')
    //   }

    //   return(
    //     <View style={{flex:1}}>
    //     <View style={{width:'100%',height:editWindow ? 320 : 80 ,borderBottomWidth:1,flexDirection:'row'}}>
    //       <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
    //         <Pressable style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}} onPress={() => {editWindow ? setEditWindow(false) : setEditWindow(true) }}>
    //           <Text>{item.item}</Text>
    //         </Pressable>
    //       </View>
    //       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    //         <Pressable style={{justifyContent:'center',alignItems:'center'}} onPress={addItem}>
    //           <Text>ADD</Text>
    //         </Pressable>
    //       </View>
    //     </View>
    //     {/* {editWindow ? 
    //       <View style={{width:'100%',height:240,borderBottomWidth:1}}>
    //         <TextInput 
    //         style={{textAlign:'center',textAlignVertical:'center',color:col.textColorPrimary,backgroundColor:'transparent',textDecorationLine:'none'}}
    //         placeholder="NAME"
    //         underlineColor='transparent'
    //         defaultValue={item.item}
    //         placeholderTextColor={col.textColorPrimary}
    //         onChangeText={(name) => setName(name)} />
    //       </View>  : null
    //   } */}
    //     </View>
    //   )
    // }
 
      if(imageText != '' && check){
        itemList.filter(item => item == "")
        setCheck(false);
      }
    const renderHeader = (section, _, isActive) => {      
      return (
        <View style={{width:'100%',height:80,borderBottomWidth:1,flexDirection:'row'}}>
          <View style={{flex:3,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Image style={{width:30,height:30}} source={require('./Icons/edit.png')}></Image>
            </View>
            <View style={{flex:3,width:'100%',height:'100%',justifyContent:'center',alignItems:'flex-start'}} >
              <Text style={{fontSize:15 + textAddValue}} >{section}</Text>
            </View>
            
          </View>
          
        </View>
      );
    };
    const renderContent = (section, _, isActive) => {
      const addItem = () => {
        console.log(key)
        console.log(quantity)
        console.log(measure)
        console.log(selectedValue)
        const item_ = {key:key,expDate: expDate.valueOf() ,quantity:quantity,avgPrice:0,measure:measure + selectedValue}
        console.log(item_)
        dispath({type:'STORAGE_ADD',payload:item_})
        itemList.splice(itemList.indexOf(section),1)
        setActiveSections([])
      }
        
      return (
        <View style={{width:'100%',height:320,borderBottomWidth:1,justifyContent:'center',alignItems:'center'}}>
          <View style={{width:'100%',height:240,borderBottomWidth:1}}>
            <TextInput 
            style={{textAlign:'center',height:80,textAlignVertical:'center',color:col.textColorPrimary,backgroundColor:'transparent',textDecorationLine:'none'}}
           placeholder="NAME"
            placeholderTextColor={col.textColorPrimary}
            defaultValue={section}
            onChangeText={(name) => setKey(name)}
           />
            <TextInput
                    style={{textAlign:'center',height:80,textAlignVertical:'center',color:col.textColorPrimary,backgroundColor:'transparent',textDecorationLine:'none',fontSize:15 + textAddValue}}
                    placeholder="QUANTITY"
                    keyboardType={'numeric'}
                    placeholderTextColor={col.textColorPrimary}
                    onChangeText={(_quantity) => setQuantity(_quantity)}
                    />
                    
                    <View style={{textAlign:'center',height:80,textAlignVertical:'center',alignItems:'center',color:col.textColorPrimary,backgroundColor:'transparent',flexDirection:'row',borderBottomWidth:1}}>
                    <View style={{height:50,flex:1.2,justifyContent:'center',alignItems:'center',borderRightWidth:1}}>
                    <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: "100%",alignItem:"center",color:col.maintextColorPrimaryColor,borderRadius:15,flex:1}}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                    <Picker.Item label="Kg" value="Kg" />
                    <Picker.Item label="g" value="g" />
                    <Picker.Item label="L" value="L" />
                    <Picker.Item label="mL" value="mL" />
                    </Picker>
                    </View>
                    
                    <TextInput
                    style={{textAlign:'center',flex:3,height:80,textAlignVertical:'center',color:col.textColorPrimary,backgroundColor:'transparent',textDecorationLine:'none',fontSize:15 + textAddValue}}
                    placeholder="UNIT QUANTITY"
                    keyboardType={'numeric'}
                    underlineColor='transparent'
                    placeholderTextColor={col.textColorPrimary}
                    onChangeText={(measure) => setMeasure(measure)}
                    />
                    <View style={{justifyContent:'center',alignItems:'center',flex:1.2,borderLeftWidth:1}}>
                    <Pressable style={{backgroundColor:'transparent'}} onPress={ () => {setPicker(true)}}>
                        <Image style={{width:50,height:50}} source={require('./Icons/calender.png')}/>
                      </Pressable>
                    </View>
                  

                </View>
          </View>
          <View style={{width:'100%',height:80,borderBottomWidth:1,justifyContent:'center',alignItems:'center'}}>
             <Pressable style={{flex:1,justifyContent:'center',alignItems:'center'}} onPress={addItem}>
               <Text style={{fontSize:15 + textAddValue}}>ADD</Text>
             </Pressable>
           </View>       
          </View>
      );
    } 
    
    const[activeSections,setActiveSections] = useState([]);

    const setSections = (sections) => {
        setActiveSections(sections.includes(undefined) ? [] : sections)
        console.log(setKey(itemList[sections[0]]))
        console.log(itemList)
    };
    const onChange = (event,value) =>{
      setPicker(false);
      setExpDate(value);
      console.log(expDate)
      }
    return(
      <View style={{backgroundColor:col.secondaryColor,flex:1}}>
      <View style={{flex:9}}>
      <Accordion
      activeSections={activeSections}
      sections={itemList}
      touchableComponent={Pressable}
      expandMultiple={false}
      renderHeader={renderHeader}
      renderContent={renderContent}
      duration={400}
      onChange={setSections}
      renderAsFlatList={true}
    />
    </View>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Pressable onPress={() => {setWindow(false);setCheck(true)}}>
        <Text style={{fontSize:15 + textAddValue}}>BACK</Text>
      </Pressable>
    </View>
    { picker ?
    <DateTimePicker
      value={expDate}
      mode={'date'}
      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
      onChange={(event,value) => onChange(event,value)}
      is24Hour={true}/> : null}
    </View>
    )
  }

  return (
    <View style={{flex:1}}>
      { isLoading ? <LoadingScreen/> : showWindow ? <EditingList list={ itemList } /> : <SomeComponent>
    <View style={styles.screen}>
      <View style={{flex:3,alignItems:'center',justifyContent:'center',}}>
      {/* <View style={styles.imageContainer}>
        {
          pickedImagePath !== '' && <Image
            source={{ uri: require(pickedImagePath) }}
            style={styles.image}
          />
        }
      </View> */}
      </View>
      {/* <ScrollView style={{flex:1,top:10}}><Text style={{marginHorizontal:20,textAlign:'center'}}>{imageText}</Text></ScrollView> */}
      
      <View style={styles.buttonContainer}>
        <Pressable onPress={showImagePicker} style={{width:'40%',height:'40%',backgroundColor:col.textColorPrimary,justifyContent:'center',alignItems:'center',borderRadius:20}}>
          <Text style={{color:col.mainColor,fontSize:15 + textAddValue}}>SELECT IMAGE</Text>
        </Pressable>
        <Pressable onPress={openCamera} style={{width:'40%',height:'40%',backgroundColor:col.textColorPrimary,justifyContent:'center',alignItems:'center',borderRadius:20}}>
          <Text style={{color:col.mainColor,fontSize:15 + textAddValue}}>OPEN CAMERA</Text>
        </Pressable>
      </View>
    </View>
    </SomeComponent>}
    </View>
  );
}

export default RecepieScanScreen;

// Kindacode.com
// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  buttonContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  imageContainer: {

    width:'100%',
    height:'100%',
  },
  image: {flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }
});