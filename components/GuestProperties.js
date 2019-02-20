import { StyleSheet, Platform,  } from 'react-native';
import { Container,  Content, Form, Item, Input, Label, Button, Text,ListItem, CheckBox, Body, List } from 'native-base';

import React  from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { addGuest,updateGuest } from "../actions/types";

class GuestProperties extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        name: this.props.name,
        id: this.props.id,
        age: {
          checkChild: this.props.checkChild,
          checkAdult: this.props.checkAdult,
          name: this.props.ageName,
        },
      }
      this.checkAge(props);
      
    }
    checkAge = (props) => {
        if(props.ageName==="checkChild"){
            this.state.age.checkChild = true;
            }else if(props.ageName==="checkAdult"){
            this.state.age.checkAdult = true;
        }
    }
 



    onPress = () => {

    if(this.props.action === "add"){
      this.props.addGuest(this.state.name,this.state.age.name);
    }else if(this.props.action ==="edit"){
        this.props.updateGuest(this.state.id,this.state.name,this.state.age.name);
    }
      this.props.navigation.goBack();
    } 

    validateAge = (checkName) => { 
        if(checkName==="checkChild"){
        this.setState(prevState=>({
          age:{checkChild:!prevState.age.checkChild
          ,checkAdult:false, name: checkName}
        }));
      }
      else if(checkName==="checkAdult"){
        this.setState(prevState=>({
          age:{checkAdult:!prevState.age.checkAdult
          ,checkChild:false, name: checkName}
        }));
      }
      
    }
      
    
    render() {
      
      
      return (
              <Container>
              <Content padder>
                <Form>
                  <ListItem>
                  <Item stackedLabel>
                    <Label>Guest name: </Label>
                    <Input value={this.state.name} onChangeText={(name) => this.setState({name})}/> 
                  </Item>
                  </ListItem>
                  <ListItem>
                      <Body>
                        <Text>Age:</Text>
                      </Body>
                    <CheckBox checked={this.state.age.checkChild} onPress={()=>this.validateAge("checkChild")} />
                      <Body>
                        <Text>Young</Text>
                      </Body>
                    <CheckBox checked={this.state.age.checkAdult} onPress={()=>this.validateAge("checkAdult")}/>
                      <Body>
                        <Text>Adult</Text>
                      </Body>
                  </ListItem>

                  <Button block light onPress={()=>this.onPress() } ><Text>Save</Text></Button>
                </Form>
              </Content>
            </Container>
      );
    }
}
GuestProperties.defaultProps ={
        name: '',
        id: 0,
        age: {
          checkChild: false,
          checkAdult: false,
          name: '',
        },
      
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addGuest,
    updateGuest,
  }, dispatch)
 );

const mapStateToProps = state => ({
  
 });
 export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(GuestProperties);
  
  