import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Chip } from '@material-ui/core';

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
const { id } = useParams;

const VIDEO = gql`
  query {
    video(id: ${id}) {
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

  const { loading, error, data } = useQuery(VIDEO, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Paper className={classes.paper} key={id}>
          <img src={data.video.poster} alt="video poster" />
          <div>{.name}</div>
          <div className={classes.tags}>
            {data.allVideos.items[0].Tags.map((tag) => (
              <Chip key={tag.name} label={tag.name} />
            ))}
          </div>
        </Paper>
      </Grid>
    </div>
  );
};

export default VideoPage;
