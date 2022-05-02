import {legacy_createStore as createStore} from 'redux'
import {combineReducers} from 'redux';
import {fileSystem} from './reducers/fileSystem';

const rootReducer = combineReducers({
    fileSystem
})

export const store = createStore(rootReducer)
