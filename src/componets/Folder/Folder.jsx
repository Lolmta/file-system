import React from 'react'
import Tree from './../Tree/Tree';
import File from '../File/File';

import { useState } from 'react';

import styled from 'styled-components'
import { FaBeer } from "react-icons/fa";

const Collapsible = styled.div`
  height: ${p => (p.isOpen ? 'auto' : '0')};
  overflow: hidden;
`;


const Folder = ({ data }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const content = data.content

  const Render = () => {
    return content ? content.map((data) => <Tree data={data} />)
      : <File data={data} />
  }


  return (
    <div >
      <div onClick={handleToggle}>
        <FaBeer />{data.name}
      </div>
      <Collapsible isOpen={isOpen}><Render /></Collapsible>
    </div>
  )
}

export default Folder