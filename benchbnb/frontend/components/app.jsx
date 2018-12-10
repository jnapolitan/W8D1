import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <header>
        <h1>Bench BnB</h1>
        <GreetingContainer />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
    </header>
)

export default App;