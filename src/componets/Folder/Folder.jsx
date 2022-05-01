import React from 'react'
import Tree from './../Tree/Tree';
import File from '../File/File';
import { useState } from 'react';

const Folder = ({ data }) => {


  //внутри фолдера если контент то контернт.мап дата => three(data) вызываю дерево 


  console.log('Folder', data)

  const content = data.content
  // const [isOpen, setIsOpen] = useState(false);

  // const handleToggle = e => {
  //   e.preventDefault();
  //   setIsOpen(!isOpen);
  // };

  const Render = () => {
    return content ? content.map((data) => <Tree data={data} />) : <File data={data}/>
  }


  return (
    <div>
        {data.name}
        <Render/>
    </div>
  )
}

export default Folder