import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Navbar, Icon, NavItem } from 'react-materialize';
import M from 'materialize-css';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar
					alignLinks="left"
					brand={
						<a className="brand-logo right NavTitle" href="#">
							CDEX
						</a>
					}
					id="mobile-nav"
					menuIcon={<Icon>menu</Icon>}
					options={{
						draggable: true,
						edge: 'left',
						inDuration: 250,
						onCloseEnd: null,
						onCloseStart: null,
						onOpenEnd: null,
						onOpenStart: null,
						outDuration: 200,
						preventScrolling: true,
					}}
				>
					<NavItem onClick={function noRefCheck() {}}>Getting started</NavItem>
					<NavItem href="components.html">Components</NavItem>
				</Navbar>
				<Routes>
					<Route exact path="/" element={<Dashboard />} />
					{/* <Route path="/contact" component={} />
					<Route path="/about" component={} /> */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
