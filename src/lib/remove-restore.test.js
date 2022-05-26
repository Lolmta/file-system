import { cleanup } from "@testing-library/react";
import { removeEntityByPath , restoreEntityByPath} from "./remove-restore";

afterEach(cleanup)

describe('remove func test', () => {

  const structure = {
    name: 'root',
    path: '/',
    type: 'folder',
    content: [
      {
        name: 'src',
        path: '/src',
        type: 'folder',
        content: [
          {
            name: 'App.js',
            path: '/src/App.js',
            type: 'file',
            content: null
          }]
      }]
  }

  const path = ['src', 'App.js']

  test('should return the content without the removed value', () => {
    const newContent = removeEntityByPath(path, structure.content)
    expect(newContent[0].content).toEqual([]);
  });

});


describe('restore func test', () => {

  const structure = {
    name: 'root',
    path: '/',
    type: 'folder',
    content: [
      {
        name: 'src',
        path: '/src',
        type: 'folder',
        content: []
      }]
  }

  const lastDeleted =  {
    name: 'App.js',
    path: '/src/App.js',
    type: 'file',
    content: null
  }
  const path = ['src', 'App.js']

  test('should push newContent', () => {
    let newContent = restoreEntityByPath(path, structure.content, lastDeleted)
    expect(...newContent[0].content).toEqual(lastDeleted)
  });

});