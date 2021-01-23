import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/client';
import { Chip } from '@material-ui/core';
import TESTIMONIALES from '../queries/testimoniales';
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
    },
  },
  img: {
    width: '100%',
    height: '100%',
  },
}));

const Testimoniales = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(TESTIMONIALES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data.allVideos.items.map((item) => (
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} key={item.id}>
              <img
                src={item.poster}
                alt="video poster"
                className={classes.img}
              />
              <div>{item.name}</div>
              <div className={classes.tags}>
                {data.allVideos.items[0].Tags.map((tag) => (
                  <Chip key={tag.name} label={tag.name} />
                ))}
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Testimoniales;
