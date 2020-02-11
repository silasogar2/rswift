import React, {Component} from "react";
import {Animated, Dimensions, Platform, Text, View} from 'react-native';
import {Body, Header, Drawer, List,Left,Right,Button,Icon, ListItem as Item, Item as Ast, Input, ScrollableTab, Input as Afp, Tab, Tabs, Title, TabHeading, Content, Switch} from "native-base";
import SideBar from './../components/SideBar';
import { TouchableOpacity } from "react-native-gesture-handler";
const NAVBAR_HEIGHT = 56;
const {width: SCREEN_WIDTH} = Dimensions.get("window");
const COLOR = "#7F0327";
const TAB_PROPS = {
  tabStyle: {width: SCREEN_WIDTH / 2, backgroundColor: COLOR},
  activeTabStyle: {width: SCREEN_WIDTH / 2, backgroundColor: COLOR},
  textStyle: {color: "white"},
  activeTextStyle: {color: "white"}
};

export default class PageContact extends Component {
  scroll = new Animated.Value(0);
  headerY;

  constructor(props) {
    super(props);
    this.headerY = Animated.multiply(Animated.diffClamp(this.scroll, 0, NAVBAR_HEIGHT), -1);
  }

  render() {
    const tabContent = (
      <List>{new Array(20).fill(null).map((_, i) => <Item
        key={i}><Text>Item {i}</Text></Item>)}</List>);
    const tabY = Animated.add(this.scroll, this.headerY);
    return (
      <View>
        {Platform.OS === "ios" &&
        <View style={{backgroundColor: COLOR, height: 30, width: "100%", position: "absolute", zIndex: 2}}/>}
        <Animated.View style={{
          width: "100%",
          position: "absolute",
          transform: [{
            translateY: this.headerY
          }],
          elevation: 0,
          flex: 1,
          zIndex: 1,
          backgroundColor: COLOR
        }}>
          <Header style={{backgroundColor: "transparent"}} hasTabs>
            
                
                <Body style={{borderWidth:0, backgroundColor:'#AA6479'}}>
                   
                    <Ast >
                        <Button transparent onPress={() =>{ 
                            alert('welcome')
                            }
                        }
                        >
                            <Icon name='menu' style={{color:'#fff'}} />
                        </Button>
                        <Input 
                            placeholder="Search"
                            placeholderTextColor='#fff'
                            // onEndEditing={() => this.searchStories(this.state.search_query)}
                            // onChangeText={text => { alert(Yeah)}}
                        />
                        <Icon name="ios-search" style={{color:'#fff'}} />
                    </Ast>
                </Body>
                {/* <Right>
                    <Button transparent>
                        <Icon name='search' />
                    </Button>
                </Right> */}
          </Header>
        </Animated.View>
        <Animated.ScrollView
          scrollEventThrottle={1}
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{zIndex: 0, height: "100%", elevation: -1}}
          contentContainerStyle={{paddingTop: NAVBAR_HEIGHT}}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.scroll}}}],
            {useNativeDriver: true},
          )}
          overScrollMode="never">
          <Tabs renderTabBar={(props) => <Animated.View
            style={[{
              transform: [{translateY: tabY}],
              zIndex: 1,
              width: "100%",
              backgroundColor: COLOR
            }, Platform.OS === "ios" ? {paddingTop: 20} : null]}>
            <ScrollableTab {...props} underlineStyle={{backgroundColor: "white"}}/>
          </Animated.View>
          }>
            <Tab heading="Rswift Connect" {...TAB_PROPS}>
                <Content>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin:10}}>
                        <Button style={{ backgroundColor: "#ccc", width:30, height:30}}>
                            <Icon active style={{width:20, height:20, justifyContent:'space-evenly'}} name="person" />
                        </Button>

                        <View>
                            <Text>Moses Andrew</Text>
                            <Text note style={{fontSize:11, color:'green'}}>Online</Text>
                        </View>

                        <TouchableOpacity onPress={() => alert('Video')}>
                            <Icon active style={{color:'#7F0327', alignItem:'right'}}  name="videocam" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => alert('CALL')}>
                            <Icon active style={{color:'#7F0327'}} name="call" />
                        </TouchableOpacity>
                    </View>

                    <Item icon>
                        <Left>
                        <Button style={{ backgroundColor: "#ccc" }}>
                            <Icon active name="person" />
                        </Button>
                        </Left>
                        <Body>
                        <Text>Moses Andrew</Text>
                        </Body>
                        <Right>
                            <Icon active name="videocam" />
                            <Icon active name="call" />
                        </Right>
                    </Item>
                    <Item icon>
                        <Left>
                        <Button style={{ backgroundColor: "#ccc" }}>
                            <Icon active name="person" />
                        </Button>
                        </Left>
                        <Body>
                        <Text>Moses Andrew</Text>
                        </Body>
                        <Right>
                            <Icon active name="videocam" />
                            <Icon active name="call" />
                        </Right>
                    </Item>
                    <Item icon>
                        <Left>
                        <Button style={{ backgroundColor: "#ccc" }}>
                            <Icon active name="person" />
                        </Button>
                        </Left>
                        <Body>
                        <Text>Moses Andrew</Text>
                        </Body>
                        <Right>
                            <Icon active name="videocam" />
                            <Icon active name="call" />
                        </Right>
                    </Item>
                    <Item icon>
                        <Left>
                        <Button style={{ backgroundColor: "#ccc" }}>
                            <Icon active name="person" />
                        </Button>
                        </Left>
                        <Body>
                        <Text>Moses Andrew</Text>
                        </Body>
                        <Right>
                            <Icon active name="videocam" />
                            <Icon active name="call" />
                        </Right>
                    </Item>
                    <Item icon>
                        <Left>
                        <Button style={{ backgroundColor: "#ccc" }}>
                            <Icon active name="person" />
                        </Button>
                        </Left>
                        <Body>
                        <Text>Moses Andrew</Text>
                        </Body>
                        <Right>
                            <Icon active name="videocam" />
                            <Icon active name="call" />
                        </Right>
                    </Item>
                   
                </Content>
            </Tab>
            <Tab heading="Phone Contacts" {...TAB_PROPS}>
                <Content>
                    <Item icon>
                        <Left>
                        <Button style={{ backgroundColor: "#ccc" }}>
                            <Icon active name="person" />
                        </Button>
                        </Left>
                        <Body>
                        <Text>Moses Andrew</Text>
                        </Body>
                        <Right>
                            {/* <Icon active name="videocam" /> */}
                            <TouchableOpacity onPress={() => alert('CALL')}>
                                <Icon active style={{color:'#7F0327'}} name="call" />
                            </TouchableOpacity>
                        </Right>
                    </Item>
                </Content>
            </Tab>
            <Tab heading={ <TabHeading style={{ backgroundColor:'#fff'}}><Icon name="apps" style={{color:COLOR}}  /></TabHeading>} {...TAB_PROPS}>
              <Text>I dont see it</Text>
            </Tab>
            
          </Tabs>
        </Animated.ScrollView>
      </View>
    );
  }
}