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
