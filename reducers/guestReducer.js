import { ADD_GUEST, SET_ACTIVE_GUEST, ADD_GUEST_TO_TABLE, RM_GUEST_FROM_TABLE,UPDATE_GUEST, SORT_BY_AGE, SORT_BY_NAME } from '../actions/types';

const intitialState = {

 guests: [],
 activeGuest: [],
};
const uuidv4 = require('uuid/v4');

export default function(state = intitialState, action) {
  switch (action.type) {
    case ADD_GUEST:
      return Object.assign({}, state, {
        guests: state.guests.concat({
          id: uuidv4(),
          name: action.name,
          age: action.age,
        }),
      });
    case SET_ACTIVE_GUEST:
      let tempState;
      state.guests.map(guest => {
        if (guest.id === action.id) {
          tempState = guest;
        }
      });
      return Object.assign({}, state, {
        activeGuest: tempState,
      });

    case UPDATE_GUEST:
      return Object.assign({}, state, {
        guests: state.guests.map((guest, index) => {
          if (guest.id === action.id) {
            {
              guest.name = action.name;
              guest.age = action.age;
            }
          }
          return guest;
        }),
      });
    case SORT_BY_AGE:
      return Object.assign({}, state, {
        guests: state.guests.map((guest, index) => {
          return guest;
        }).sort((a, b) => a.age > b.age ),
      });

    case SORT_BY_NAME:
     return Object.assign({}, state, {
       guests: state.guests.map((guest, index) => {
         return guest;
       }).sort((a, b) => a.name > b.name ),
     });
     case ADD_GUEST_TO_TABLE:
     return Object.assign({}, state, {
       guests: state.guests.map((guest) => {
         if (guest.id === action.id) {
           {
             guest.idTable = action.idTable;
           }
         }
         return guest;
       }),
     });
     case RM_GUEST_FROM_TABLE:
     return Object.assign({}, state, {
     guests: state.guests.map((guest) => {
       if (guest.id === action.id) {
         {
           guest.idTable = null;
         }
       }
       return guest;
     }),
   });
    default:
      return state;

};
}
