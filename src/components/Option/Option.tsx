import React from "react";
import {OptionProps} from "./Option.props";

const Option = ({value, name, ...props}: OptionProps): JSX.Element => {

	return (
			<option  value={value} {...props}>{name}</option>
	);
};

export default Option;