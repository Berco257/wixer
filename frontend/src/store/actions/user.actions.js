import { userService } from '../../services/user.service'
import { setMsg } from '../actions/general.actions'

export const onSignup = creds => _setUser('signup', creds)
export const onLogin = creds => _setUser('login', creds)
export const onLogout = () => _setUser('logout')

const _setUser = (funcName, creds = null) => {
    return async dispatch => {
        try {
            const user = await userService[funcName](creds)
            dispatch({
                type: 'SET_USER',
                user
            })
            dispatch(setMsg({ type: 'success', txt: `${funcName} success` }))
            return user
        } catch (err) {
            dispatch(setMsg({ type: 'error', txt: err }))
            return err
        }
    }
}