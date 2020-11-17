import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

function Emoji(props) {

    return (
        <Grid item xs={3}>

            <Card style={{margin:"auto"}}>
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
        </Grid>

    );
}

export default Emoji;