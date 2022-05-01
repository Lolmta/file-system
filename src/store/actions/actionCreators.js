import { SET_LAST_DELETED } from './actionTypes';

export let setLastDeleted = (entity) =>
({ type: SET_LAST_DELETED, payload: entity })