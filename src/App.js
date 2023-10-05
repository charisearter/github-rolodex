import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
		};
	}

	componentDidMount() {
		fetch('https://api.github.com/users')
			.then((response) => response.json())
			.then((usersData) => {
				this.setState(
					() => {
						return { users: usersData };
					},
					() => {
						console.log(this.state);
					}
				);
			});
	}
	render() {
		const { users } = this.state;
		return (
			<div className='App'>
				{users.map((user) => (
					<h1 key={user.id}>{user.login}</h1>
				))}
			</div>
		);
	}
}

export default App;
