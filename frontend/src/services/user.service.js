import { httpService } from './http.service'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

async function signup(userCred) {
    try {
        const user = await httpService.post('auth/signup', userCred);
        return _saveLocalUser(user);
    } catch (err) {
        throw ('Error to signup. Please try later.')
    }
}

async function login(userCred) {
    try {
        const user = await httpService.post('auth/login', userCred);
        if (user) return _saveLocalUser(user);
    } catch (err) {
        if (err?.response?.status === 401) throw ('Wrong username or password')
        else throw ('Error to login. Please try later.')
    }
}

async function logout() {
    return await httpService.post('auth/logout')
        .then(() => sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, null));
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || null);
}

function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
    return user
}

export const userService = {
    signup,
    login,
    logout,
    getLoggedinUser
}