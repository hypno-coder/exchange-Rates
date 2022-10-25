import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface OptionProps extends DetailedHTMLProps<HTMLAttributes<HTMLOptionElement>, HTMLOptionElement>{
	value: string;
	name: string;
}