import React from 'react';
import {View, Text,ImageBackground, TouchableOpacity, Image } from 'react-native';
import Styles from './../assets/Styles';
import DefaultButton from './../components/DefaultButton';
import FacebookButton from './../components/FacebookButton';
import {Container,Content, Item, Icon, Input, Right, Label} from 'native-base';
import PhoneInput from 'react-native-phone-input';
export default class Signup extends React.Component {
    constructor() {
        super();
        
      }
    
    state = {
        mobile:''
    }

    render(){
        
        return(
            <ImageBackground style={{width:'100%', flex:1, height:'100%'}} resizeMode='cover' 
                source={require('./../assets/img/welcome2.png')}>
                <View style={{flex:1}}>
                        
                    <View style={[Styles.container]}>
                        {/* // Text input box with icon aligned to the left */}
                        <Item>
                            <Icon 
                                active
                                style={{ color:'#fff', fontSize:24}} 
                                name='person-add' 
                            />
                            <Input
                                style={{ color:'#fff', fontSize:17}}
                                textStyle={{ color: "#fff"}}
                                placeholderTextColor = "#fff" 
                                placeholder='Fullname'
                            />
                        </Item>
                        <Item>
                            <Icon 
                                active
                                style={{ color:'#fff', fontSize:24}} 
                                name='mail' 
                            />
                            <Input
                                style={{ color:'#fff',  fontSize:17}}
                                textStyle={{ color: "#fff" }}
                                placeholderTextColor = "#fff" 
                                placeholder='Email'
                            />
                        </Item>
                        <Item style={{marginTop:10, paddingBottom:8, paddingTop:3}}> 
                        <PhoneInput 
                            
                            allowZeroAfterCountryCode={true}
                            textProps={{placeholder: '345 567 90989', placeholderTextColor:"#fff"}}
                            pickerItemStyle={{fontSize: 17}}
                            textStyle={{color:'#fff',padding:0, margin:0, fontSize:16}}
                            value={this.state.mobile} 
                        />
                        </Item>
                        <Item > 
                            <Icon 
                                style={{color:'#fff'}} 
                                active 
                                name='lock' 
                            />
                            <Input
                                style={{ color:'#fff', fontSize:17}}
                                placeholderTextColor = "#fff"
                                placeholder='Password'
                            />
                        </Item>
                        <Item > 
                            <Icon 
                                style={{color:'#fff'}} 
                                active 
                                name='lock' 
                            />
                            <Input
                                style={{ color:'#fff', fontSize:17}}
                                placeholderTextColor = "#fff"
                                placeholder='Confirm Password'
                            />
                            
                        </Item>
                        {/* // Text input box with icon aligned to the right */}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{marginTop:15, color:'#fff'}}>I Already Have an Rswift Account </Text>
                        </TouchableOpacity>
                       
                        <DefaultButton 
                            text='Signup'
                            check={() => {
                                alert(this.state.mobile) 
                                //this.props.navigation.navigate('ConfirmCode') 
                                }} /> 

                           
                        {/* <FacebookButton 
                            text='Signup with Facebook'
                            check={() => this.props.navigation.navigate('Signup')} /> */}

                    </View>
                </View>
                
            </ImageBackground>
        );
    }
}