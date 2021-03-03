import React, { Component } from 'react';
import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';

export default class TabScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#075E54'}} hasTabs>
            
          <Body>
            <Title style={{color:'white', alignSelf:'center'}}>Berita Terkini</Title>
          </Body>
          
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab tabStyle={{backgroundColor:'#075E54'}} activeTabStyle={{backgroundColor:'#075E54'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Umum">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#075E54'}} activeTabStyle={{backgroundColor:'#075E54'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Bisnis">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#075E54'}} activeTabStyle={{backgroundColor:'#075E54'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Teknologi">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
};