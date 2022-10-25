import {ResultProps} from "./Result.props";
import styles from './Result.module.css';

const Result = ({arg1, arg2}: ResultProps): JSX.Element => {
	return (
			<>
				<div className={styles.arg1}>{arg1}</div>
				<div className={styles.arg2}>{arg2}</div>
			</>
	);
};

export default Result;