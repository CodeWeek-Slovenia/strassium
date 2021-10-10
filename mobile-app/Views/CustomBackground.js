import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { easeGradient } from 'react-native-easing-gradient'
import { col } from "./clr";
import { connect } from "react-redux";




class SomeComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  

  render() {
    const { colors, locations } = easeGradient({
      colorStops: {
        0: {
          color: col.secondaryColor,
        },
        1: {
          color: col.mainColor,
        },
      },
    })

    return (
      <View style={{flex:1,backgroundColor:col.dyslecticSec}}>
        { this.props.propertyReducer.dyslectic ? <LinearGradient colors={colors}
        locations={locations}
        start={{x: 0, y: 0.2}}
        end={{x: 0, y: 1}}
        style={{flex:1}}>
      {this.props.children}
      </LinearGradient> : this.props.children}
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  const { propertyReducer } = state
  return { propertyReducer }
};

export default connect(mapStateToProps)(SomeComponent);





/*
export default CustomBackground = ({content}) => { 
        
        const { colors, locations } = easeGradient({
            colorStops: {
              0: {
                color: col.secondaryColor,
              },
              1: {
                color: col.mainColor,
              },
            },
          })

        return (
        <View style={{flex:1}}> 
        <LinearGradient colors={colors}
        locations={locations}
        start={{x: 0, y: 0.2}}
        end={{x: 0, y: 1}}
        style={{flex:1}}>
          <content/>
        </LinearGradient>
        </View> 


      );
  }
  */