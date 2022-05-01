export let initialState = {
    structure : {
        name: 'root',
        path: '/',
        type: 'folder',
        content: [
         {
          name: 'firstFolder',
          path: '/anyName',
          type: 'folder',
          content: [
            {
                name: 'file1',
                path: '/anyName',
                type: 'file',
                content: null
               },
               {
                name: 'file 2',
                path: '/anyName',
                type: 'file',
                content: null
               }
          ]
         },
         {
          name: 'first File',
          path: '/anyName',
          type: 'file',
          content: null
         },
         {
            name: 'secondFolder',
            path: '/anyName',
            type: 'folder',
            content: [
              {
                  name: 'file 4',
                  path: '/anyName',
                  type: 'file',
                  content: null
                 },
                 {
                  name: 'file 5',
                  path: '/anyName',
                  type: 'file',
                  content: null
                 }
            ]
           }
        ]
       },
    lastDeleted:null
}