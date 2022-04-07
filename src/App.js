import React from 'react'

import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Err1 from './components/Err1'

import { Suspense, useState } from 'react';
// import PersonDetail from './components/PersonDetail';

const PersonDetail = React.lazy(() => import('./components/PersonDetail'))
function App() {
  const [showApp, setshowApp] = useState(false)
  const calculate = (n1, n2) =>{
    // const total = add(n1, n2)
    // console.log('total', total)

    /* lazy loading i, e see network tab when clicked on button to the loading of file */
   import('./calculator/Calculator').then (calculator =>{
     console.log('Calculator', calculator)
     const total = calculator.add(n1, n2)
     console.log('total', total);
   }
    )
  }
  return (
    <div className="App">
      <ErrorBoundary>
        <Person/>
      </ErrorBoundary>

      
      <Err1>
        <PersonList/>
      </Err1>
     <button onClick = {() => {calculate(10,20)}}>Add</button>
     {
       showApp && <Suspense fallback = {<p>Loading....</p>}>
         <PersonDetail/>
    </Suspense> 
}
   <button onClick = {() => {setshowApp(true)}}>AddApp</button>
    </div>
  );
}

export default App;
