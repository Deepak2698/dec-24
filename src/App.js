
import './App.css';
// import ClassComponent from './view/ClassComponent';
// import Functional from './view/Functional';

import Intro from './view/Intro';
import ClassComponent from './view/ClassComponent';
import Functional from './view/Functional';
import Parent1 from './Props/Parent1';
import Parent2 from './Props/Parent2';
import Parent from './Props/Parent';
import ParentFn from './Props/ParentFn';
import Lifecycle from './view/LifeCycle';
import TextState from './view/TextState';


function App() {
  return (
    <div >
     <Lifecycle/>
     <TextState/>
    </div>
  );
}

export default App;
