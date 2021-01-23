import { useQuery, gql } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
}));

const VIDEO = gql`
  query video($id: ID!) {
    video(id: $id) {
      id
      url
      name
      Tags {
        id
        name
      }
      poster
    }
  }
`;

const VideoPage = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(VIDEO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Paper className={classes.paper} key={data.video.id}>
          <img src={data.video.poster} alt="video poster" />
        </Paper>
      </Grid>
    </div>
  );
};

export default VideoPage;
