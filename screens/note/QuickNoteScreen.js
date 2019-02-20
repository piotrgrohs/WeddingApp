import React from 'react';
import { Container,  Content, Card, CardItem,
     Button,Body, Text,Footer,Right, Icon , List,Input,Separator } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { updateNote } from "../../actions/types";


class QuickNoteScreen extends React.Component {
  static navigationOptions  = {
      headerTitle: 'Quick note'
  };
  
  
  constructor(props) {
    super(props);
    this.state = {
      note: ''
    }
  }


render() {
    
  return (
    
     <Container>
        <Content padder>
              {this.props.note.notes.map((note,index) =>(
                <Card key ={index}>
                  <CardItem header >
                    <Text>Write a note:</Text>
                  </CardItem>

                  <CardItem>
                    <Body>
                      <Input
                            autoCapitalize="sentences"
                            onChangeText={(content)=> this.props.updateNote(note.id,content)}
                            placeholder="..."
                            value={note.content}
                            multiline={true}
                            />
                    </Body>
                  </CardItem>
                </Card>
              ))}
                
        </Content>
        
      </Container>
     
   
    )};
}


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateNote,

  }, dispatch)
 );

const mapStateToProps = state => ({
  note: state.note,
 });

 
 export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(QuickNoteScreen);