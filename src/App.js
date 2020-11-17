import logo from './logo.svg';
import './App.css';
import Axios from "axios"
import React, { useState, useEffect } from 'react';
import EmojiList from './EmojiList';
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const [emojis, setEmojis] = useState([]);

  // Équivalent à componentDidMount plus componentDidUpdate :
  useEffect(() => {
    Axios.get("https://apiemojies.herokuapp.com/all").then(response => {
      // setEmojis(response.data)
      dispatch({ type: 'SET_EMOJIS', payload : response.data })
    })
  });

  return (
    <div className="App">
      <EmojiList emojis={emojis} />
    </div>
  );
}

export default App;
