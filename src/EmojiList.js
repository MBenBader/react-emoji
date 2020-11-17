import React, { useEffect } from "react";
import Emoji from "./Emoji";
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';


function EmojiList(props) {
    const emojis = useSelector(state => state.emojiReducer.emojis)
    const filtre = useSelector(state => state.emojiReducer.filtre)
    const [emojisToDisplay, setEmojisToDisplay] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [count, setCount] = React.useState(1);

    const handleChange = (e, value) => {
        setPage(value)
    }

    useEffect(() => {
        let test = [];
        test = emojis.filter(element => {
            return element.title.toLowerCase().includes(filtre.toLowerCase())
        })
        setEmojisToDisplay(test);
        setCount(parseInt((test.length / 25).toFixed(0)))
    }, [filtre, emojis]);

    useEffect(() => {
        setCount(parseInt((emojis.length / 25).toFixed(0)))
        setEmojisToDisplay(emojis.slice(0, 25));
    }, [emojis]);

    useEffect(() => {
        setEmojisToDisplay(emojis.slice((page - 1) * 25, page * 25));
    }, [page, emojis]);


    return (
        <div>
            <div>
                <Pagination count={count} page={page} onChange={handleChange} />
                <Grid container spacing={3}>
                    {emojisToDisplay.map(element => {
                        return (
                            <Emoji key={element.title} emoji={element} />
                        )
                    })}
                </Grid>

            </div>
        </div>
    );
}

export default EmojiList;