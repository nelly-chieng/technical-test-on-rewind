/* eslint-disable object-shorthand */
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from 'react-icons/io';
import ALL_VIDEOS from '../queries/allVideos';
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
}));
// end material css

const Home = () => {
  const classes = useStyles();

  const { loading, error, data, fetchMore } = useQuery(ALL_VIDEOS);

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
                    alt={item.name}
                    className={classes.img}
                  />
                )}
              </Link>
              <div className="videoName">{item.name}</div>
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
        <IoIosArrowDropleftCircle
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
          className="icon"
          size="4rem"
        />

        <IoIosArrowDroprightCircle
          onClick={() => {
            const { after } = data.allVideos.cursor;
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
          className="icon"
          size="4rem"
        />
      </Grid>
    </div>
  );
};

export default Home;
