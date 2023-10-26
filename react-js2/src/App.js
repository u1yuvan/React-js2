import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log("App Component Rendered");
let [resourseType, setResourseType] = useState('Home');

useEffect(() => {
  console.log(resourseType);
}, [resourseType]);

 return (
  <div className='App'>
      <button onClick={() => {setResourseType('Home')}}>HOME</button>
      <button onClick={() => {setResourseType('About')}}>ABOUT</button>
      <button onClick={() => {setResourseType('Contact')}}>CONTACT</button>
      <h3>{resourseType}</h3>
  </div>
 );
}

export default App;
