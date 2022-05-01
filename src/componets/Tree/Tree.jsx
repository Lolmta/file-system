import React from 'react';

import Folder from '../Folder/Folder';
import File from '../File/File';

const Tree = ({ data }) => {

  return (data.type === 'folder' ?
    <Folder data={data}>
      {data.content ? data.content.map(data => <Tree data={data} />) : <File data={data} />}
    </Folder> :
    <File data={data} />
  );
}

export default Tree;

