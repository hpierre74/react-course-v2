import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardDescription: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export function ArticleCard({ article }) {
  const { name, year, image, slug, price } = article;
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={image} title={name} />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <div className={classes.cardDescription}>
            <Typography>{year}</Typography>
            <Typography>{price} $</Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {}}
            size="small"
            color="secondary"
            variant="outlined"
          >
            Lorem
          </Button>
          <Button
            size="small"
            component={Link}
            to={`/articles/${slug}`}
            color="primary"
            variant="outlined"
          >
            See more
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
