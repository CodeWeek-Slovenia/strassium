import * as React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { easeGradient } from 'react-native-easing-gradient'
import { col } from './clr';
//import CustomBackground from './CustomBackground';
import SomeComponent from './CustomBackground';
import { accTypeChange } from './reduxComponents/accTypeAction';
import { accType } from './Values/accType';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class EntranceScreen extends React.Component {
  render(){
    const onConsumerClick = () => {
        this.props.accTypeChange(accType.CONSUMER)
    };
    const onCompanyClick = () => {
      this.props.accTypeChange(accType.PROVIDER)
    }
    return(
    <View style={styles.container}>
      <SomeComponent
        style={styles.custom}>
          
            <View style={styles.textContainer} >
              
              <View style={{flex:1, alignItems:'flex-end',flexDirection:'row'}}>
              <Text style={styles.textStyle}>SMART</Text>
              <Text style={styles.textStyle1}> FOOD</Text>
              </View>
              <Image
                      style={{height:120,width:120,marginTop:20,opacity:0.9}}
                      source={require('./Icons/pizza9.png')}
                      />
          </View>
          <View style={styles.buttonContainer}>
              <Pressable style={styles.pressableStyle}  onPress={onConsumerClick}>
                  <Text style={styles.bText}>CONSUMER</Text>
              </Pressable>
              <Pressable style={styles.pressableStyle1} onPress={onCompanyClick}>
                  <Text style={styles.bText1}>PROVIDER</Text>
              </Pressable>
          </View>
          <View style={styles.emptyView}/>


          
          </SomeComponent>
          
    </View>
    
    );
}};
const styles = StyleSheet.create({
  container: {
      flex:1,
      zIndex:1,
      backgroundColor: "transparent"
  },
  custom: {
    position:"absolute",
  },
  textContainer: {
    flex:7,
    justifyContent:'flex-end',
    alignItems:'center',
    backgroundColor:'transparent',
  },
  textStyle:{
      color: '#484848',
      fontSize: 40,
      bottom:10,
  },textStyle1:{
    color: '#ffffff',
    fontSize: 40,
    bottom:10,
},
  buttonContainer: {
    flex:6,
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor:'transparent',
    marginTop: 80,
  },
  pressableStyle:{
    borderColor:'rgba(0,0,0,0.8)',
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    width:300,
    height:"30%",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    borderRadius:100,
    backgroundColor:'#ffffff'
  },
  pressableStyle1:{
    borderColor:'rgba(0,0,0,0.8)',
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    width:300,
    height:"30%",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    borderRadius:100,
    backgroundColor:'#484848'
  },
  emptyView:{
      flex:2
  },
  bText: {
    color: '#484848',
    fontSize: 23,
  },bText1: {
    color: '#ffffff',
    fontSize: 23,
  }
});

const mapStateToProps = (state) => {
  const { propertyReducer } = state
  return { propertyReducer }
};
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    accTypeChange:accTypeChange
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EntranceScreen);
