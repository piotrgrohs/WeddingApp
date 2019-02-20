import React from   'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from   'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';

import QuickNoteScreen from '../screens/note/QuickNoteScreen';
import CalendarScreen from '../screens/calendar/CalendarScreen';
import MenuScreen from '../screens/MenuScreen';
import AddEventScreen from '../screens/calendar/AddEventScreen';
import AddGuestScreen from '../screens/guest/AddGuestScreen';
import GuestListScreen from '../screens/guest/GuestListScreen';
import GuestScreen from '../screens/guest/GuestScreen';
import EventScreen from '../screens/calendar/EventScreen';
import VenueScreen from '../screens/venue/VenueScreen';
import TableScreen from '../screens/venue/TableScreen';
import AddTableScreen from '../screens/venue/AddTableScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  QuickNote: QuickNoteScreen,
  
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const CalendarStack = createStackNavigator({
  Calendar: CalendarScreen,
  AddEventScreen: AddEventScreen,
  EventScreen: EventScreen,
});

CalendarStack.navigationOptions = {
  tabBarLabel: 'Calendar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-calendar${focused ? '' : '-outline'}` : 'md-calendar'}
    />
  ),
};

const MenuStack = createStackNavigator({
  Menu: MenuScreen,
  /* Guest Screen */
  GuestListScreen:  GuestListScreen ,
  AddGuestScreen:  AddGuestScreen ,
  GuestScreen: GuestScreen,
  /* Venue screen */
  VenueScreen: VenueScreen,
  TableScreen: TableScreen,
  AddTableScreen: AddTableScreen,
});

MenuStack.navigationOptions = {
  tabBarLabel: 'Menu',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-menu${focused ? '' : '-outline'}` : 'md-menu'}
    />
  ),
};



export default createBottomTabNavigator({
  Home: HomeStack,
  Calendar: CalendarStack,
  Menu: MenuStack,

});
