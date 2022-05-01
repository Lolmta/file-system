import { SET_LAST_DELETED } from './../actions/actionTypes';
import { initialState } from './../initialState';

const fileSystemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LAST_DELETED:
            return{
                ...state,
                lastDeleted:action.payload
            }
        default:
            return state;
    }
}

export default fileSystemReducer;