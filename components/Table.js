import React from 'react';
import {  View , PanResponder, Animated, Image,Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { setActiveTable } from '../actions/types';

class Table extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        pan: new Animated.ValueXY(),
        x: this.props.x,
        y: this.props.y,
        title: this.props.title,
        id: this.props.id,
      };
      
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
  
      // Initially, set the value of x and y to 0 (the center of the screen)
      onPanResponderGrant: (e, gestureState) => {
        // Set the initial value to the current state
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
      },
  
      // When we drag/pan the object, set the delate to the states pan position
      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),
  
      onPanResponderRelease: (e, {vx, vy}) => {
        // Flatten the offset to avoid erratic behavior
        this.state.pan.flattenOffset();
      },
      
    });
    
  }
  onPress = () =>{
    this.props.setActiveTable(this.state.id);
    this.props.navigation.navigate('TableScreen', { name: 'TableScreen' });
   }
  render() {
    // Destructure the value of pan from the state
    let { pan } = this.state;
  
    // Calculate the x and y transform from the pan value
    let [translateX, translateY] = [pan.x, pan.y];
  
    // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
    let imageStyle = {transform: [{translateX}, {translateY}]};
  
    return (
        
      <View>
        <Animated.View style={[imageStyle,{marginLeft:this.state.x,marginTop:this.state.y}]} {...this._panResponder.panHandlers}>
        <TouchableOpacity onPress={()=>this.onPress()}>
        <Text>{this.state.title}</Text>
        <Image source={require('../assets/images/table.png')} />
        </TouchableOpacity>
        </Animated.View>
       
      </View>
      )};
    }

    Table.defaultProps ={
        title: '',
        x: 0,
        y: 0,
        id: 0,
      }
    
      const mapDispatchToProps = dispatch => (
        bindActionCreators({
          setActiveTable
        }, dispatch)
       );
      
      const mapStateToProps = state => ({
        venue: state.venue,
       });
       export default connect(
        mapStateToProps,
        mapDispatchToProps
       )(Table);

  