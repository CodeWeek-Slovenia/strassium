import * as React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import { col } from './clr';



const EntranceScreen = ({navigation}) => {
    const onConsumerClick = () => {
        navigation.navigate("ConsumerLogin");
    };
    const onCompanyClick = () => {
      navigation.navigate("CompanyLogin");
  };
    return(
    <View style={styles.container}>
        <View style={styles.textContainer} >
            <Text style={styles.textStyle}>SMART FOOD</Text>
            <Image
                    style={{height:100,width:100}}
                    source={require('./Icons/pizza.png')}
                    />
        </View>
        <View style={styles.buttonContainer}>
            <Pressable style={styles.pressableStyle}  onPress={onConsumerClick}>
                <Text style={styles.bText}>Potrošnik</Text>
            </Pressable>
            <Pressable style={styles.pressableStyle} onPress={onCompanyClick}>
                <Text style={styles.bText}>Podjetje / Restavracija</Text>
            </Pressable>
        </View>
        <View style={styles.emptyView}/>
    </View>
    );
  };
const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor:col.clrMain,
  },
  textContainer: {
    flex:4,
    justifyContent:'flex-end',
    alignItems:'center',
    backgroundColor:'transparent',
  },
  textStyle:{
      color: col.clrText,
      fontFamily: "Black",
      fontSize: 40,
      bottom:10
  },
  buttonContainer: {
    flex:5,
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor:'transparent',
    marginTop: 80,
  },
  pressableStyle:{
    borderColor:'rgba(0,0,0,0.8)',
    borderWidth:0.5,
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    width:300,
    height:"30%",
    elevation:5,
    borderRadius:100,
  },
  emptyView:{
      flex:2
  },
  bText: {
    color: col.clrText,
    fontFamily: "Medium",
    fontSize: 20,
  }
});

export default EntranceScreen;