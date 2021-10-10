import React from 'react'
import { Dimensions, Button, ImageBackground } from 'react-native'
import { ImageManipulator } from 'expo-image-crop'
 
export default class App extends React.Component {
  
  state = {
    isVisible: false,
    uri: 'https://i.pinimg.com/originals/39/42/a1/3942a180299d5b9587c2aa8e09d91ecf.jpg',
    uri_:''
}
  onToggleModal = () => {
      const { isVisible } = this.state
      this.setState({uri_:'./Icons/test.png'})
      this.setState({ isVisible: !isVisible })
  }
  render() {
      const { uri, url_, isVisible } = this.state
      const { width, height } = Dimensions.get('window')
      return (
          <ImageBackground
              resizeMode="contain"
              style={{
                  justifyContent: 'center', padding: 20, alignItems: 'center', height, width, backgroundColor: 'black',
              }}
              source={{ uri }}
          >
              <Button title="Open Image Editor" onPress={() => this.setState({ isVisible: true })} />
              <ImageManipulator
                  
                  photo={ url_ }
                  isVisible={isVisible}
                  onPictureChoosed={({ uri: uriM }) => this.setState({ uri: uriM })}
                  onToggleModal={this.onToggleModal}
              />
          </ImageBackground>
      )
  }
}