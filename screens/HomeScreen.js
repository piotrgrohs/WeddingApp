import React from  'react';
import { Image } from "react-native";
import { Button, Text, Container, Content, Body,Right,Icon , Footer, 
Card, CardItem } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { updateNote } from "../actions/types";



class HomeScreen extends React.Component {


  static navigationOptions = {
    headerTitle: 'MY WEEDING',
  };
  constructor(props){
    super(props);
    this.state = {
      dateFormat: 'dd.mm.yyyy',
    }
  }

  render() {
        const { navigate } = this.props.navigation;
        const todayDate = (date,format) => {
        var dateFormat = require('dateformat');
      return dateFormat(date, format);
  }

  const todayEvent =   this.props.event.current
        .filter(events=>{
                return events.date == todayDate(new Date,this.state.dateFormat)}) 
        .map((events,index) => (
          <CardItem 
            button
            bordered key={index}
            onPress={()=> navigate('Calendar',{name:'Calendar'})}>
            <Body>
              <Text>TODAY: {events.name}</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </CardItem>
  ));

      
    return (
                  <Container>
                  <Image style={{ height: 100, flex: 1 }} source={require('../assets/images/main_bg.png')}></Image>
                  <Content padder>
                    <Card>
                      <CardItem button bordered
                          onPress={() => navigate('QuickNote', { name: 'QuickNote'})} >
                          <Body>
                            <Text>QUICK NOTE</Text>
                          </Body>
                          <Right>
                            <Icon name="arrow-forward" />
                          </Right>
                      </CardItem>
                      {todayEvent}
                    </Card>
                  </Content>

                
              </Container>
    );
  }

}


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateNote,

  }, dispatch)
 );

const mapStateToProps = state => ({
  event: state.event,
 });

 
 export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(HomeScreen);

