import cookie from 'react-cookies'
import axios from 'axios'

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

export function signInAction({ username, password }, history) {
  return async (dispatch) => {

      let res = {
        data: {
          access_token: "aaa"
        }
      }
      /*
      axios
      .post('/blablalba', {
        username: this.username,
        password: this.password,
      })
      .then(function (response) {
      if(response) {
        this.setState({
          logs: response.data
        })
      } else {
        throw new Error('Something went wrooong !!!')
      }     
    })
    .catch(function (error) {
      console.log(error);
    });
    */

      if(res) {          
            dispatch({ type: AUTHENTICATED });
            cookie.save('user', res.data.access_token, { path: '/' })
            history.push('/table');
          }
  };
}

export function signOutAction() {
  cookie.remove('user', { path: '/' })
  return {
    type: UNAUTHENTICATED
  };
}