const initState = {
    screen: false,
    msg: '',
    loader: false,
    header: '', // min, display-none, ''
    footer: '' // display-none, ''
}

export const generalReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_SCREEN':
            return { ...state, screen: action.screen }
        case 'SET_MSG':
            return { ...state, msg: action.msg }
        case 'SET_LOADER':
            return { ...state, loader: action.loader }
        case 'SET_HEADER':
            return { ...state, header: action.header }
        case 'SET_FOOTER':
            return { ...state, footer: action.footer }
        default: return state
    }
}