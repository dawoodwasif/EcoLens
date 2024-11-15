import React, { Component } from "react";
import HomePage from "./HomePage/HomePage";
import DashBoard from "./DashBoard/DashBoard";
import Contribute from "./Contribute/Contribute";
import HeaderBar from "./HeaderBar/HeaderBar";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

class EcoLens extends Component {
	constructor() {
		super();
		this.state = { loggedIn: false }
	}

	render() {
		return (
			<React.Fragment>
				<header>
					<HeaderBar/>
				</header>
				<Switch>
						<Route path={"/contribute/"} render={()=> React.cloneElement(<Contribute/>, {loggedIn: this.state.loggedIn})} />
						<Route path={"/dashboard/"} render={()=> React.cloneElement(<DashBoard/>, {loggedIn: this.state.loggedIn})} />
						<Route exact path={"/" || !this.state.loggedIn} render={()=> React.cloneElement(<HomePage/>, {loggedIn: this.state.loggedIn})} />
						<Redirect from='*' to='/' />
					</Switch>
			</React.Fragment>
		);
	}
}
export default withRouter(EcoLens);