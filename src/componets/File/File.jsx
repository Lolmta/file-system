import React from 'react';


import {BsTrash, BsFileEarmark} from 'react-icons/bs'
import styled from 'styled-components';

const StyledFile = styled.div`
padding: 8px 0 0 20px;
`;

const File = ({data, onDelete}) => (
    <StyledFile>
        <BsFileEarmark/>
        {data.name}
        <BsTrash onClick={() => onDelete(data)}/>
    </StyledFile>
);

export default File;
