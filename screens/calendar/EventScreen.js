import React from 'react';
import { Button, Text, Container, Content, Input , Form, Item, Label } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { updateEvent } from "../../actions/types";
import DatePicker from 'react-native-datepicker';

class EventScreen extends React.Component {
  static navigationOptions = {
      headerTitle: 'Event',  
  };
  
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        id: "",
        date: "",
      }
}

componentWillMount(){
    this.state.name = this.props.event.activeEvent.name;
    this.state.id = this.props.event.activeEvent.id;
    this.state.date = this.props.event.activeEvent.date;
}
onPress = () =>{
    this.props.updateEvent(this.state.id,this.state.name,this.state.date);
    this.props.navigation.goBack();
}


render() {
    return (
        <Container>
        <Content>
                <Form>
                    <Item stackedLabel>
                        <Label>Event name </Label>
                        <Input onChangeText={(name)=> this.setState({name})} >{ this.state.name }</Input>
                    </Item>
                    <Item stackedLabel>
                        <Label>Calendar </Label>
                            <DatePicker
                                style={{width: 200}}
                                date={this.state.date}
                                mode="date"
                                placeholder= {this.state.date}
                                format="DD-MM-YYYY"
                                minDate="01-01-2016"
                                maxDate="01-05-2022"
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
                                onDateChange={(date) => this.setState({date})} />
                    </Item>
                    <Button block light onPress={()=>this.onPress()} ><Text>Save</Text></Button>
                </Form>
              </Content>
              </Container>
    )};
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateEvent
  }, dispatch)
 );

const mapStateToProps = state => ({
    event: state.event,
 });
 export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(EventScreen);