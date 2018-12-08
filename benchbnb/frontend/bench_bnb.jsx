import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});

window.createNewUser = SessionAPIUtil.createNewUser
window.login = SessionAPIUtil.login
window.logout = SessionAPIUtil.logout