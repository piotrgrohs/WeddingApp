import React from 'react';
import { ScrollView, View ,  StyleSheet, PanResponder, Animated, Image,TouchableHighlight } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Button, Text,Container,CardItem,Card,Right,Icon,Body, Content } from 'native-base';
import Table from "../../components/Table"
import { setActiveTable } from "../../actions/types";

class VenueScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Wedding Venue',
      headerRight: (
        <Button transparent
          onPress={() =>
            navigation.navigate('AddTableScreen', { name: 'AddTableScreen' })}>
            <Text style={{color:'red',fontSize:30}}>+</Text>
        </Button>
      ),
    };
  };
  
  constructor(props) {
    super(props);
  }
  
  
  render() {
    onPress = (id) => {
      this.props.setActiveTable(id);
      this.props.navigation.navigate('TableScreen', { name: 'TableScreen' });
    }
  

  return (
    <Container >
      <Content padder>
    {/*this.props.venue.tables.map((table,index) => (
            <Table key={index} 
            title={table.name}
            id={table.id} 
            navigation={this.props.navigation}
            />
            ))
    */} 
    {this.props.venue.tables.map((table,index) => (
      <Card key={index}>
        <CardItem header bordered>
          <Text>{index+1}. {table.name}</Text>
        </CardItem>
            {this.props.guest.guests
            .filter((guest) => guest.idTable == table.id)
            .map((guest,index) => (
              <CardItem key={index} bordered>
                <Text>{guest.name}</Text>
              </CardItem>
            ))}
        <CardItem button onPress={()=>onPress(table.id)}>
          <Body>
            <Text>Select</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
      </Card>
    ))}
    </Content> 
  </Container>
  )};
  
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setActiveTable
  }, dispatch)
 );

const mapStateToProps = state => ({
  venue: state.venue,
  guest: state.guest,
 });

 export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(VenueScreen);