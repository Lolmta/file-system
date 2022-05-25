import { removeEntityByPath } from "./remove-restore";

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
                },
            ]
        },
        {
            name: 'package-lock.json',
            path: '/package-lock.json',
            type: 'file',
            content: null
        }
    ]
}

const content = structure.content

// const arr = [{"content": 
// [{"content": null, "name": "App.js", "path": "/src/App.js", "type": "file"}], "name": "src", "path": "/src", "type": "folder"},
//  {"content": null, "name": "package-lock.json", "path": "/package-lock.json", "type": "file"}]

  describe('remove-entity', () => {
    
    // test('remove equal to resived result', () => {
    //     const path = 'src/App.js'
    //     const content = structure.content
    //     expect(removeEntityByPath(path, content)).toEqual(expect.arrayContaining(arr))
    //   });
      test('remove entity not undefined', () => {
        const path = 'src/App.js'
        expect(removeEntityByPath(path, content)).not.toBeUndefined();
      });

    //   test('path.length === 1', ()=> {
    //     const path = 'src'
    //     const spyFilter = jest.spyOn(newContent , 'filter')
    //     removeEntityByPath(path, content)
    //     expect(spyFilter).toBeCalledTimes(1)
    //   })
    
  });