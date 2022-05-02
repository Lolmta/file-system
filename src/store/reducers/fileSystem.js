import {SET_LAST_DELETED, SET_NEW_STRUCTURE} from '../actions/actionTypes';
import {initialState} from '../initialState';

export const fileSystem = (state = initialState, action) => {
    switch (action.type) {
        case SET_LAST_DELETED:
            return {
                ...state,
                lastDeleted: action.payload
            }
        case SET_NEW_STRUCTURE:
            return {
                ...state,
                structure: action.payload
            };
        default:
            return state;
    }
}
