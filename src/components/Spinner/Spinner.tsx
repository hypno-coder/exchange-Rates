import { Dna } from  'react-loader-spinner'

const Spinner = (): JSX.Element => {
	return (
			<Dna
					visible={true}
					height="160"
					width="160"
					ariaLabel="dna-loading"
					wrapperStyle={{}}
					wrapperClass="dna-wrapper"
			/>
	);
};

export default Spinner;