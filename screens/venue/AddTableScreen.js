import { Container,  Content, Form, Item, Input, Label, Button, Text, Left } from 'native-base';
import DatePicker from 'react-native-datepicker';
import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { addTable } from "../../actions/types";


class AddTableScreen extends React.Component {
  static navigationOptions = {
      headerTitle: 'Add event to your calendar',
  };
    constructor(props){
      super(props);
      this.state = {
        name: '',

        
      }
    }


    onPress = () => {
      this.props.addTable(this.state.name);
      this.props.navigation.goBack();
    }

    render() {

      return (
        <Container>
        <Content padder>
          <Form>
            <Item >
              <Label>Table name </Label>
              <Input onChangeText={(name) => this.setState({name})}/> 
            </Item>
            <Button block light  onPress={()=>this.onPress()} ><Text>SAVE</Text></Button>
          </Form>
        </Content>
      </Container>
      );
    }
  }


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addTable,
  }, dispatch)
 );

const mapStateToProps = state => ({
  event: state.event,
 });
 export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(AddTableScreen);
  
  