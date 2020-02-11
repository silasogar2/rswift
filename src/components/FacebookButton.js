import React from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';

const FacebookButton = props => {

    return(
        <TouchableOpacity onPress={props.check}>
            <View style={[Styles.absoluteView]}>
                <Text style={{color:'#fff', fontSize:20}}>{props.text}</Text>
            </View>
            <Image source={require('./../assets/img/fblogin.png')} />
        </TouchableOpacity>
    );
    
}

export default FacebookButton; 