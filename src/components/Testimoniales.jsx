/* eslint-disable object-shorthand */
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/client';
import { Button, Chip } from '@material-ui/core';
import TESTIMONIALES from '../queries/testimoniales';
import placeholder from '../images/placeholder.jpeg';

// material UI css
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  tags: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
      marginTop: '10px',
      marginBottom: '10px',
    },
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Testimoniales = () => {
  const classes = useStyles();

  const { loading, error, data, fetchMore } = useQuery(TESTIMONIALES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className={`bodyMargin ${classes.root}`}>
      <Grid container spacing={3} className="bottomMarginPage">
        {data.allVideos.items.map((item) => (
          <Grid item xs={12} sm={6}>
            <Paper className={`cardHeight${classes.paper}`} key={item.id}>
              <Link to={`/video/${item.id}`}>
                {item.poster === null ? (
                  <img
                    src={placeholder}
                    alt="placeholder"
                    className={classes.img}
                  />
                ) : (
                  <img
                    src={item.poster}
                    alt="video poster"
                    className={classes.img}
                  />
                )}
              </Link>
              <div>{item.name}</div>
              <div className={classes.tags}>
                {data.allVideos.items[0].Tags.map((tag) => (
                  <Chip key={tag.name} label={tag.name} className="tag" />
                ))}
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid>
        <Button
          onClick={() => {
            const { before } = data.allVideos.cursor;
            fetchMore({
              variables: { before: before },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                  return prev;
                }
                return fetchMoreResult;
              },
            });
          }}
          variant="outlined"
          className={classes.button}
        >
          Less
        </Button>
        <Button
          onClick={() => {
            const { after } = data.allVideos.cursor;
            fetchMore({
              // eslint-disable-next-line object-shorthand
              variables: { after: after },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                  return prev;
                }
                return fetchMoreResult;
              },
            });
          }}
          variant="outlined"
          className={classes.button}
        >
          More
        </Button>
      </Grid>
    </div>
  );
};

export default Testimoniales;
