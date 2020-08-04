import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    console.log('useEffect called!');
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(err => console.log('Oh noes!', err))
  }, []);

  return (
    <div className="App">
      <h1>What breed is your next dog going to be?</h1>
      <img src={data} alt="A random dog breed" />
      <button onClick={() => window.location.reload(false)}>You sure you don't want this one?"</button>
    </div>
  );
}

export default App;

