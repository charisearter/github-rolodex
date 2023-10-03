import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Reese',
		};
	}
	render() {
		return (
			<div className='App'>
				<h1>Hello, {this.state.name}</h1>
				<button onClick={() => this.setState({ name: 'Fox' })}>
					Click to change Name
				</button>
			</div>
		);
	}
}

export default App;
