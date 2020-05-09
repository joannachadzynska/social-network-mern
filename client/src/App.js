import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { loadUser } from "./redux/actions/auth.actions";
import { Provider } from "react-redux";
import store from "./redux/store";
import setAuthToken from "./utils/setAuthToken";

// Components
import { Navbar, Landing, Alert } from "./components/layout";
import { Login, Register } from "./components/auth";
import Dashboard from "./components/dashboard";
import PrivateRoute from "./components/routing";
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
						<Route exact path='/register' component={Register} />

						<Route exact path='/login' component={Login} />

						<PrivateRoute exact path='/dashboard' component={Dashboard} />
					</Switch>
				</section>
			</Router>
		</Provider>
	);
};

export default App;
