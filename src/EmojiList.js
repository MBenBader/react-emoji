import React, { useState } from "react";
import Emoji from "./Emoji"

function EmojiList(props) {

    return (
        <div>
            <div>
                {props.emojis.map(element => {
                    return (
                        <Emoji key={element.title} emoji={element} />
                    )
                })}
            </div>
        </div>
    );
}

export default EmojiList;