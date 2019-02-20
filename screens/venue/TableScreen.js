import React from 'react';
import { StyleSheet,    Image } from 'react-native';
import { Container,  Content, Form, Item, Input, Label,
     Button,Body, Text,Footer,Right, Icon , List,ListItem,Separator } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { updateTable,addGuestToTable, rmGuestFromTable } from "../../actions/types";


class TableScreen extends React.Component {
  static navigationOptions  = {
      headerTitle: 'Table'
  };
  
  
  constructor(props) {
    super(props);
    
  }

  onPress = () => {
    this.props.updateTable(this.state.name);
    this.props.navigation.goBack();
  }

render() {
    const filterActiveGuest = this.props.guest.guests
    .filter((guest) => guest.idTable == this.props.venue.activeTable.id)
    .map((guest,index) => (
    <ListItem key={index} onPress={()=>this.props.rmGuestFromTable(guest.id)}>
      <Text>{ guest.name }</Text>
    </ListItem>
    ));

    const filterGuestList = this.props.guest.guests
    .filter((guest)=> guest.idTable == null )
    .map((guest,index) => (
      <ListItem icon key ={index} 
      onPress={() => this.props.addGuestToTable(guest.id,this.props.venue.activeTable.id)}>
      <Body>
        
      <Text> { `${ guest.name }`  }</Text>
      </Body>
      <Right>
      <Icon active name="ios-add" />
      </Right>
      </ListItem>
     ));
  return (
    
     <Container>
        <Content >
            <Form>
            <Item stackedLabel last>
            <Image source={require('../../assets/images/table.png')} />
            </Item>
            
            <Item stackedLabel>
              <Label>Table name</Label>
              <Input value={this.props.venue.activeTable.name}
               onChangeText={(name) =>this.props.updateTable(name)}/> 
            </Item>
           </Form>
           <List>
            <Separator bordered>
            <Text>Guest assigned to table:</Text>
          </Separator>   
           {filterActiveGuest} 
            <Separator bordered>
            <Text>Avaliable guest:</Text>
          </Separator> 
           {filterGuestList}
         </List> 
        </Content>
        
      </Container>
     
   
    )};
}


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateTable,
    addGuestToTable,
    rmGuestFromTable,
  }, dispatch)
 );

const mapStateToProps = state => ({
  venue: state.venue,
  guest: state.guest,
 });

 TableScreen.defaultProps ={
      
   
   
  }
 export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(TableScreen);