import React from 'react';
import { Text, StyleSheet, Image , FlatList, View, Pressable } from 'react-native';
import MainBackground from '../CustomBackground'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {col} from './clr'


class FoodFeedScreen extends React.Component {
    render(){
        const onAddPress = () =>{
          
        }
        const pressableItem = (item) => {
        return(
            <Pressable style={styles.mainCardView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>

              <View style={{marginLeft: 12, justifyContent:'center', flex:1}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text
                  style={{
                    fontSize: 16 + this.props.propertyReducer.size,
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  {item.description} 
                </Text>
                <Text style={{
                      color: col.subTextColor,
                      fontSize: 14 + this.props.propertyReducer.size,
                    }}>  [ {item.quantity} ]</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:2}}>
                <Text
                  style={{
                    fontSize: 13 + this.props.propertyReducer.size,
                    color: col.secondaryColor,
                    
                  }}>
                  {item.username} 
                </Text>
                <Text style={{
                      color: col.subTextColor,
                      fontSize: 13 + this.props.propertyReducer.size,
                    }}>  [ {item.location} ]</Text>
                </View>
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
                }}>
                <Text style={{color: col.mainColor,fontSize:16 + this.props.propertyReducer.size ,fontWeight:'bold',textAlign:'center'}}>
                  {item.price}€ / piece
                </Text>
              </Pressable>
              </View>
              </View>
            </Pressable>
        );
    }
    return (
        <MainBackground>
        <FlatList
          data={this.props.dataReducer2.posts}
            renderItem={({item}) =>pressableItem(item)}
          />
        </MainBackground>
      );
};
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
  const { dataReducer2, propertyReducer } = state
  return { dataReducer2, propertyReducer }
};

export default connect(mapStateToProps)(FoodFeedScreen);