import React from 'react'
import {auth} from './FirebasePh'
import {useAuthState} from 'react-firebase-hooks/auth'
import SignIn from "./Pages/SignIn"
import SignInCongrats from "./Pages/SignInCongrats"
import App from "./App"

function AppPh() {
    const [user] = useAuthState(auth);
    return (
         user ? <SignInCongrats /> : <SignIn />
    );
}

export default AppPh;
