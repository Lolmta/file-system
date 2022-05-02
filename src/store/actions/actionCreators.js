import {SET_LAST_DELETED, SET_NEW_STRUCTURE} from './actionTypes';

export let setLastDeleted = (entity) =>
    ({type: SET_LAST_DELETED, payload: entity})

export let setNewStructure = (structure) =>
    ({type: SET_NEW_STRUCTURE, payload: structure})
