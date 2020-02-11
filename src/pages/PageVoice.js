import React from 'react';
import {View, Text } from 'react-native';
import styles from './../assets/Styles';
import call from 'react-native-phone-call';
import {Button} from 'native-base';

export default class Signup extends React.Component {
    call = () => {
        //handler to make a call
        const args = {
          number: '+2348176036405',
          prompt: true,
        };
        call(args).catch(console.error);
    };

    render(){
        return(
            <View style={styles.container}>
                <Button onPress={this.call} >
                    <Text>Make A call</Text>
                </Button>
            </View>
        );
    }
}