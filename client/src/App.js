import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Landing, Alert } from "./components/layout";
import { Login, Register } from "./components/auth";
import { loadUser } from "./redux/actions/auth.actions";
import { Provider } from "react-redux";
import store from "./redux/store";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";

const App = () => {
	useEffect(() => {
		setAuthToken(localStorage.token);
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Route exact path='/'>
					<Landing />
				</Route>
				<section className='container'>
					<Alert />
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
		</Provider>
	);
};

export default App;
