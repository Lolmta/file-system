import React, { useState } from 'react';

import styled from 'styled-components';
import { AiOutlineFolder } from 'react-icons/ai';

const Collapsible = styled.div`
  height: ${p => (p.isOpen ? 'auto' : '0')};
  overflow: hidden;
`;

const Folder = ({ data, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >
      <div onClick={handleToggle}>
        <AiOutlineFolder />
        {data.name}
      </div>
      <Collapsible isOpen={isOpen}>
        {children}
      </Collapsible>
    </div>
  )
};

export default Folder;