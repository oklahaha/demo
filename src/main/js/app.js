const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {
    
    construtor(props) {
        super(props);
        this.state = {employees: []};
    }

    componentDidMount() {
        client({method: 'GET', path: '/user/list'}).done(rewponse => {
            this.setState({user: response.entity._embedded.user});
        });
    }
    
    render() {
        return (
            <UserList user={this.state.user}/>
        )
    }
    
}

class UserList extends React.Component{
    
}