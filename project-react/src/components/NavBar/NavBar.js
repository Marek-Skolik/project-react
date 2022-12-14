import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
            <Container>
                <div className={styles.navigation}>
                    <a className={styles.icon} href="/"><span className="fa fa-tasks" /></a>
                    <ul className={styles.list}>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined } to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined } to="/favorite">Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined } to="/about">About</NavLink></li>
                    </ul>
                </div>
            </Container>   
        </nav>
    )
}

export default NavBar;