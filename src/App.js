import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Tree from './componets/Tree/Tree';
import { setLastDeleted, setNewStructure } from './store/actions/actionCreators';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin-left:20px;
  margin-top:20px;
  padding: 0.25em 1em;
  font-size:16px;
`

const removeEntityByPath = (path, content, level) => {
    const newContent = [...content];
    level+=1
    const targetParent = path[0]

    if (path.length === 1) {
        return newContent.filter(item => item.path.split('/')
        .slice(-1) != targetParent)
    }

    const newPath = path.slice(1, path.length);

    for (const item of newContent) {
        const separatedPath = item.path.split('/');
        if (separatedPath[level] === targetParent) {
            item.content = removeEntityByPath(newPath, item.content, level);
        }
    }
    return newContent;
}



const restoreEntityByPath = (path, content, lastDeleted) => {

    const newContent = [...content];

    if (path.length === 1) {
        newContent.push(lastDeleted)
        return newContent
    }

    const targetParent = path[0];
    const newPath = path.slice(1, path.length);
    for (const item of newContent) {

        if (item.name === targetParent) {
            item.content = restoreEntityByPath(newPath, item.content, lastDeleted);
        }
    }
    return newContent;
}


function App() {
    const dispatch = useDispatch();
    const structure = useSelector(state => state.fileSystem.structure);
    const lastDeleted = useSelector(state => state.fileSystem.lastDeleted);


    const handleDelete = (item) => {

        if (item.path === '/') {
            dispatch(setNewStructure({}));
            dispatch(setLastDeleted(item))
            return;
        }

        const path = item.path.split('/');

        const newStructure = { ...structure };
        newStructure.content = removeEntityByPath(path.slice(1, path.length), newStructure.content, 0);
        dispatch(setNewStructure(newStructure));
        dispatch(setLastDeleted(item));
    };

    const handleRestore = () => {

        if (lastDeleted.path === '/') {
            dispatch(setNewStructure(lastDeleted))
            return;
        }

        const path = lastDeleted.path.split('/');


        const newStructure = { ...structure };
        //newStructure.content = restoreEntityByPath(path.slice(1, path.length), newStructure.content, 0, lastDeleted); 
        newStructure.content = restoreEntityByPath(path.slice(1, path.length), newStructure.content, lastDeleted);
        dispatch(setNewStructure(newStructure));
        dispatch(setLastDeleted(null));
    };




    return (
        <div className="App">
            <Tree data={structure} onDelete={handleDelete} />
            <Button onClick={handleRestore}>Restore last deleted</Button>
        </div>
    );
}

export default App;

