import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Proyects from './components/proyects/Proyects';

import ProjectState from './context/projects/projectState';
import TaskState from './context/tasks/taskState';

function App() {
	return (
		<ProjectState>
			<TaskState>
				<Router>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/new-account" component={NewAccount} />
						<Route exact path="/proyects" component={Proyects} />
					</Switch>
				</Router>
			</TaskState>
		</ProjectState>
	);
}

export default App;
