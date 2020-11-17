import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Emoji(props) {

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.emoji.title}
                    {props.emoji.symbol}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Emoji;