import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import classes from './Layout.module.css';

export default function Layout() {
  return (
    <div className={classes.wrapper}>
      <Navbar />
      <main className={classes.mainWrapper}>
        <Outlet />
      </main>
    </div>
  );
}
