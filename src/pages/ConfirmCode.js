import React from 'react';
import {View, Text,ImageBackground, TouchableOpacity, Image } from 'react-native';
import Styles from './../assets/Styles';
import DefaultButton from './../components/DefaultButton';
import FacebookButton from './../components/FacebookButton';
import {Container,Content, Item, Icon, Input, Right, Label} from 'native-base';
import { Dialog } from 'react-native-simple-dialogs';
import CodeInput from 'react-native-confirmation-code-input';

export default class Login extends React.Component {
    state = {
        timer: null,
        counter: 0,
        showBtn:false
    };

    componentDidMount() {
        let timer = setInterval(this.tick, 1000);
        this.setState({timer});
        
        this.interval = setInterval(() => {
            this.setState({showBtn:true})
        }, 20000);
    }

    // componentWillUnmount() {
    //     this.clearInterval(this.state.timer);
        
    // }

    tick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    
   

    render(){
        return(
            <ImageBackground style={{width:'100%', flex:1, height:'100%'}} resizeMode='cover' 
                source={require('./../assets/img/welcome2.png')}>
                <View style={{flex:1}}>
                        
                    <View style={[Styles.container]}>
                        {/* // Text input box with icon aligned to the left */}
                        <Item style={{borderBottomWidth:0}}>
                        <CodeInput
                                ref="codeInputRef2"
                                keyboardType="numeric"
                                codeLength={5}
                                className='border-circle'
                                compareWithCode='12345'
                                autoFocus={false}
                                codeInputStyle={{ fontWeight: '800' }}
                                onFulfill={(isValid, code) => {this.props.navigation.navigate('Login')}}
                                />
                        </Item>
                        
                        {/* // Text input box with icon aligned to the right */}
                        {
                            !this.state.showBtn &&
                        
                        <Text style={{marginTop:30, color:'#fff'}}>You will be able to resend code in {this.state.counter}  </Text>
                        }
                        {
                            this.state.showBtn &&
                        
                        <TouchableOpacity onPress={() => { 
                            this.setState({showBtn:true}),
                            this.setState({timer: 0});
                            alert('Trying again')
                            } 
                            } >
                            <Text style={{marginTop:30, color:'#fff'}}> Resend Code</Text>
                        </TouchableOpacity>
                        
                        }

                    </View>

                </View>

                
            </ImageBackground>
        );
    }
}