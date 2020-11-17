import logo from './logo.svg';
import './App.css';
import Axios from "axios"
import React, { useState, useEffect } from 'react';
import EmojiList from './EmojiList';

function App() {

  const [emojis, setEmojis] = useState([]);

  // Équivalent à componentDidMount plus componentDidUpdate :
  useEffect(() => {
    Axios.get("https://apiemojies.herokuapp.com/all").then(response => {
      setEmojis(response.data)
    })
  });

  return (
    <div className="App">
      <EmojiList emojis={emojis} />
    </div>
  );
}

export default App;
