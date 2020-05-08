import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar, Landing } from "./components/layout";
import { Login, Register } from "./components/auth";
import "./App.css";

const App = () => (
	<Router>
		<Navbar />
		<Route exact path='/'>
			<Landing />
		</Route>
		<section className='container'>
			<Switch>
				<Route exact path='/register'>
					<Register />
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
			</Switch>
		</section>
	</Router>
);

export default App;
