import React from 'react';
import { Text, StyleSheet, Image , FlatList, View, Pressable } from 'react-native';
import { col } from './clr';

const data = [
    {username:"Jernej Sadl", profilePicture: require('./Icons/jernej_sadl.png'),postPicture:require('./Icons/golaz.png'), description:"Odličen mislinski golaž!"},
    {username:"Lan Vrckovnik", profilePicture:require("./Icons/lan_vrckovnik.png"),postPicture:require('./Icons/spageti.png'), description:"Super okusno"},
    {username:"Aljaz Sovic", profilePicture:require('./Icons/aljaz_sovic.png'),postPicture:require('./Icons/dunajski.png') ,description:"Nedeljsko kosilo"},
    {username:"Aljaz Vetrih", profilePicture:require('./Icons/aljaz_vetrih.png'),postPicture:require('./Icons/pica.png'), description:"Hrustljava kot še nikoli!"},
];


const SocialMediaScreen = ({navigation}) => {//adad
    
const onAddPress = () =>{
}
const pressableItem = (item) => {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.profileContainer}>
                    <Image source={item.profilePicture} style={styles.profileStyle} ></Image>
                </View>
                <View style={styles.textContainer}> 
                    <Text style={styles.usernameStyle}>{item.username}</Text>
                </View>
            </View>
            <View style={styles.postContainer}>
                <Image source={item.postPicture} style={styles.postStyle}></Image>
            </View>
            <View style={styles.toolBarContainer}>
                <View style={styles.likeContainer}>
                    <Image source={require("./Icons/like.png")} style={styles.iconStyle}/>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionStyle}>{item.description}</Text>
                </View>
                <Pressable style={styles.saveContainer} onPress={onAddPress}>
                <Image source={require("./Icons/add.png")} style={styles.iconStyle}/>
            </Pressable>
            </View>
        </View>

    );
}
    return (
        <FlatList
          data={data}
            renderItem={({item}) =>pressableItem(item)}
          />
      );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: col.clrMain,
      marginBottom:40
    },
    headerContainer:{
        flex:1,
        flexDirection:'row',
        height:80,
    },
    profileContainer:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'center',
    
    },textContainer:{
        flex:3,
        alignItems:'flex-start',
        justifyContent:'center',
        right:30,
    },
    postContainer:{
        flex:8,
        alignItems:'center',
        justifyContent:'center',
    },
    profileStyle:{
        height:60,
        width:60,
        borderRadius: 30
    },
    usernameStyle:{
        fontSize:16,
        color:"black",
        borderRadius:20,
        borderWidth:1,
        paddingHorizontal:5,
        paddingVertical:3
    },
    postStyle:{
        height:400,
        width:"100%"
    },
    descriptionContainer:{
        width:"100%",
        alignItems:'center',
        justifyContent:'center',
    },
    descriptionStyle:{
        fontSize:16,
        paddingHorizontal:10,
        textAlign:'center',
        borderWidth:1,
        borderRadius:15
    },
    toolBarContainer:{
        height: 50,
        width:"100%",
        flexDirection:'row',
        paddingHorizontal:5
    },
    likeContainer:{
        flex:1,
        justifyContent:'center'
    },
    saveContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:"flex-end",
    },
    iconStyle:{
        height:40,
        width:40
    }
  });

export default SocialMediaScreen;