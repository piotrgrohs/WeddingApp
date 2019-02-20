
import React  from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { addGuest } from "../../actions/types";
import GuestProperties  from "../../components/GuestProperties";
class AddGuestScreen extends React.Component {
    static navigationOptions = {
      title: 'Add guest to your weeding',
    };
    constructor(props){
      super(props);
  
    }

    render() {
      return (
              <GuestProperties navigation={this.props.navigation} action="add" />
      );
    }
  }

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addGuest,
  }, dispatch)
 );

const mapStateToProps = state => ({
  
 });
 export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(AddGuestScreen);
  
  