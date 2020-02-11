import React from 'react';
import {View, Text,ImageBackground, TouchableOpacity, Image } from 'react-native';
import Styles from './../assets/Styles';
import DefaultButton from './../components/DefaultButton';

export default class TakeOffPage extends React.Component {


    render(){
        return(
            <ImageBackground style={{width:'100%', flex:1, height:'100%'}} resizeMode='cover' 
                source={require('./../assets/img/welcome2.png')}>
                <View style={{flex:1}}>
                    <View style={[Styles.container]}>
                        <DefaultButton 
                            text='Login'
                            check={() => this.props.navigation.navigate('Login')} />

                        <DefaultButton 
                            text='Signup'
                            check={() => this.props.navigation.navigate('Signup')} />

                    </View>
                </View>
                
            </ImageBackground>
        );
    }
}