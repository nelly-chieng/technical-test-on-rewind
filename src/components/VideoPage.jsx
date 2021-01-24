import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Chip } from '@material-ui/core';
import VIDEO from '../queries/video';
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
    width: '80%',
    margin: 'auto',
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
// end material UI css

const VideoPage = () => {
  const classes = useStyles();
  const { id } = useParams();

  const { loading, error, data } = useQuery(VIDEO, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className={`bodyMargin ${classes.root}`}>
      <Grid container spacing={3}>
        <Paper className={classes.paper} key={data.video.id}>
          {data.video.poster === null ? (
            <img src={placeholder} alt={data.video.name} />
          ) : (
            <img src={data.video.poster} alt="video poster" />
          )}

          <div>{data.video.name}</div>
          <div className={classes.tags}>
            {data.video.Tags.map((tag) => (
              <Chip key={tag.name} label={tag.name} className="tag" />
            ))}
          </div>
        </Paper>
      </Grid>
    </div>
  );
};

export default VideoPage;
