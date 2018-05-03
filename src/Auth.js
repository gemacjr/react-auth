import auth0, { WebAuth } from 'auth0-js';
import history from './history';

class Auth {
    auth0 = new WebAuth({
        domain: 'swiftbeard.auth0.com',
        clientID: 'FOCEmKrQENDar2IG0hWf8tQKgN5rQwKb',
        redirectUri: 'http://localhost:1234/callback',
        responseType: 'token id_token'

    });

    login = () => {
        this.auth0.authorize();
    }

    handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) => {
            if (authResult) {
                localStorage.setItem('access_token', authResult.accessToken);
                localStorage.setItem('expires_at', JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime()));
                history.replace('/');
            }else if (err) {
                console.log('err', err);
            }
        });
    }

    logout = () => {

    }

    isAuthenticated() {
        return false;
    }
}

export default Auth;

