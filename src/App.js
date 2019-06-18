import React from 'react';
import './App.css';
import Layout from './components/layout/layout';
import FormApp from './components/formApp';

function App() {
	return (
		<div className="App">
			<Layout>
				<FormApp> </FormApp>
			</Layout>
		</div>
	);
}

export default App;
