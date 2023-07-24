import { useState } from 'react'
import Accordion from './libs/Accordion'
function App() {

  return (
    <>
      <div className="App">
        <h4 className="logo StyleFont">Practice Projects - Accordion</h4>
      </div>
      <div className='App-Next'>
        <Accordion />
      </div>
      <hr />
    </>
  );
}

export default App
