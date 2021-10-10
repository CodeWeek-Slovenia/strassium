import { useEffect, useState } from 'react';
import { bindActionCreators, combineReducers } from 'redux';
import { accType } from '../Values/accType';
import fireBaseConfig from '../../Firebase/firebase'
import firebase from "firebase";
import { useSelector } from 'react-redux';

//const user = fireBaseConfig.auth().currentUser;


// var starCountRef = firebase.database().ref('users/' + user.uid);
// starCountRef.on('value', (snapshot) => {
// const data = snapshot.val();
// console.log('da one' + data.toString() + ' this is the one!!')
// });

const initState = {
    storageList: [],

    shoppingList:[]
};


const reducer = (state = initState, action) => {

    const {
        storageList,
        shoppingList,
      } = state;
    
    const emptyList=[];

    const user = fireBaseConfig.auth().currentUser;

    function setAll(storageList,shoppingList) {
        firebase.database().ref('userData/' + user.uid).set({
            storageList:storageList,
            shoppingList:shoppingList
        });
        console.log('stored!')
      }

      function setStorageList(storageList) {
        firebase.database().ref('userData/' + user.uid).set({
            storageList:storageList,
        });
        console.log('stored!')
      }

      function setShoppingList(shoppingList) {
        firebase.database().ref('userData/' + user.uid).set({
            shoppingList:shoppingList,
        });
        console.log('stored!')
      }

    const removeItem = (item) =>{
        shoppingList.splice(shoppingList.indexOf(item),1);
        let _temp = Object.assign({}, action.payload);
        let _check = false;
        storageList.forEach(item_ => {
        if(item_.key == _temp.key){
            storageList[storageList.indexOf(item_)].quantity = storageList[storageList.indexOf(item_)].quantity + _temp.quantity;
            _check = true;
            }
        });
        if(!_check){
            storageList.push(_temp);
        }
        setAll(storageList,shoppingList)
        return { storageList, shoppingList };
    }

    const removeItems = (item) =>{
        //shoppingList.splice(shoppingList.indexOf(item),1);
        let _temp = Object.assign({}, item);
        let _check = false;
        storageList.forEach(item_ => {
        if(item_.key == _temp.key){
            storageList[storageList.indexOf(item_)].quantity = storageList[storageList.indexOf(item_)].quantity + _temp.quantity;
            _check = true;
            }
        });
        if(!_check){
            storageList.push(_temp);
        }
    }

    const addItem = (item,list) =>{
        let _temp = Object.assign({}, item);
        let _check = false;
        console.log(_temp.key)
        list.forEach(item_ => {
        if(item_.key == _temp.key){
            list[list.indexOf(item_)].quantity = list[list.indexOf(item_)].quantity + _temp.quantity;
            _check = true;
            }
        });
        if(!_check){
            list.push(_temp);
        }
    }

    console.log(action.type);
    switch (action.type) {
        case 'STORAGE_UPDATE':
            try{
                
            console.log('///////////////////hhhh' + action.payload)
            if(!action.payload){
                return{storageList:[],shoppingList:shoppingList}
            }
            else{
                return{storageList:action.payload,shoppingList:shoppingList}
            }
            }
            catch(e){
                console.log(e)
            }
        case 'SHOPPING_UPDATE':
            if(!action.payload){
                return{storageList:storageList,shoppingList:[]}
            }
            else{
                return{storageList:storageList,shoppingList:action.payload}
            }
        case 'SHOPPING_REMOVE':

              return removeItem(action.payload);
        case 'SHOPPING_REMOVE_SINGLE':
            //console.log(action.payload)
            if(shoppingList[shoppingList.indexOf(action.payload)].quantity > 1){
                shoppingList[shoppingList.indexOf(action.payload)].quantity--;

            }else{
                shoppingList.splice(shoppingList.indexOf(action.payload),1);
            }
            let temp = Object.assign({}, action.payload);
            let check = false;
            if(storageList !== undefined && storageList.length != 0){
                storageList.forEach(item => {
                    if(item.key == temp.key){
                        storageList[storageList.indexOf(item)].quantity++;
                        check = true;
                    }
                });
            }
            
            if(!check){
                temp.quantity = 1
                storageList.push(temp);
            }

            setAll(storageList,shoppingList)
            return { storageList, shoppingList };
        case 'SHOPPING_REMOVE_ITEMS':
            shoppingList.forEach(item =>{ removeItems(item) })
            shoppingList.length = 0;
            setAll(storageList,shoppingList)
            return { storageList , shoppingList };
        case 'SHOPPING_ADD':
            addItem(action.payload,shoppingList);
            //setShoppingList(shoppingList)
            setAll(storageList,shoppingList)
            return { storageList , shoppingList };
        case 'SHOPPING_ADD_ALL':
            action.payload.forEach(item => {
                addItem(item,shoppingList);
            })
            setAll(storageList,shoppingList);
            return {storageList,shoppingList};
        case 'STORAGE_REMOVE':
            storageList.splice(storageList.indexOf(action.payload),1);
            //setStorageList(storageList)
            setAll(storageList,shoppingList)
            return { storageList, shoppingList };
        case 'STORAGE_REMOVE_SINGLE':
        
            if(storageList[storageList.indexOf(action.payload)].quantity > 1){
            storageList[storageList.indexOf(action.payload)].quantity--;
            }else{
                storageList.splice(storageList.indexOf(action.payload),1);
            }
            //setStorageList(storageList)
            setAll(storageList,shoppingList)
            return { storageList, shoppingList };
        case 'STORAGE_REMOVE_ITEMS':
            storageList.length = 0
            //setStorageList(storageList)
            setAll(storageList,shoppingList)
            return { storageList , shoppingList };
        case 'STORAGE_ADD':
            addItem(action.payload,storageList);
            setAll(storageList,shoppingList)
            //setStorageList(storageList)
            return { storageList , shoppingList };
        default:
          return state;
      }

};

const initState2 = {
    posts:[
        {username:"Hisense d.o.o",location:"Ljubljana", description:"Toast",quantity:90,price:1},
        {username:"Domišlija d.o.o",location:"Celje",  description:"Flour",quantity:100,price:2},
        {username:"Kuharji d.o.o.",location:"Maribor", description:"Juice",quantity:42,price:1},
        {username:"Gorenje d.o.o",location:"Velenje", description:"Cans of apricots",quantity:56,price:3},
        {username:"Strassium kuhna",location:"Velenje", description:"Pineapple can",quantity:100,price:1}
]
};

function reducer2(state = initState2, action) {



    const {
        posts
      } = state;
    
    const emptyList=[];

    switch (action.type) {
        case "ADD_POST":
            console.log(action.payload)
            posts.push(action.payload);

            return {posts};
        default:
          return state;
      }
};


const initState3 = {
    accType:accType.NONE,
    loadingState:false,
    user:'',
    size:0,
    dyslectic:true
};

function propertyReducer(state = initState3, action) {
    const {
        accType,
        loadingState,
        user,
        size,
        dyslectic
      } = state;
    
    switch (action.type) {
        case "ACC_TYPE_CHANGE":
            return {accType:action.payload,loadingState:loadingState,user:user,size:size,dyslectic:dyslectic}
        case "LOADING_SET":
            console.log(action.payload)
            return {accType:accType,loadingState:action.payload,user:user,size:size,dyslectic:dyslectic}
        case 'SET_USER':
            return {accType:accType,loadingState:loadingState,user:action.payload,size:size,dyslectic:dyslectic}
        case 'SET_SIZE':
            console.log('here')
            return {accType:accType,loadingState:loadingState,user:user,size:action.payload,dyslectic:dyslectic}
        case 'SET_SIZE_UP':
        console.log('here')
        return {accType:accType,loadingState:loadingState,user:user,size:size + 1,dyslectic:dyslectic}
        case 'SET_SIZE_DOWN':
        console.log('here')
        return {accType:accType,loadingState:loadingState,user:user,size:size - 1,dyslectic:dyslectic}
        case 'SET_DYSLECTIC':
        return {accType:accType,loadingState:loadingState,user:user,size:size,dyslectic:action.payload}
        default:
          return state;
      }
};



export default combineReducers({
    dataReducer: reducer,
    dataReducer2: reducer2,
    propertyReducer:propertyReducer
  });
