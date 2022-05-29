import React from 'react';

import {BsTrash, BsFileEarmark} from 'react-icons/bs'
import styled from 'styled-components';

const StyledFile = styled.div`
padding: 8px 0 0 20px;
display: flex;
    flex-direction: row;
    align-items: center;
.name{
    padding:0px 10px 0px;
}
`;

const File = ({data, onDelete}) => (
    <StyledFile data-testid="StyledFile" >
        <BsFileEarmark data-testid="file"/>
        <span className='name'>{data.name}</span>
        <BsTrash data-testid="onDelete" onClick={() => onDelete(data)}/>
    </StyledFile>
);

export default File;
