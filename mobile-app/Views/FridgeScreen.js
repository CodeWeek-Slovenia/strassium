import { StatusBar } from 'expo-status-bar';
import React,{useRef} from 'react';
import { Image, Platform, Pressable, StyleSheet, Text, Animated, FlatList, View, Dimensions } from 'react-native';
import Swipeable from 'react-native-swipeable';
import { col } from './clr';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {removeStorageItem} from './reduxComponents/removeStorageItemAction'
import {removeStorageSingleItem} from './reduxComponents/removeStorageItemSingleAction'
import {removeStorageItems} from './reduxComponents/removeStorageItems'
import SomeComponent from './CustomBackground';
import { TextInput } from 'react-native-gesture-handler';
import { addStorageItem } from './reduxComponents/addStorageItemAction';
import { storageUpdate } from './reduxComponents/storageUpdateAction';
import firebase from 'firebase';
import firebase_ from '../Firebase/firebase';
import LoadingScreen from './loadingScreen';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import {getSize} from './textSize';
import { setSize } from './reduxComponents/setSize';

//const textAddValue = 0;
const STATUS_BAR_HEIGHT = Platform.select({ios:20, android:24});

class StorageListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      y: 0,
      check: 'none',
      loading:true,
      appear:true,
      appearAdd:false,
      key:'none',
      expDate:'none',
      quantity:'none',
      measure:'none',
      avgPrice:1,
      showPicker:false,
      date:new Date(Date.now()),
      selectedOptions:'Kg',
    };
  }
  componentDidMount(){
    this.setState({loading:true})
    const user = firebase_.auth().currentUser;
    this.setState({})
    firebase.database().ref('userData/' + user.uid).on('value', (snapshot) => {
      const rec = snapshot.val();
      console.log('rec: ' + rec)
      setTimeout(() => {
        try{
        if(rec === null){
          this.props.storageUpdate([]);
          console.log('////////////////////////////////////////////////////////////////')
        }else{
          this.props.storageUpdate( rec ? rec.storageList ? rec.storageList : [] : []);
        }
        }
        catch (e){
          console.log(e)
        }
      }
        )
    });
    this.setState({loading:false})
  }
  render() {
    const addAllPress = () => {
      this.props.removeStorageItems('')
    }
  const listElement = ({item}) =>{

    const onClick = () => {
      this.props.removeStorageSingleItem(item)
    }

    const onSwipe = () => {
      this.props.removeStorageItem(item)
    }

    const rightContent = <View style={{justifyContent:'center',alignItems:'flex-start',flex:1}}>
        <Text style={{fontSize:16 + this.props.propertyReducer.size}}>DELETE</Text>
          </View>
       ;
      ;

    return(
      <Swipeable rightContent={rightContent} rightActionActivationDistance={Dimensions.get("window").width / 4} onRightActionRelease={onSwipe} >
        <View style={styles.mainCardView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>

          <View style={{marginLeft: 12, justifyContent:'center', flex:1}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text
              style={{
                fontSize: 16+ this.props.propertyReducer.size,
                color: 'white',
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}>
              {item.key} 
            </Text>
            <Text style={{
                  color: col.subTextColor,
                  fontSize: 14 + this.props.propertyReducer.size,
                }}>  [ {item.measure} ]</Text>
            </View>
              <Text style={{
                  color: col.secondaryColor,
                  fontSize: 13 + this.props.propertyReducer.size,
                  marginTop:2
                }}>{ item.expDate > 0 ?Math.ceil((item.expDate - new Date(Date.now()).valueOf()) / 86400000) : null}{ item.expDate > 0 ? ' days left' : 'Days left not defined' }</Text>
          </View>
          <View style={{flex:1, flexDirection:'row'}}>
            <View style={{flex:1, justifyContent:'center',alignItems:'flex-end'}}>
              
            </View>
          <Pressable
            style={{
              flex:1,
              marginLeft: -30,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }} onPress={onClick}>
            <Text style={{color: col.mainColor,fontSize:16 + this.props.propertyReducer.size,fontWeight:'bold',textAlign:'center'}}>
              {item.quantity}
            </Text>
          </Pressable>
          </View>
          </View>
        </View>
      </Swipeable>
    );
  }
  const emptyListRender = () =>{
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center',alignContent:'center'}}>
          <Text style={{fontSize:20 + this.props.propertyReducer.size,alignSelf:'center',color:col.textColorPrimary}}>YOUR LIST IS EMPTY</Text>
      </View>
    );
  }
  const addItem = () =>{
    if(this.state.key != 'none' && this.state.quantity != 'none' && this.state.measure != 'none' ){
      const item_ = {key:this.state.key,expDate: this.state.date.valueOf() ,quantity:this.state.quantity,avgPrice:2.5,measure:this.state.measure + this.state.selectedOptions}
      console.log(item_)
      this.props.addStorageItem(item_);
      this.setState({appearAdd:false});
      this.setState({key:'none',quantity:'none',measure:'none',expDate:'none'})
    }else{
      alert('All the fields are mandatory!')
    }
  }
  const onPickerChange = (value) =>{
    this.setState({date:value,showPicker:false})
  }
    return (
        this.state.loading ? <LoadingScreen/> :
        <View style={styles.mainContainer}>            
          <SomeComponent style={styles.listContainer}>
          { this.state.appearAdd == true ? 
              <View style={{flex:14,backgroundColor:'transparent',justifyContent:'space-around',alignItems:'center',alignContent:'center'}}>
                <Pressable style={{flex:0.5,justifyContent:'flex-end'}} onPress={() => this.setState({appearAdd:false})}>
                    <Text style={{fontSize:15+ this.props.propertyReducer.size}}>BACK</Text>
                  </Pressable>
                <View style={{flex:9,width:'100%',justifyContent:'space-around',alignItems:'center',alignContent:'center'}}>
                  <Text style={{fontSize:24 + this.props.propertyReducer.size,color:col.textColorPrimary}}>ADD ITEM</Text>
                <TextInput
                    style={{fontSize:15+ this.props.propertyReducer.size,height:55,width:'85%',textAlign:'center',textAlignVertical:'center',borderRadius:25,borderWidth:0.5,color:col.mainColor,backgroundColor:col.textColorPrimary}}
                    placeholder="NAME"
                    placeholderTextColor={col.mainColor}
                    onChangeText={(_key) => this.setState({key:_key}) }
                    />
                    <TextInput
                    style={{fontSize:15+ this.props.propertyReducer.size,height:55,width:'85%',textAlign:'center',textAlignVertical:'center',borderRadius:25,borderWidth:0.5,color:col.mainColor,backgroundColor:col.textColorPrimary}}
                    placeholder="QUANTITY"
                    keyboardType={'numeric'}
                    placeholderTextColor={col.mainColor}
                    onChangeText={(_quantity) => this.setState({quantity:_quantity})}
                    />
                    <TextInput
                    style={{fontSize:15+ this.props.propertyReducer.size,height:55,width:'85%',textAlign:'center',textAlignVertical:'center',borderRadius:25,borderWidth:0.5,color:col.mainColor,backgroundColor:col.textColorPrimary}}
                    placeholder="UNIT QUANTITY"
                    keyboardType={'numeric'}
                    placeholderTextColor={col.mainColor}
                    onChangeText={(_measure) => this.setState({measure:_measure})}
                    />
                    <View style={{height:50,width:'25%',textAlign:'center',textAlignVertical:'center',borderRadius:25,borderWidth:0.5,color:col.mainColor,backgroundColor:col.textColorPrimary}}>
                    <Picker
                selectedValue={this.state.selectedOptions}
                style={{ height: 50, width: "100%",alignItem:"center",color:col.mainColor,borderRadius:15,fontSize: 15 + this.props.propertyReducer.size}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({selectedOptions:itemValue})
                }>
                <Picker.Item style={{fontSize:15 + this.props.propertyReducer.size}} label="Kg" value="Kg" />
                <Picker.Item style={{fontSize:15 + this.props.propertyReducer.size}} label="g" value="g" />
                <Picker.Item style={{fontSize:15 + this.props.propertyReducer.size}} label="L" value="L" />
                <Picker.Item style={{fontSize:15 + this.props.propertyReducer.size}} label="mL" value="mL" />
                </Picker>
                </View>
                    { this.state.showPicker ?
                    <DateTimePicker
                      value={this.state.date}
                      mode={'date'}
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      onChange={(event,value) => onPickerChange(value)}
                      is24Hour={true}/> : null}
                    {/* <TextInput
                    style={{height:55,width:'85%',textAlign:'center',textAlignVertical:'center',borderRadius:25,borderWidth:0.5,color:col.mainColor,backgroundColor:col.textColorPrimary}}
                    placeholder="EXP. DATE"
                    placeholderTextColor={col.mainColor}
                    onChangeText={(_expDate) => this.setState({expDate:_expDate})}
                    
                    /> */}
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Pressable onPress={ () => {this.setState({showPicker:true})}}>
                        <Image style={{width:50,height:50}} source={require('./Icons/calender.png')}/>
                      </Pressable>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Pressable style={{width:50,height:50,borderColor:col.textColorPrimary,justifyContent:'center',alignItems:'center'}} onPress={addItem}>
                        <Text style={{fontSize:18 + this.props.propertyReducer.size,color:col.textColorPrimary}}>ADD</Text>
                    </Pressable>
                    </View>
                    
              </View> :
          <View style={{flex:16.5}}>
            <View style={{flex:1.5}}>
              <View style={{flex:1,backgroundColor:col.textColorPrimary,borderBottomColor:col.secondaryColor,borderTopWidth:0.5,elevation:4,borderRadius:15,marginLeft:5,marginRight:5,marginTop:5}}>
            { typeof this.props.dataReducer.storageList !== 'undefined' ?
              this.props.dataReducer.storageList != 0 ? 
                  <View style={{flex:1.2,alignItems:'center',flexDirection:'row'}}>
                      <Pressable style={{flex:1,justifyContent:'flex-start',marginLeft:10}} onPress={addAllPress}>
                          <Text style={{fontSize:13+ this.props.propertyReducer.size,color:col.mainColor}}>MOVE ALL</Text>
                      </Pressable>
                      <Pressable style={{flex:1,alignItems:'flex-end',marginRight:10}} >
                          <Text style={{fontSize:13+ this.props.propertyReducer.size,color:col.secondaryColor}} onPress={() => this.setState({appearAdd:true})}>ADD ITEM</Text>
                      </Pressable>
                  </View> : 
                  <View style={{flex:1,alignItems:'center',flexDirection:'row'}} >
                  <Pressable style={{flex:1,alignItems:'center'}} onPress={() => this.setState({appearAdd:true})}>
                      <Text style={{fontSize:13+ this.props.propertyReducer.size,color:col.secondaryColor}}>ADD ITEM</Text>
                  </Pressable>
              </View> : 
              <View style={{flex:1,alignItems:'center',flexDirection:'row'}} >
                      <Pressable style={{flex:1,alignItems:'center'}} onPress={() => this.setState({appearAdd:true})}>
                          <Text style={{fontSize:13+ this.props.propertyReducer.size,color:col.secondaryColor}}>ADD ITEM</Text>
                      </Pressable>
                  </View>
                }
                </View>
              </View>
              <View style={{flex:15}}>
                {typeof this.props.dataReducer.storageList !== 'undefined' ?
              this.props.dataReducer.storageList != 0 ?
                <View style={{flex:14}}>
                  <FlatList
                    data={this.props.dataReducer.storageList}
                    extraData={this.props.dataReducer}
                    renderItem={({item}) => listElement({item})}
                  />
                </View>:emptyListRender():emptyListRender() }
              </View>
            </View>}
      </SomeComponent>
        </View>
  );
          }
  
}

const styles = StyleSheet.create({
 mainContainer:{
    flex:8,
  },
  listContainer: {
    flex: 8,
    justifyContent:'center',
    //backgroundColor:col.mainColor
   },
  mainCardView: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: col.textColorPrimary,
    borderRadius: 15,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 20,
    marginRight: 20,
  },
  subCardView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  const { dataReducer,propertyReducer } = state
  return { dataReducer,propertyReducer }
};
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    removeStorageItem: removeStorageItem,
    removeStorageSingleItem: removeStorageSingleItem,
    removeStorageItems: removeStorageItems,
    addStorageItem: addStorageItem,
    storageUpdate:storageUpdate,
    setSize:setSize
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(StorageListScreen);