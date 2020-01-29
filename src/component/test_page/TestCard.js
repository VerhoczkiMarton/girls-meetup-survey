import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RadioButton from "./RadioButton";

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function TestCard(props) {
    const classes = useStyles();
    return (
        <Card className={[classes.card, 'testcard']}>
            <CardContent>

                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    OLYAN MUNKÁT SZERETNÉK, AHOL AZ EMBER...
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.question}.
                </Typography>

            </CardContent>
            <CardActions style={{justifyContent:"center"}}>
                <RadioButton questionId={props.questionId}/>
            </CardActions>
        </Card>
    );
}
