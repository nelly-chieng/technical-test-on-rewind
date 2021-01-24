import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

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
        <Link to="/">
          <img src={logo} alt="logo on rewind" className="logo" />
        </Link>

        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Funzone" component={Link} to="/funzone" />
          <Tab label="Testimoniales" component={Link} to="/testimoniales" />
        </Tabs>
      </div>
    </Paper>
  );
}

export default Header;
