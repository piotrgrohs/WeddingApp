import { ADD_TABLE, UPDATE_TABLE, UPDATE_TABLE_POSSITION,SET_ACTIVE_TABLE} from '../actions/types';

const intitialState = {
 tables:[],
 activeTable:[],
};
const uuidv4 = require('uuid/v4');

export default function(state = intitialState, action) {
  switch (action.type) {
    case ADD_TABLE:
      return Object.assign({}, state, {
        tables: state.tables.concat({
          id: uuidv4(),
          name: action.name,
          x:0,
          y:0,
        }),
      });
    case UPDATE_TABLE:
      return Object.assign({}, state, {
        tables: state.tables.map((table, index) => {
          if (table.id === state.activeTable.id) {
            {
              table.name = action.name;
            }
          }
          return table;
        }),
      });
      case UPDATE_TABLE_POSSITION:
      return Object.assign({}, state, {
        tables: state.tables.map((table, index) => {
          if (table.id === action.id) {
            {
              table.x = action.x;
              table.y = action.y;
            }
          }
          return table;
        }),
      });
      case SET_ACTIVE_TABLE:
        let tempState;
        state.tables.map(table => {
          if (table.id === action.id) {
            tempState = table;
          }
        });
        return Object.assign({}, state, {
          activeTable: tempState,
        });
    default:
      return state;

};
}
