import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Container, Header,Item ,Icon, Input
  , Content, List, ListItem, Text, Left,
   Body,Button, Right,Picker} from 'native-base';
import { addEvent, setActiveEvent, deleteEvent } from "../../actions/types";
class CalendarScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Calendar',
      headerRight: (
          <Button transparent
            onPress={() =>
              navigation.navigate('AddEventScreen', { name: 'AddEventScreen' })}>
              <Text style={{color:'red',fontSize:30}}>+</Text>
          </Button>
          ),
    };
  };

  constructor(props) {
    super(props);
    this.state={
      searchText: '',
    }
  }
  onPress = (id) =>{
    this.props.setActiveEvent(id);
    this.props.navigation.navigate('EventScreen', { name: 'EventScreen'});
  } 
  delete = (id) =>{
    this.props.deleteEvent(events.id)
  }
  render() {
    const filterBySearchCalendar =  this.props.event.current
    .filter(events=>{
      return events.name.toLowerCase()
      .indexOf(this.state.searchText.toLowerCase()) >= 0 }) 
    .map((events,index) => (
      <List key={index}>
        <ListItem itemDivider >
          <Left>
            <Icon name="ios-calendar" />
            <Text>  {`${ events.date }`}</Text>
          </Left>
          
        </ListItem>
        <ListItem  
        onPress={() => this.onPress(events.id)} 
        onLongPress={() => this.delete(events.id)}>
          <Body><Text >{ `${ events.name }` }</Text></Body>
          <Right><Icon active name="ios-arrow-dropright" /></Right>
        </ListItem>
      </List>
      ));
    
    return (
      <Container >
        <Header searchBar rounded style={{ backgroundColor: "white" }}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" 
            onChangeText={(searchText)=>this.setState({searchText})} rounded
             rounded/>
             <Right>
              <Picker
              mode="dropdown"
              selectedValue={this.state.sortValue}
              iosIcon={<Icon name="ios-arrow-down-outline"/>}
              style={{ width: 150 }}
              onValueChange={(itemValue) => this.onPressPicker(itemValue)}>
                <Picker.Item label="date" value="date" />
                <Picker.Item label="name" value="age" />
              </Picker>
            </Right>            
          </Item>
        </Header>
        <Content>
          {filterBySearchCalendar}         
          <Body>
             <Text > {this.props.event.current.length}  </Text>
          </Body>
        </Content>
      </Container>
    );
  }
}


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addEvent,
    setActiveEvent,
    deleteEvent,
  }, dispatch)
 );

const mapStateToProps = state => ({
  event: state.event,
 });
 export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(CalendarScreen);
