export const removeEntityByPath = (path, content, level=0) => {
    const newContent = [...content];
    level+=1
    const targetParent = path[0]

    if (path.length === 1) {
        return newContent.filter(item => item.path.split('/')
        .slice(-1) != targetParent)
    }

    const newPath = path.slice(1, path.length);

    for (const item of newContent) {
        const separatedPath = item.path.split('/');
        if (separatedPath[level] === targetParent) {
            item.content = removeEntityByPath(newPath, item.content, level);
        }
    }
    return newContent;
}

export const restoreEntityByPath = (path, content, lastDeleted, level=0) => {

    const newContent = [...content];
    level+=1

    if (path.length === 1) {
        newContent.push(lastDeleted)
        return newContent
    }

    const targetParent = path[0];
    const newPath = path.slice(1, path.length);
    for (const item of newContent) {
        const separatedPath = item.path.split('/');
        if (separatedPath[level] === targetParent) {
            item.content = restoreEntityByPath(newPath, item.content, lastDeleted, level);
        }
    }
    return newContent;
}


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

const path = 'src/App.js'
const content = structure.content

console.log(removeEntityByPath(path, content))