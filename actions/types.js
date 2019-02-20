export const ADD_EVENT = 'ADD_EVENT'
export const TOOGLE_EVENT = 'TOOGLE_EVENT'
export const ADD_GUEST = 'ADD_GUEST'
export const SET_ACTIVE_GUEST= 'SET_ACTIVE_GUEST'
export const SET_ACTIVE_EVENT = 'SET_ACTIVE_EVENT'
export const UPDATE_GUEST = 'UPDATE_GUEST'
export const UPDATE_EVENT = 'UPDATE_EVENT'
export const ADD_TABLE = 'ADD_TABLE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const ADD_NOTE = 'ADD_NOTE'
export const UPDATE_TABLE = 'UPDATE_TABLE'
export const SORT_BY_AGE = 'SORT_BY_AGE'
export const SORT_BY_NAME = 'SORT_BY_NAME'
export const UPDATE_TABLE_POSSITION = 'UPDATE_TABLE_POSSITION'
export const SET_ACTIVE_TABLE = 'SET_ACTIVE_TABLE'
export const ADD_GUEST_TO_TABLE = 'ADD_GUEST_TO_TABLE'
export const RM_GUEST_FROM_TABLE = 'RM_GUEST_FROM_TABLE'
export const DELETE_EVENT = 'DELETE_EVENT'

export const deleteEvent = (id) => (
  {
    type:DELETE_EVENT,
    id:id
  }
)
export const addNote = () =>(
  {
    type: ADD_NOTE,
  }
);
export const updateNote = (id,content) => (
  {
    type: UPDATE_NOTE,
    id:id,
    content: content,
  }
);
export const rmGuestFromTable = (id) => (
  {
    type: RM_GUEST_FROM_TABLE,
    id: id,
  }
);
export const addGuestToTable = (id,idTable) => (
  {
    type: ADD_GUEST_TO_TABLE,
    id: id,
    idTable: idTable,
  }
);
export const setActiveTable = (id) => (
  {
    type: SET_ACTIVE_TABLE,
    id: id,
  }
);
export const addTable = (name) => (
  {
    type: ADD_TABLE,
    name: name,
  }
); 

export const updateTablePossition = ( id, x, y) => (
  {
    type: UPDATE_TABLE_POSSITION,
    id: id,
    x: x,
    y: y,
  }
); 
export const updateTable = ( name ) => (
  {
    type: UPDATE_TABLE,
    name: name,
  }
); 

export const addEvent = ( name, date) => (
    {
      type: ADD_EVENT,
      name: name,
      date: date,
    }
  ); 
export const toogleEvent = (name, date) => (
  {
    type: TOOGLE_EVENT,
    name: name,
    date: date, 
  }
);
export const updateGuest = (id, name, age) => (
  {
    type: UPDATE_GUEST,
    id: id,
    name: name,
    age: age,
  }
); 
export const addGuest = (name,age) => (
  {
    type: ADD_GUEST,
    name: name,
    age: age,
  }
);
export const updateEvent = (id,name,date) => (
  { type: UPDATE_EVENT,
  id: id,
  date: date,
  name: name,
}
);

export const setActiveGuest = (id) => (
  {
    type: SET_ACTIVE_GUEST,
    id: id,
  }
); 
export const setActiveEvent = (id) => (
  {
    type: SET_ACTIVE_EVENT,
    id: id,
  }
); 
export const sortByAge = () => (
  {
    type: SORT_BY_AGE,
  }
); 
export const sortByName = () => (
  {
    type: SORT_BY_NAME,
  }
); 

export const updateActiveGuest = (name) => (
  {
    type: UPDATE_ACTIVE_GUEST,
    name: name,
  }
);