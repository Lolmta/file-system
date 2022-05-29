import { fileSystem } from './fileSystem';
import { setLastDeleted, setNewStructure } from './../actions/actionCreators';

describe('file sistem reducer test', () => {

    const initialState = {
        structure: {
            name: 'App.js',
            path: '/src/App.js',
            type: 'file',
            content: null
        },
        lastDeleted: null
    }

    test('should set last deleted', () => {
        const lastDeleted = {
            name: 'App.js',
            path: '/src/App.js',
            type: 'file',
            content: null
        }
        const state = { lastDeleted: null }
        const action = setLastDeleted(lastDeleted)
        const newState = fileSystem(state, action)

        expect(newState.lastDeleted).toBe(lastDeleted)
    });

    test('should set new structure', () => {
        const structure = initialState.structure
        const state = { structure: null }
        const action = setNewStructure(structure)
        const newState = fileSystem(state, action)

        expect(newState.structure).toBe(structure)
    });

    test('should return the default state', () => {
        const newState = fileSystem(initialState, { type: undefined })

        expect(newState).toBe(initialState)
    });
});


