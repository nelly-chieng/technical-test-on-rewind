import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: '50px',
  },
});

function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <div className="spaceBetween">
        <Tab label="LOGO" component={Link} to="/" />

        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Funzone" component={Link} to="/funzone" />
          <Tab label="Testimoniales" component={Link} to="/testimoniales" />
        </Tabs>
      </div>
    </Paper>
  );
}

export default Header;
