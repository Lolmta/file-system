export let initialState = {
    structure : {
        name: 'root',
        path: '/',
        type: 'folder',
        uid:1,
        content: [
         {
          name: 'firstFolder',
          path: '/anyName',
          type: 'folder',
          uid:11,
          content: [
            {
                name: 'file1',
                path: '/anyName',
                type: 'file',
                content: null,
                uid:111
               },
               {
                name: 'file 2',
                path: '/anyName',
                type: 'file',
                content: null,
                uaid:112
               }
          ]
         },
         {
          name: 'first File',
          path: '/anyName',
          type: 'file',
          content: null,
          uid:2
         },
         {
            name: 'secondFolder',
            path: '/anyName',
            type: 'folder',
            uid:21,
            content: [
              {
                  name: 'file 4',
                  path: '/anyName',
                  type: 'file',
                  content: null,
                  uid:211
                 },
                 {
                  name: 'file 5',
                  path: '/anyName',
                  type: 'file',
                  content: null,
                  uid:212
                 }
            ]
           }
        ]
       },
    lastDeleted:null
}