import { createActions, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import axios from 'axios';
import { openNotification } from '../notifications';
export const userProfileSelector = state => state.auth.userProfile;
export const userPermissionsSelector = state => state.auth.permissions;
export const accessTokenSelector = state => state.auth.accessToken;
export const isAuthorizedSelector = state => !!state.auth.accessToken;
export const {
  loginUserRequest,
  registrationUserRequest,
  setProfileData,
  logoutUser
} = createActions(
  {
    LOGIN_USER_REQUEST: n => n,
    REGISTRATION_USER_REQUEST: n => n,
    SET_PROFILE_DATA: n => n,
    LOGOUT_USER: n => n
  },
  { prefix: 'AUTH' }
);

const userProfile = handleActions(
  {
    [setProfileData]: (state, action) => {
      const {
        id,
        image,
        middleName,
        surName,
        username,
        firstName
      } = action.payload;
      return { id, image, firstName, middleName, surName, username };
    },
    [logoutUser]: () => null
  },
  null
);
const defaultPermissions = {
  chat: { C: false, D: false, R: false, U: false },
  news: { C: false, D: false, R: false, U: false },
  settings: { C: false, D: false, R: false, U: false }
};
const permissions = handleActions(
  {
    [setProfileData]: (state, action) => {
      const { permission } = action.payload;
      return permission;
    },
    [logoutUser]: () => defaultPermissions
  },
  defaultPermissions
);

const accessToken = handleActions(
  {
    [setProfileData]: (state, action) => {
      const { access_token } = action.payload;
      return access_token;
    },
    [logoutUser]: () => null
  },
  null
);

export default combineReducers({
  userProfile,
  permissions,
  accessToken
});

export const loginUser = ({ username, password }) => dispatch =>
  new Promise((resolve, reject) => {
    const data = {
      username,
      password
    };
    axios
      .post('http://localhost:3000/api/login', data)
      .then(response => {
        dispatch(
          openNotification({ text: 'Вы успешно вошли!', variant: 'success' })
        );
        dispatch(setProfileData(response.data));
        resolve(data);
      })
      .catch(error => {
        dispatch(
          openNotification({
            text: error.response.data.message,
            variant: 'error'
          })
        );
        reject(error);
      });
  });

export const registerUser = ({
  username,
  password,
  firstname,
  lastname,
  patronicname
}) => dispatch =>
  new Promise((resolve, reject) => {
    const data = {
      username,
      surName: lastname,
      firstName: firstname,
      middleName: patronicname,
      password
    };
    axios
      .post('http://localhost:3000/api/registration', data)
      .then(response => {
        dispatch(
          openNotification({
            text: 'Вы успешно зарегистрированы!',
            variant: 'success'
          })
        );
        resolve(data);
      })
      .catch(error => {
        dispatch(
          openNotification({
            text: error.response.data.message,
            variant: 'error'
          })
        );
        reject(error);
      });
  });
