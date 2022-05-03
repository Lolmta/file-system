export let initialState = {
    structure: {
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
                        name: 'components',
                        path: '/src/components',
                        type: 'folder',
                        content: [
                            {
                                name: 'File',
                                path: '/src/components/File',
                                type: 'folder',
                                content: [
                                    {
                                        name: 'file.jsx',
                                        path: '/src/components/File/file.jsx',
                                        type: 'file',
                                        content: null
                                    },
                                ]
                            },
                            {
                                name: 'Folder',
                                path: '/src/components/Folder',
                                type: 'folder',
                                content: [
                                    {
                                        name: 'folder.jsx',
                                        path: '/src/components/Folder/folder.jsx',
                                        type: 'file',
                                        content: null
                                    },
                                ]
                            },
                            {
                                name: 'Tree',
                                path: '/src/components/Tree',
                                type: 'folder',
                                content: [
                                    {
                                        name: 'tree.jsx',
                                        path: '/src/components/Tree/tree.jsx',
                                        type: 'file',
                                        content: null
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        name: 'App.js',
                        path: '/src/App.js',
                        type: 'file',
                        content: null
                    },
                    {
                        name: 'App.css',
                        path: '/src/App.css',
                        type: 'file',
                        content: null
                    },
                    {
                        name: 'store',
                        path: '/src/store',
                        type: 'folder',
                        content: [
                            {
                                name: 'actions',
                                path: '/src/store/actions',
                                type: 'folder',
                                content: [
                                    {
                                        name: 'actionCreators.js',
                                        path: '/src/store/actions/actionCreators.js',
                                        type: 'file',
                                        content: null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'package-lock.json',
                path: '/package-lock.json',
                type: 'file',
                content: null
            },
            {
                name: 'package.json',
                path: '/package.json',
                type: 'file',
                content: null
            }
        ]
    },
    lastDeleted: null
}
