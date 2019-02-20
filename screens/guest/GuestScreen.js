import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import {  updateGuest} from "../../actions/types";
import GuestProperties from "../../components/GuestProperties";
class GuestScreen extends React.Component {
  static navigationOptions = {
      headerTitle: 'Edit guest',  
  };
  
  constructor(props) {
    super(props);
    this.state = {
        name: this.props.guest.activeGuest.name,
        id: this.props.guest.activeGuest.id,
        age: {
          name: this.props.guest.activeGuest.ageName,
        },
            
      }
    }
render() {
    return (
        <GuestProperties navigation={this.props.navigation} 
        name={this.props.guest.activeGuest.name} id={this.props.guest.activeGuest.id} 
        action="edit"
        ageName={this.props.guest.activeGuest.age}/>
    )};
}
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateGuest,
  }, dispatch)
 );

const mapStateToProps = state => ({
  guest: state.guest,
 });

 export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(GuestScreen);