import './App.css';
import Axios from "axios"
import React, { useEffect } from 'react';
import EmojiList from './EmojiList';
import { useDispatch, useSelector } from 'react-redux';
import MyAppBar from './MyAppBar';

function App() {
  const dispatch = useDispatch()
  /* const [emojis, setEmojis] = useState([]); */
  const emojis = useSelector(state => state.emojiReducer.emojis);

  // Équivalent à componentDidMount plus componentDidUpdate :
  useEffect(() => {
    Axios.get("https://apiemojies.herokuapp.com/all").then(response => {
      // setEmojis(response.data)
      dispatch({ type: 'SET_EMOJIS', payload: response.data.slice(0, 400) })
    })
  }, [dispatch]);



  return (
    <div className="App">
      <MyAppBar />
      {emojis.length && <EmojiList />}

    </div>
  );
}

export default App;
