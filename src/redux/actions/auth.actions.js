import {
    LOGIN,
    LOGOUT,
    SET_USER_INFO
} from '../types/auth.types';

export const login = ({username, password}, onSuccess, onError) => ({
    type: LOGIN,
    payload: { username, password, onSuccess, onError }
});

export const logout = () => ({
    type: LOGOUT
});

export const setUserInfo = (data) => ({
    type: SET_USER_INFO,
    payload: data
})