import { utilService } from './util.service'

const STORAGE_KEY_USERS = 'users'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const gUsers = JSON.parse(localStorage.getItem(STORAGE_KEY_USERS)) || []

const signup = async creds => {
    await _delay()

    if (gUsers.some(u => u.username === creds.username)) return Promise.reject('user exists')
    const user = { ...creds }
    user._id = utilService.makeId()
    gUsers.push({ ...user })
    _saveUsers()
    delete user.password
    return _saveLocalUser(user)
}

const login = async creds => {
    await _delay()
    
    let user = gUsers.find(u => {
        return u.username === creds.username && u.password === creds.password
    })
    if (!user) return Promise.reject('wrong username or password')
    user = { ...user }
    delete user.password
    return _saveLocalUser(user)
}

const logout = async () => {
    await _delay()
    
    return Promise.resolve(sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER))
}

const getLoggedinUser = () => {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

const _saveUsers = () => {
    localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(gUsers))
}

const _saveLocalUser = (user) => {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return Promise.resolve(user)
}

const _delay = () => {
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res()
        }, 500)
    })
}
export const userService = {
    signup,
    login,
    logout,
    getLoggedinUser
}