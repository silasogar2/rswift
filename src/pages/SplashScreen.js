import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

class SplashScreen extends React.Component {

  constructor(props){
    super(props);
  }
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      // alert('complete');
      // this.setState({ isLoading: false });
      this.props.navigation.navigate('TakeOff');
    }
  }

  render() {
    return (
        <ImageBackground style={{width:'100%', flex:1, height:'100%'}} resizeMode='cover' 
            source={require('./../assets/img/welcome.png')}>
        </ImageBackground>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}

export default SplashScreen;