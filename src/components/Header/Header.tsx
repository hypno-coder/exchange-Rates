import styles from './Header.module.css';
import BaseСurrency from "../../components/BaseСurrency/BaseСurrency";
import {Link} from "react-router-dom";

const Header = (): JSX.Element => {
	return (
      <header className={styles.header}>
	      <div className={styles.headerContentWrapper}>
		      <BaseСurrency/>
		      <ul className={styles.navLinks}>
			      <li><Link to="converter">конвертер валют</Link></li>
			      <li><Link to="/">курсы валют</Link></li>
		      </ul>
	      </div>
      </header>
	);
};

export default Header;