import { Container,  Content, Form, Item, Input, Label, Button, Text, Left } from 'native-base';
import DatePicker from 'react-native-datepicker';
import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { addEvent } from "../../actions/types";


class AddEventScreen extends React.Component {
  static navigationOptions = {
      headerTitle: 'Add event to your calendar',
  };
    constructor(props){
      super(props);
      this.state = {
        date: '',
        dateFormat: 'dd.mm.yyyy',
        eventName: '',
        
      }
    }
    componentWillMount(){
      var now = new Date();
      var dateFormat = require('dateformat');
      this.state.date = dateFormat(now, this.state.dateFormat);
    }

    onPress = () => {
      this.props.addEvent(this.state.eventName,this.state.date);
      this.props.navigation.goBack();
    }

    render() {

      return (
        <Container>
        <Content padder>
          <Form>
            <Item stackedLabel>
              <Label>Event name </Label>
              <Input onChangeText={(eventName) => this.setState({eventName})}/> 
            </Item>
            <Item stackedLabel last>
              <Label>Date </Label>
              <Left>
              <DatePicker
                style={{width: 200}}
                date={this.state.date}
                mode="date"
                placeholder= {this.state.date}
                format="DD.MM.YYYY"
                minDate="01.01.2016"
                maxDate="01.05.2022"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    borderWidth: 0,
                    marginLeft: 36
                }
                }}
                onDateChange={(date) => this.setState({date})}
            />
            </Left>
            </Item>
            <Button block light  onPress={()=>this.onPress()} ><Text>Add</Text></Button>
          </Form>
        </Content>
      </Container>
      );
    }
  }


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addEvent,
  }, dispatch)
 );

const mapStateToProps = state => ({
  event: state.event,
 });
 export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(AddEventScreen);
  
  