import { legacy_createStore as createStore} from 'redux'
import { combineReducers} from "redux";
import fileSystemReducer from './reducers/file-system-reducer';

let rootReducer = combineReducers({
    fileSystem:fileSystemReducer
})

let store = createStore(rootReducer)

export default store;