import React from 'react';
import './App.css';
import {Frame} from './Components/Frame/Frame';
import {Counter} from './Components/Counter/Counter';

function App() {


  return (
    <div className={'App'}>
        <Frame>
        </Frame>
        <Frame>
            <Counter/>
        </Frame>
    </div>
  );
}

export default App;

