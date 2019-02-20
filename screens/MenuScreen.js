import React from 'react';
import { CardItem, Text, Container, Content, Body,Right,Icon , Card, Item, Label } from 'native-base';


export default class MenuScreen extends React.Component {
  static navigationOptions = {
    title: 'Menu: ',
  };
  constructor(props) {
    super(props);
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
       
                  <Container>
                  <Content >
                  <Card>
                    <CardItem button bordered
                     onPress={() => navigate('GuestListScreen', { name: 'GuestListScreen'})} >
                      <Body>
                        <Text>GUESTS LIST</Text>
                      </Body>
                      <Right>
                        <Icon name="arrow-forward" />
                      </Right>
                    </CardItem>
                    <CardItem button bordered
                      onPress={() => navigate('VenueScreen', { name: 'VenueScreen'})} >
                      <Body>
                        <Text>WEDDING VENUE</Text>
                      </Body>
                      <Right>
                        <Icon name="arrow-forward" />
                      </Right>
                      </CardItem>
                      
                  </Card>
                </Content>
              </Container>
    );
  }
}
