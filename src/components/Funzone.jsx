import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/client';
import FUNZONE from '../queries/funzone';
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

const Funzone = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(FUNZONE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data.allVideos.items.map((item) => (
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} key={item.id}>
              <img src={item.poster} alt="video poster" />
              <div>{item.name}</div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Funzone;
