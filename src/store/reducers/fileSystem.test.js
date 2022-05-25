import { fileSystem } from "./fileSystem";
import { setLastDeleted, setNewStructure } from './../actions/actionCreators';

describe('set last deeted item test', () => {

    test('last deleted should be set', () => {
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


});

describe('set structure test', () => {

    test('set new structure', () => {
        const structure = {
            name: 'App.js',
            path: '/src/App.js',
            type: 'file',
            content: null
        } 
        const state = {structure: null}
        const action = setNewStructure(structure) 
        const newState = fileSystem(state,action)

        expect(newState.structure).toBe(structure)
      });

      test('set structur to null', () => {
        const state = {structure: {
            name: 'App.js',
            path: '/src/App.js',
            type: 'file',
            content: null
        } }
        const action = setNewStructure(null) 
        const newState = fileSystem(state,action)
        expect(newState.structure).toBeNull()
      });


})

