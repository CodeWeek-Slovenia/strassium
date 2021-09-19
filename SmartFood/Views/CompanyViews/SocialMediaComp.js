import React from 'react';
import { Text, StyleSheet, Image , FlatList, View, Pressable } from 'react-native';

const data = [
    {username:"Creativno d.o.o",location:"Ljubljana", description:"Toast",quantity:10,price:1},
    {username:"Domišlija d.o.o",location:"Celje",  description:"Listnato testo",quantity:100,price:2},
    {username:"Kuharji d.o.o.",location:"Maribor", description:"Sok",quantity:42,price:1},
    {username:"Menza Gorenje d.o.",location:"Velenje", description:"Pločevinke anananasa",quantity:56,price:3},
];


const SocialMediaCompScreen = ({navigation}) => {//adad
    
const onAddPress = () =>{
}
const pressableItem = (item) => {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.textContainer}> 
                    <Text style={styles.usernameStyle}>{item.username}</Text>
                    <Text style={styles.locationStyle}>{item.location}</Text>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                    <View style={{flex:1}}>
                    <View style={{flex:1,flexDirection:"row",alignItems:"flex-end",justifyContent:'flex-start'}}>
                        <Text style={styles.descriptionStyle}>{item.description}</Text>
                    </View>
                <View style={{flex:1,alignItems:"flex-start",justifyContent:"flex-start"}}>
                <Text style={styles.descriptionSubStyle}>{item.quantity} (Št. kosov)</Text>
                </View>
                    </View>
                    <View style={{width:'25%',heigh:'80%%',alignItems:'center',justifyContent:'center'}}>
                        <Text style={styles.priceStyle}>{item.price}€/kos</Text>
                    </View>
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
      backgroundColor: 'transparent',
    },
    headerContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:80,
    },
    profileContainer:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'center'
    },textContainer:{
        paddingHorizontal:10,
        paddingVertical:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30
    },
    postContainer:{
        flex:8,
        alignItems:'center',
        justifyContent:'center'
    },
    profileStyle:{
        height:60,
        width:60,
    },
    usernameStyle:{
        fontSize:20,
        color:"black"
    },
    postStyle:{
        height:400,
        width:"100%"
    },
    descriptionContainer:{
        height:80,
        flexDirection:'row',
        borderWidth:1,
        borderRadius:40,
        marginHorizontal:30,
        marginBottom:40,
        marginTop:-5
    },
    descriptionStyle:{
        fontSize:18,
        paddingHorizontal:10,
    },descriptionSubStyle:{
        fontSize:16,
        paddingHorizontal:15,
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
    locationStyle:{
        fontSize:16,
        left:5,
    },
    priceStyle:{
        fontSize:20,
        paddingLeft:2
    }
  });

export default SocialMediaCompScreen;