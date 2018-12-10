import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = props => {
    if (props.currentUser) {
        return (
        <div>
            <h3>Welcome, {props.currentUser.username}!</h3>
            <button onClick={props.logout}>Logout</button>
        </div>
        )
    } else {
        return (
            <h3>
                <Link to='/signup'>Sign Up!</Link>
                <Link to='/login'>Log In!</Link>
            </h3>
        )
    }
}

export default Greeting;