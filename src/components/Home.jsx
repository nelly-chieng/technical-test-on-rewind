/* eslint-disable object-shorthand */
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import ALL_VIDEOS from '../queries/allVideos';

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
  tag: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  const { loading, error, data, fetchMore } = useQuery(ALL_VIDEOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data.allVideos.items.map((item) => (
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} key={item.id}>
              <Link to={`/video/${item.id}`}>
                <img src={item.poster} alt="video poster" />
              </Link>
              <div>{item.name}</div>
              <div>
                {data.allVideos.items[0].Tags.map((tag) => (
                  <Chip
                    variant="outlined"
                    size="small"
                    key={tag.name}
                    label={tag.name}
                  />
                ))}
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid>
        <Button
          onClick={() => {
            const { after } = data.allVideos.cursor;
            console.log(after);

            fetchMore({
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

export default Home;
