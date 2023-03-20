import SideDrawer from './SideDrawer';
import classes from './MainNavigation.module.css';
import { useState } from 'react';

function MainNavigation() {
  const [showDrawer, setShowDrawer] = useState(false);

  function toggleDrawer() {
    setShowDrawer((current) => !current)
  }

  return (
    <>
    <header className={classes.header}>
      <h1>Demo App</h1>
      <button className={classes.btn} onClick={toggleDrawer}>
        <div />
        <div />
        <div />
      </button>
    </header>
    { showDrawer && <SideDrawer toggleDrawer={toggleDrawer} />}
    </>
  );
}

export default MainNavigation;
