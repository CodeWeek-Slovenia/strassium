import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, Image , FlatList, View, Pressable, TextInput, NumberInput, SafeAreaView, ActivityIndicator  } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { col } from './clr';
import SomeComponent from './CustomBackground';
import { ScrollView } from 'react-native-gesture-handler';
import LoadingScreen from './loadingScreen';
import { connect, useDispatch, useSelector } from 'react-redux';
import { removeShoppingItem } from './reduxComponents/removeShoppingItemAction';
import { bindActionCreators } from 'redux';
import { addShoppingItem } from './reduxComponents/addShoppingItemAction';


//const data=[{title:"Spagetti", imageUrl:"https://www.edamam.com/web-img/39d/39d10063c69dd8c817be2c7f44175379.jpg",ingredients:["egg", "flour","milk"]},{title:"Spagetti", imageUrl:"https://www.edamam.com/web-img/39d/39d10063c69dd8c817be2c7f44175379.jpg",ingredients:["egg", "flour","milk"]}];

const movieURL = "https://api.edamam.com/api/recipes/v2?type=public&q=flour&app_id=61b96bf9&app_key=a28fc7e347025174ec9cfe2ea3fcfc63&field=label&field=image&field=ingredientLines";


const apiKeyDO = '8162cc1aa99341c8bb96708d0ff5f4fb' //Lan - 8402c0dff7ec4569957fbab674327b94
const apiKeyLV = '8402c0dff7ec4569957fbab674327b94'
const apiKeyAV = '82ec60ccd79449139c0e59e3cadf7de2'
const apiKeyAJ = '863fc421667e434a879b149b97e9ea4e';
const apiKeyList = [apiKeyLV,apiKeyDO,apiKeyAV,apiKeyAJ]

class RecepiesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      isLoading:true,
      apiKeyIndex:0,
      ingredients:[],
      check:true,
      cehck1:true,
      itemList:[],
    };
  }
  
  componentDidMount(){
    const getData_ = async () => {
      
      let fridgeIngredients = ['sugar','flour','milk','salt','beef','yogurt','tequila'];
      console.log(fridgeIngredients)
    let tempString = ""
    let tempList = []
    let tempItem  = ''
    let counter = 1
    for (let i = 0; i < counter; i++) {
          tempItem = fridgeIngredients[Math.floor(Math.random() * fridgeIngredients.length)];
          if(!tempList.includes(tempItem)){
            tempString += ",+" + tempItem;
          }else{
            counter++
          }
    }
    console.log(tempString)

    const recipeURL = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=' + apiKeyList[this.state.apiKeyIndex] + '&ingredients=%27'+ tempString  +'&number=10'

    const getData1 = async () => {
        try {
            fetch(recipeURL).then((response) => {
              console.log(response.status)
              if(response.status == 200){
                response.json().then((data) => {
                  let recipeList=[];
                    for (let i = 0; i < 10; i++) {
                        var tempList = [];
        
                        for (let y = 0; y < data[i].usedIngredientCount; y++) {
                            tempList.push(
                                {
                                    "name" : data[i].usedIngredients[y].name,
                                    "amount" : data[i].usedIngredients[y].amount,
                                    "unit" : data[i].usedIngredients[y].unit
                                }
                            );
                        }
        
        
                        for (let y = 0; y < data[i].missedIngredientCount; y++) {
                            tempList.push(
                                {
                                    "name" : data[i].missedIngredients[y].name,
                                    "amount" : data[i].missedIngredients[y].amount,
                                    "unit" : data[i].missedIngredients[y].unit
                                }
                            );
        
                        }
        
                        recipeList.push(
                            {
                                "title" : data[i].title,
                                "img" : data[i].image,
                                "ing" : tempList
                            }
                        );
                  }
                  this.setState({data:recipeList,isLoading:false})
                })
              }else if(response.status == 402){
                this.setState({apiKeyIndex:this.state.apiKeyIndex + 1})
                getData_()
              }
              
            })
            
        } catch (err) {
          console.log(err)
        }

    }
    await getData1();
  }
  getData_();
  }

  render(){
    if(this.state.check){
      this.setState({ingredients:this.props.dataReducer.storageList,check:false});
    }
    
    
  const renderItem = (item) => {
      var ingredients = '';
      item.ing.forEach(element => {
          ingredients = ingredients + element.name + ' [ ' + element.amount + ' ' + element.unit + ' ]' + '\n'
      });

      const addToCart = async () =>{
        const setToL = ['cup','ounces','ounce','cups','c','tub','oz','pint']
        const setToG = ['tablespoon','tablespoons','teaspoon','teaspoons','tbsp','tps','tbs','tsp','t','pounds','pound','lb','lbs']
        let targetUnit = '';
        const callConversion = async (unitT,item_) =>{
          //console.log(item_)
          const url = 'https://api.spoonacular.com/recipes/convert?apiKey=' + apiKeyList[this.state.apiKeyIndex] + '&ingredientName=' + item_.name + '&sourceAmount=' + item_.amount + '&sourceUnit=' + item_.unit + '&targetUnit=' + unitT
          try {
            fetch(url).then((response) => {
              if(response.status == 200){
                response.json().then((data) => {
                  console.log(item_.name + ' [ ' + data.targetAmount + ' ' + data.targetUnit + ' ] ')
                  const item = {key:item_.name,expDate:-1,quantity:1,avgPrice:'not defined',measure: data.targetAmount + (unitT == 'liters' ? 'L' : 'g')};
                  this.props.addShoppingItem(item);
                })
              }else if(response.status == 402){
                this.setState({apiKeyIndex:this.state.apiKeyIndex + 1})
                callConversion(unitT);
              }
              
            })
            
        } catch (err) {
          console.log(err)
        }
        }
        result = await item.ing.forEach(async (ingredient) => {
          if(setToL.includes(ingredient.unit.toLowerCase())){
              targetUnit = 'liters'
              await callConversion(targetUnit,ingredient);
          }
          else if(setToG.includes(ingredient.unit.toLowerCase())){
            targetUnit = 'grams'
            await callConversion(targetUnit,ingredient);
          }else{
            console.log(ingredient.name + ' [ ' + ingredient.amount + ' ' + ingredient.unit + ' ] ')
            const item_ = {key:ingredient.name,expDate:-1,quantity:1,avgPrice:'not defined',measure: ingredient.amount + ingredient.unit};
            this.props.addShoppingItem(item_);
          }
        })
        
      } 

      return(
          <View style={styles.itemContainer}>
            <View style={{justifyContent:'flex-start',alignItems:'center'}}>
              <Image  style={styles.itemImageStyle} source={{uri: item.img}}/>
            </View>
            <View style={{flex:2,justifyContent:'flex-start',alignItems:'center',top:10}}>
                <Text style={[styles.itemTitleStyle,{fontSize:20 + this.props.propertyReducer.size}]}>{item.title.toString().toUpperCase()}</Text>
            </View>
            <View style={{flex:2,justifyContent:'flex-start',alignItems:'center',marginTop:10}}>
            <ScrollView >
                <Text style={[styles.itemIngredientsStyle,{fontSize: 13 + this.props.propertyReducer.size}]}>{ingredients.toUpperCase()}</Text>
                </ScrollView>
            </View>
            <View style={{flex:1,alignItems:'flex-end',flexDirection:'row',marginBottom:18}}>
                <Pressable style={{flex:1,justifyContent:'flex-start',marginTop:10,marginLeft:8}} onPress={addToCart}>
                    <Text style={{fontSize:13 + this.props.propertyReducer.size,color:col.secondaryColor}}>CART</Text>
                </Pressable>
                <Pressable style={{flex:1,alignItems:'flex-end',marginRight:8}}>
                    <Text style={{fontSize:13 + this.props.propertyReducer.size,color:col.mainColor}}>COLLECTION</Text>
                </Pressable>
            </View>
          </View>
      );
  }
    return (
      <SafeAreaView style={styles.container}>
      {this.state.isLoading ? ( <LoadingScreen/> ) : (<View style={styles.container}>
            <SomeComponent style={{flex:1}}>
                <FlatList horizontal data={this.state.data}
            renderItem={({item}) =>renderItem(item)}/>
            </SomeComponent>
        </View>)}
    </SafeAreaView>
      );
  }
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
      itemContainer:{
        height:"95%",
        width:350,
        alignItems: 'center',
        backgroundColor: col.textColorPrimary,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        shadowColor: 'gray',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 15,
        marginBottom: 20,
        marginLeft: 21,
        marginRight: 15,
      },
      itemTitleContainer:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      },
      itemImageContainer:{
          flex:1,
        alignItems:'center',
        justifyContent:'center',
      },
      itemImageStyle:{
          width:320,height:320,borderRadius:20,marginTop:18
      },
      ingredientsContainer:{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
      },
      itemIngredientsStyle:{
          color: '#D3D3D3',
          textAlign:'center',
      },
      itemTitleStyle:{
        
        color:'white',
        textAlign:'center',
      },
      imageStyle:{
        width:40,
        height:40,
      }
  });

  const mapStateToProps = (state) => {
    const { dataReducer,propertyReducer } = state
    return { dataReducer,propertyReducer }
  };
  const mapDispatchToProps = dispatch => (
    bindActionCreators({
      addShoppingItem:addShoppingItem
    }, dispatch)
  );
  
  export default connect(mapStateToProps, mapDispatchToProps)(RecepiesScreen);