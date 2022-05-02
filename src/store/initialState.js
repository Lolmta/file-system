export let initialState = {
    structure: {
        name: 'root',
        path: '/',
        type: 'folder',
        content: [
            {
                name: 'firstFolder',
                path: '/firstFolder',
                type: 'folder',
                content: [
                    {
                        name: 'file1',
                        path: '/firstFolder/file1',
                        type: 'file',
                        content: null
                    },
                    {
                        name: 'file 2',
                        path: '/firstFolder/file 2',
                        type: 'file',
                        content: null
                    }
                ]
            },
            {
                name: 'first File',
                path: '/first File',
                type: 'file',
                content: null
            },
            {
                name: 'secondFolder',
                path: '/secondFolder',
                type: 'folder',
                content: [
                    {
                        name: 'file 4',
                        path: '/secondFolder/file 4',
                        type: 'file',
                        content: null
                    },
                    {
                        name: 'folder5',
                        path: '/secondFolder/folder5',
                        type: 'folder',
                        content: [
                            {
                                name: 'file6',
                                path: '/secondFolder/folder5/file6',
                                type: 'file',
                                content: null
                            }
                        ]
                    }
                ]
            }
        ]
    },
    lastDeleted: null
}
