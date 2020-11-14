import { combineReducers } from "redux";

import auth from "./auth";
import event from "./event";
import volunteer from "./volunteer";

export default combineReducers({ auth, event, volunteer });
