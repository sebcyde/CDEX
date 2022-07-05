import './App.css';
import M from 'materialize-css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Navbar, Icon, NavItem, Button } from 'react-materialize';

import Dashboard from './Components/Dashboard/Dashboard';
import LoadingScreen from './Components/Loading Screen/LoadingScreen';

function App() {
	const [Loading, setLoading] = useState(true);

	setTimeout(() => {
		setLoading(false);
	}, 3000);

	return (
		<Router>
			<div className="App">
				{Loading ? (
					<LoadingScreen />
				) : (
					<>
						<Navbar
							alignLinks="left"
							brand={
								<a className="brand-logo right NavTitle" href="#">
									<span class="material-symbols-outlined">person</span>
								</a>
							}
							id="mobile-nav"
							menuIcon={
								<Icon>
									<span class="material-symbols-outlined">more_horiz</span>
								</Icon>
							}
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
							<h2 className="NavMenuTitle">Menu</h2>
							<Link to={'/'} className="nav-link NavItem">
								Getting Started
							</Link>
							<Link to={'/'} className="nav-link NavItem">
								Dashboard
							</Link>
						</Navbar>
						<Button
							className="red"
							fab={{
								direction: 'left',
								hoverEnabled: false,
							}}
							floating
							large
							node="button"
						>
							<Button floating icon={<Icon>insert_chart</Icon>} node="button" />
							<Button floating icon={<Icon>format_quote</Icon>} node="button" />
							<Button floating icon={<Icon>publish</Icon>} node="button" />
							<Button
								floating
								icon={
									<Icon>
										<span class="material-symbols-outlined">logout</span>
									</Icon>
								}
								node="button"
							/>
						</Button>
						<Routes>
							<Route exact path="/" element={<Dashboard />} />
							{/* <Route path="/contact" component={} />
					<Route path="/about" component={} /> */}
						</Routes>
					</>
				)}
			</div>
		</Router>
	);
}

export default App;
