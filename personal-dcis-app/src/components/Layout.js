import Navbar from './Navbar';
import classes from './Navbar.module.css';

function Layout(props) {
      return (
            <div>
                  <Navbar />
                  <main className={classes.main}>{props.children}</main>
            </div>
      );
}

export default Layout;