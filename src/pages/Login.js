import React from 'react';
import {View, Text,ImageBackground, TouchableOpacity, Image } from 'react-native';
import Styles from './../assets/Styles';
import DefaultButton from './../components/DefaultButton';
import FacebookButton from './../components/FacebookButton';
import {Container,Content, Item, Icon, Input, Right, Label} from 'native-base';
import { Dialog } from 'react-native-simple-dialogs';
export default class Login extends React.Component {
    
    state = {
        dialogVisible:false
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
                                style={{ color:'#fff'}} 
                                name='mail' 
                            />
                            <Input
                                style={{ color:'#fff'}}
                                textStyle={{ color: "#fff" }}
                                placeholderTextColor = "#fff" 
                                placeholder='Email'
                            />
                        </Item>
                        <Item > 
                            <Icon 
                                style={{color:'#fff'}} 
                                active 
                                name='lock' 
                            />
                            <Input
                                style={{ color:'#fff'}}
                                placeholderTextColor = "#fff"
                                placeholder='Password'
                                secureTextEntry={true}
                            />
                            <Right>
                                <TouchableOpacity 
                                    onPress={() =>this.setState({dialogVisible:true})}>
                                    <Text style={{ color:'#fff'}}>Forgot Password?</Text>
                                </TouchableOpacity>
                            </Right>
                        </Item>
                        {/* // Text input box with icon aligned to the right */}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                            <Text style={{marginTop:15, color:'#fff'}}>I Dont have an Rswift account Yet? </Text>
                        </TouchableOpacity>
                       
                        <DefaultButton 
                            text='Login'
                            check={() => this.props.navigation.navigate('AppNavigator')} />

                        {/* <FacebookButton 
                            text='Login with Facebook'
                            check={() => this.props.navigation.navigate('Signup')} /> */}

                    </View>

                </View>

                <Dialog
                    visible={this.state.dialogVisible}
                    title="Reset Password"
                    onTouchOutside={() => this.setState({dialogVisible: false})} >
                    <View>
                    <Item>
                        <Icon 
                            active
                            style={{ color:'#7F0327'}} 
                            name='mail' 
                        />
                        <Input
                            style={{ color:'#7F0327', borderColor:'#7F0327', borderBottomWidth: 1,
                        }}
                           
                            textStyle={{ color: "#7F0327" }}
                            placeholderTextColor = "#7F0327" 
                            placeholder='Email'
                        />
                    </Item>
                    <DefaultButton 
                            text='Reset Password'
                            check={() => {
                                    this.setState({dialogVisible: false}),
                                    this.props.navigation.navigate('Signup')
                                    }
                                } />
                    </View>
                </Dialog>
                
            </ImageBackground>
        );
    }
}