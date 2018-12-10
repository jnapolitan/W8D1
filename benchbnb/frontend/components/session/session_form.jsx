import React from 'react';
import { Link } from 'react-router-dom';


export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => (
            this.setState({[field]: e.target.value})
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }

    render () {
        return (
            <div>
                <ul>{this.props.errors}</ul>
                <h1>{this.props.formType}</h1>
                {this.props.formType === 'signup' ?
                    <Link to='/login'>or login</Link> :
                    <Link to='/signup'>or signup</Link>}
                <form onSubmit={this.handleSubmit}>
                <label>Username:
                    <input type="text" value={this.state.username} onChange={this.update('username')} />
                </label>
                <label>Password:
                    <input type="password" value={this.state.password} onChange={this.update('password')} />
                </label>
                <button type="submit">{this.props.formType}</button>
                </form>
            </div>
        )
        
    }

}
