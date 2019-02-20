import { ADD_EVENT, TOOGLE_EVENT, UPDATE_EVENT, SET_ACTIVE_EVENT, DELETE_EVENT } from '../actions/types';

const intitialState = {
  current: [],
  activeEvent: [],
};
const uuidv4 = require('uuid/v4');

export default function(state = intitialState, action) {
  switch (action.type) {
    case ADD_EVENT:
      return Object.assign({}, state, {
        current: state.current
          .concat({
            id: uuidv4(), 
            name: action.name,
            date: action.date,
          })
          .sort((a, b) => new Date(...b.date.split('.').reverse()) - new Date(...a.date.split('.').reverse())),
      });
    case TOOGLE_EVENT:
      return Object.assign({}, state, {
        current: state.current.map(event => {
          if (event.id == action.id) {
            return event;
          }
        }),
      });
    case UPDATE_EVENT:
      return Object.assign({}, state, {
        current: state.current
          .map((event, index) => {
            if (event.id === action.id) {
              {
                (event.name = action.name), (event.date = action.date);
              }
            }
            return event;
          })
          .sort((a, b) => new Date(...b.date.split('-').reverse()) - new Date(...a.date.split('-').reverse())),

      });
    case SET_ACTIVE_EVENT:
      let tempState;
      state.current.map(event => {
        if (event.id === action.id) {
          tempState = event;
        }
      });
      return Object.assign({}, state, {
        activeEvent: tempState,
      });
    case DELETE_EVENT:
    return Object.assign({}, state, {
    current: state.current
    .filter(events=>{
      return events.id !== action.id
    }),
    });
    default:
      return state;

};
}
