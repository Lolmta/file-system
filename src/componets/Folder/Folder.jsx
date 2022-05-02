import React, { useState } from 'react';

import styled from 'styled-components';
import { BsTrash , BsFolder, BsFolder2Open} from "react-icons/bs";

const Collapsible = styled.div`
  height: ${p => (p.isOpen ? 'auto' : '0')};
  overflow: hidden;
`;

const StyledFolder = styled.div`
padding: 8px 0 0 20px;
font-size:18px;

.flexbl {
    display: flex;
    align-items: center;
  }
`;

const Folder = ({ data, children, onDelete }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (

        <StyledFolder>
            <div className='flexbl'>
                <div className='flexbl' onClick={handleToggle}>
                   {!isOpen?<BsFolder />:<BsFolder2Open/>} 
                    {data.name}
                </div>
                <BsTrash onClick={() => onDelete(data)} />
            </div>
            <Collapsible isOpen={isOpen}>
                {children}
            </Collapsible>
        </StyledFolder>


    )
};

export default Folder;
