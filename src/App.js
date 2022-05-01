import './App.css';
import Tree from './componets/Tree/Tree';

import {useSelector } from 'react-redux';

function App() {

  const rootData = useSelector(state => state.fileSystem.structure)

  return (
    <div className="App">
     <Tree data={rootData}/>
    </div>
  );
}

export default App;
