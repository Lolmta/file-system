import { setLastDeleted, setNewStructure } from "./actionCreators";
import { SET_LAST_DELETED , SET_NEW_STRUCTURE} from './actionTypes';

describe('action creators test', () => {
    test('setLastDeleted', () => {
        expect(setLastDeleted({
            lastDeleted: 'this one has been removed'
        }))
            .toEqual({
                type: SET_LAST_DELETED,
                payload: {
                    lastDeleted: 'this one has been removed'
                }
            })
    });

    test('setNewStructure', () => {
        expect(setNewStructure({
            structure: 'new structure'
        }))
            .toEqual({
                type: SET_NEW_STRUCTURE,
                payload: {
                    structure: 'new structure'
                }
            })
    });
})