import React from 'react';
import { HashRouter } from "react-router-dom";
import './App.scss';
import EcoLens from "./EcoLens";


function App() {
	return (
		<div className="App">
			<HashRouter>
				<EcoLens/>
			</HashRouter>
		</div>
	);
}

export default App;