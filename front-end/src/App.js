import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Setup from './components/Setup';
import NavBar from './components/NavBar'

class App extends React.Component{
	render(){
		return(
			<Router>
	    		<div className="container">
					<div className="row">
						<Route path="/" component={NavBar} />
						<Route exact path="/" component={Home} />
						<Route exact path="/setup" component={Setup} />
					</div>
				</div>
			</Router>
		)
  	}
}

export default App;
