import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
			searchInput: '',
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
				<input
					className='search-box'
					type='text'
					placeholder='Search for GitHub User'
					onChange={(e) => {
						console.log(e.target.value);
						// filter thru users and get what you want
						const filteredUsers = users.filter((user) => {
							return user.login.includes(e.target.value);
						});

						this.setState(() => {
							return { users: filteredUsers };
						});
					}}
				/>
				{users.map((user) => (
					<h1 key={user.id}>{user.login}</h1>
				))}
			</div>
		);
	}
}

export default App;
