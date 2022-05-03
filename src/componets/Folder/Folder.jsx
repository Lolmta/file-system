import React, { useState } from 'react';

import styled from 'styled-components';
import { BsTrash , BsFolder, BsFolder2Open} from "react-icons/bs";

const Collapsible = styled.div`
  height: ${p => (p.isOpen ? 'auto' : '0')};
  overflow: hidden;
  border-left: 1px dashed #383838;
`;

const StyledFolder = styled.div`
padding: 8px 0 0 20px;
font-size:18px;
.name{
    padding:0px 10px 0px;
}
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
                    <span className='name'>{data.name}</span>
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
