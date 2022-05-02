import React from 'react';

import Folder from '../Folder/Folder';
import File from '../File/File';

const Tree = ({data, onDelete}) => {
    if (data.type === 'folder') {
        const content = data.content
            ? data.content.map(data => <Tree key={data.path} data={data} onDelete={onDelete}/>)
            : <File data={data} onDelete={onDelete}/>;

        return <Folder data={data} onDelete={onDelete}>{content}</Folder>;
    }

    return <File data={data} onDelete={onDelete}/>;
}

export default Tree;
