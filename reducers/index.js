import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import guestReducer from "./guestReducer";
import venueReducer from "./venueReducer";
import noteReducer from "./noteReducer";

export default combineReducers({
 event: eventReducer,
 guest: guestReducer,
 venue: venueReducer,
 note: noteReducer,
});
