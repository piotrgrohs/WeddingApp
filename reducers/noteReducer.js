import { ADD_NOTE, UPDATE_NOTE} from '../actions/types';

const intitialState = {
 notes:[{id:1,content:''}],
};
const uuidv4 = require('uuid/v4');

export default function(state = intitialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return Object.assign({}, state, {
        notes: state.notes.concat({
          id: uuidv4(),
          content: action.content,
        }),
      });
    case UPDATE_NOTE:
      return Object.assign({}, state, {
        notes: state.notes.map((note, index) => {
          if (note.id === action.id) {
            {
              note.content  = action.content;
            }
          }
          return note;
        }),
      });
      
      
    default:
      return state;

};
}
