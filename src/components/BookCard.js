import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    media: {
      height: "100%",
      textAlign: "center"
    }
  });

export default function BookCard({cardBook:book}) {
    const classes = useStyles();

    return (

            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media}>
                <img
                  src="https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png"
                  width="60%"
                ></img>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {book.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {book.id}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

    )
}

