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


// version for remove by Path and name

// const removeEntityByPath = (path, content) => {
//     const newContent = [...content];

//     if (path.length === 1) {

//         return newContent.filter(item => item.name !== path[0]);
//     }

//     const targetParent = path[0];
//     const newPath = path.slice(1, path.length);
//     console.log(newPath)
//     for (const item of newContent) {
//         if (item.name === targetParent) {
//             item.content = removeEntityByPath(newPath, item.content);
//         }
//     }

//     return newContent;
// }


//version for remove by Path and path

const removeEntityByPath = (path, content, level) => {
    const newContent = [...content];

    console.log(level+=1)


    if (path.length === 1) {
     
        

        return newContent.filter(el => el.path.split('/').slice(-1) != path[0])
        // return newContent.filter(item =>{
        //     debugger
        //     const b = item.path.split('/').slice(-1)
        //     console.log(b)
        //     console.log('path',path[0])
        //     return b[level] !== path[0]
        // }

       // );
    }

    const targetParent = path[0];
    const newPath = path.slice(1, path.length);

    for (const item of newContent) {
       
        const a = item.path.split('/');
        const b = a.slice(1, a.length);
        
        if (a[level] === targetParent) {
   
            item.content = removeEntityByPath(newPath, item.content, level++);
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
        newStructure.content = removeEntityByPath(path.slice(1, path.length), newStructure.content, 0); // version for remove by Path and path
        //newStructure.content = removeEntityByPath(path.slice(1, path.length), newStructure.content); // version for remove by Path and name
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

