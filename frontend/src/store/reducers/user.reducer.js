import { userService } from '../../services/user.service'

const initState = {
    user: userService.getLoggedinUser()
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user }
        default: return state
    }
}