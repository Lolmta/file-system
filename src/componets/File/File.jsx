import React from 'react';

import { AiFillFile } from 'react-icons/ai';

const File = ({ data }) => (
    <div>
        <AiFillFile/>
        { data.name }
    </div>
);

export default File;