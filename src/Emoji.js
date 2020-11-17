import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Emoji(props) {

    const onCopy = () => {
        console.log("Copied");
    };

    return (
        <Grid item xs={3}>
            <CopyToClipboard onCopy={onCopy} text={props.emoji.symbol}>
                <Card style={{ margin: "auto" }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {props.emoji.title}
                                {props.emoji.symbol}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {props.emoji.keywords}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </CopyToClipboard>
        </Grid>

    );
}

export default Emoji;