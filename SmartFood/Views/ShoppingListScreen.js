import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Platform, Pressable, StyleSheet, Text, TouchableHighlight, FlatList, View, LogBox } from 'react-native';
import { col } from './clr';

const STATUS_BAR_HEIGHT = Platform.select({ios:20, android:24});



const onClick = () => {
  
}



const ShoppingListScreen = ({navigation,route}) => {
    const data1 = route.params.list;
    const data = data1;
    return (
      <View style={styles.mainContainer}>
      <View style={styles.legendcontainer}>
          <View style={{justifyContent:"center",alignItems:'center'}}>
          <Text style={styles.nameStyle}>Ime</Text>
        </View>
        <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}>
          <Text style={styles.expStyle}>Količina</Text>
        </View>
        </View>
        
      <View style={styles.listContainer}>{typeof data !== 'undefined' ?
          data.length != 0 ? <FlatList
      data={data}
        renderItem={({item}) =><Pressable style={{flexDirection:"row"}} onPress={onClick}><View style={{justifyContent:'center'}}>
          <Text style={styles.item}>{item}</Text>
        </View>
        <View style={[styles.itemQuaContainer,{alignItems:"flex-end"}]}>
          <Text style={styles.itemQua}>{data.filter(x => x==item).length}</Text>
        </View>
        </Pressable>}
      />
      : <Text style={styles.notifStyle}>Uh, oh Vaš seznam je prazen :(</Text> : <Text style={styles.notifStyle}>Uh, oh Vaš seznam je prazen :(</Text> }
  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  topBarContainer:{
      flex:1,
      backgroundColor:"transparent",
      justifyContent:"center",
      alignItems:"center",
      borderBottomWidth:1
 },
 pressableStyle:{
     flex:1,
    alignItems:"center",
    justifyContent:"center",
    borderColor:"gray",
    borderWidth:1,
 },

 mainContainer:{
    flex:8,
  },
  titleStyle: {
    fontSize: 22,
    textAlign:'center',
    bottom:15
  },listContainer: {
    flex: 8,
    alignContent:"flex-start",
    
   },
   itemQuaContainer:{
     flex:1
   },
   item: {
     marginTop: 10,
     paddingHorizontal:10,
     fontSize: 16,
     paddingBottom:2,borderWidth:1,borderRadius:15,paddingHorizontal:6,marginLeft:6
   },
   legendcontainer:{backgroundColor:col.clrMain,flex:1,flexDirection:"row",justifyContent:"center", borderBottomWidth:1},
   nameStyle:{
     fontSize:20,borderWidth:1,borderRadius:15,paddingHorizontal:8,alignSelf:"flex-start",marginLeft:6
   },nameSubStyle:{
    fontSize:16,paddingLeft:10,borderRadius:15,paddingHorizontal:6, marginTop:5
  },
   expStyle:{
    fontSize:20,borderWidth:1,borderRadius:15,paddingHorizontal:10
  },
  notifStyle:{
    fontSize:16,
    top:30,
    alignSelf:'center'
  },
  itemSub:{
    paddingHorizontal: 10,
     fontSize: 14,marginTop:5
  },itemQua:{marginTop: 10,
    paddingHorizontal:10,
    fontSize: 16,
    paddingBottom:2,borderWidth:1,borderRadius:15,paddingHorizontal:6,
  }
});
export default ShoppingListScreen