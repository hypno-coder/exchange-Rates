import {ResultProps} from "./Result.props";
import styles from './Result.module.css';
import React from "react";

const Result = ({convertData}: ResultProps): JSX.Element => {
	return (
			<div className={styles.result}>
				<span>{convertData.query.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
				<span>{convertData.query.from.toLowerCase()}</span>
				<span>=</span>
				<span>{convertData.result.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
				<span>{convertData.query.to.toLowerCase()}</span>
			</div>
	);
};

export default Result;