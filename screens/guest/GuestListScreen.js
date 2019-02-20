import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { setActiveGuest, sortByAge, sortByName } from "../../actions/types";
import { Container, Content, List, ListItem, Text,
   Icon, Body, Right,Picker, Left,Item,Input, Button, Header } from 'native-base';

class GuestListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Guests list',
      headerRight: (
        <Button transparent
          onPress={() =>
            navigation.navigate('AddGuestScreen', { name: 'AddGuestScreen' })}>
            <Text style={{color:'red',fontSize:30}}>+</Text>
        </Button>
      ),
    };
  };
  constructor(props){
    super(props);
    this.state={
      sortValue: '',
      searchText: '',
    }
    this.picker = React.createRef();
  }
  editGuest = (id) => {
    this.props.setActiveGuest(id);
    this.props.navigation.navigate('GuestScreen', { name: 'GuestScreen' });
  }
  onPressPicker = (sortValue) =>{
    switch (sortValue) {
      case 'age':
        this.setState({sortValue:sortValue});
        this.props.sortByAge();
        break;
      case 'name':
        this.setState({sortValue:sortValue});
        this.props.sortByName();
        break;
      default:
      break;
    }
  }

  render() {
    const filterBySearchGuest = this.props.guest.guests
    .filter(guests=>{
      return guests.name.toLowerCase()
      .indexOf(this.state.searchText.toLowerCase()) >= 0 })
    .map((guests,index) => ( 
      <ListItem icon key ={index} onPress={() => this.editGuest(guests.id)}>
      <Body>
      <Text> { `${ guests.name }`  }</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
      </ListItem>
     ));

    return (
      <Container>
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
                <Picker.Item label="sort" value="sort" />
                <Picker.Item label="age" value="age" />
                <Picker.Item label="name" value="name" />
              </Picker>
            </Right>
          </Item>
        </Header>
      <Content>
      
        <List>
        {filterBySearchGuest}
         </List>
           <Body>
          <Text> {this.props.guest.guests.length} </Text>
          </Body>
          
        
      </Content>
    </Container>
    );
  }
}


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setActiveGuest,
    sortByAge,
    sortByName,
  }, dispatch)
 );

const mapStateToProps = state => ({
  guest: state.guest,
 });
 export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(GuestListScreen);
