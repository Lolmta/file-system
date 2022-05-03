import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Tree from './componets/Tree/Tree';
import { setLastDeleted, setNewStructure } from './store/actions/actionCreators';
import styled from 'styled-components';

import { removeEntityByPath, restoreEntityByPath } from './lib/remove-restore';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #4f978c;
  color: #4f978c;
  margin-left:20px;
  margin-top:20px;
  padding: 0.25em 1em;
  font-size:16px;

  &:disabled {
    color: #383838;
    border-color:#383838;
  }
`

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

        newStructure.content = removeEntityByPath(path.slice(1, path.length), newStructure.content);

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

        newStructure.content = restoreEntityByPath(path.slice(1, path.length), newStructure.content, lastDeleted);

        dispatch(setNewStructure(newStructure));
        dispatch(setLastDeleted(null));
    };

    return (
        <div className="App">
            <Tree data={structure} onDelete={handleDelete} />
            <Button onClick={handleRestore} disabled={!lastDeleted} >
                Restore last deleted
            </Button>
        </div>
    );
}

export default App;

