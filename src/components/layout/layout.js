import React from 'react';
import classes from './layout.css';
import Aux from '../../hoc/AuxComponent';

const layout = (props) => {
	return (
		<Aux>
			<div> Tool Bar </div> <main className="Container"> {props.children} </main>
		</Aux>
	);
};

export default layout;
