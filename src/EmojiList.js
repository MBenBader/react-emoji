import React, { useEffect } from "react";
import Emoji from "./Emoji";
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';


function EmojiList(props) {
    const emojis = useSelector(state => state.emojiReducer.emojis)
    const filtre = useSelector(state => state.emojiReducer.filtre)
    const [emojisToDisplay, setEmojisToDisplay] = React.useState([]);

    useEffect(() => {
        let test = [];
        test = emojis.filter(element => {
            return element.title.toLowerCase().includes(filtre.toLowerCase())
        })
        setEmojisToDisplay(test);
    }, [filtre]);
    
    useEffect(() => {
        setEmojisToDisplay(emojis);
    }, []);


    return (
        <div>
            <div>
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