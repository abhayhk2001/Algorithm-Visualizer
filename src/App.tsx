import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.scss';
import Floyd from './components/Floyd';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Warshall from './components/Warshall';
import AlgorithmBlock from './components/AlgorithmBlock';
import 'codemirror/theme/dracula.css'

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<div className="main-content">
					<Switch>
						<Route path="/warshall/algorithm">
							<AlgorithmBlock />
						</Route>
						<Route path="/floyd">
							<Floyd />
						</Route>
						<Route path="/warshall">
							<Warshall />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
