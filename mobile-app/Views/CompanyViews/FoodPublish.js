import React, { Component } from 'react';
import { Text, StyleSheet, Image , FlatList, View, Pressable, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import MainBackground from '../CustomBackground'
import {col} from '../clr'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost } from '../reduxComponents/addPost';



class FoodFeedScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          username:'none',
          location:'none',
          description:'none',
          quantity:'none',
          price:'none',
          selectedOptions:'none'
        };
      }
    render(){
        const addPost = () =>{
            const post = {username:this.state.username,location:this.state.location,description:this.state.description,quantity:this.state.quantity,price:this.state.price};
            console.log(post)
            this.props.addPost(post);
        }
    
    return (
        <MainBackground style={styles.container}>
            <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                <Text style={{fontSize:24 + this.props.propertyReducer.size,color:col.mainColor}}>ADD FOOD POST</Text>
            </View>
            <View style={{flex:8,alignItems:'center',justifyContent:'space-evenly'}}>
            <View style={styles.textInputContainer}>
            <TextInput
                style={[styles.textInputStyle,{color:col.mainColor,textAlign:'center',fontSize:15 + this.props.propertyReducer.size}]}
                placeholder="Product name"
                placeholderTextColor={col.mainColor}
                onChangeText={(description) => this.setState({description:description}) }
                />
                

            </View>
            
            <View style={styles.textInputContainer}>
            <TextInput
                style={[styles.textInputStyle,{color:col.mainColor,textAlign:'center',fontSize:15 + this.props.propertyReducer.size}]}
                placeholder="Quantity"
                keyboardType={'numeric'}
                placeholderTextColor={col.mainColor}
                onChangeText={(quantity) => this.setState({quantity:quantity}) }
                />
                

            </View>
            <View style={styles.textInputContainer}>
            <TextInput
                style={[styles.textInputStyle,{color:col.mainColor,textAlign:'center',fontSize:15 + this.props.propertyReducer.size}]}
                placeholder="Price(€)"
                keyboardType={'numeric'}
                placeholderTextColor={col.mainColor}
                onChangeText={(price) => this.setState({price:price}) }
                />
                

            </View>
            <View style={styles.textInputContainer}>
            <Picker
                selectedValue={this.state.selectedOptions}
                style={{ height: 50, width: "100%",alignItem:"center",color:col.mainColor,borderRadius:15 }}//a
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({selectedOptions:itemValue})
                }>
                <Picker.Item style={{fontSize:15 + this.props.propertyReducer.size}} label="For consumers" value="potrosniki" />
                <Picker.Item style={{fontSize:15 + this.props.propertyReducer.size}} label="For animals" value="zivali" />
                <Picker.Item style={{fontSize:15 + this.props.propertyReducer.size}} label="For providers" value="ponudniki" />
                </Picker>
            </View>
            </View>
            <View style={{flex:2, alignItems:'center',justifyContent:'center',bottom:30}}>
                <Pressable style={styles.loginButtonStyle} onPress={addPost}>
                    <Text style={{color:col.secondaryColor,fontSize:20 + this.props.propertyReducer.size}} >POST</Text>
                </Pressable>
            </View>
        </MainBackground>
      );
    }
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
    },imageContainer: {
        height:"100%",
        width:"100%"
      },
      TextInputStyle:{
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: 200,
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        textAlign:'center',
        color:col.mainColor
      },textInputContainer:{
          height:60,
          width:"80%",
          justifyContent:"space-evenly",
          alignItems:"center",backgroundColor:col.textColorPrimary,
          borderRadius:20,
      },
      loginButtonStyle:{
          height:65,
          width:"50%",
          alignItems:'center',
          justifyContent:'center',
          
      }
  });
  
  
const mapStateToProps = (state) => {
    const { dataReducer2,propertyReducer } = state
    return { dataReducer2,propertyReducer }
  };
  const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addPost:addPost
    }, dispatch)
  );
  
  export default connect(mapStateToProps,mapDispatchToProps)(FoodFeedScreen);