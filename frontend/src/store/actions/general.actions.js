export const setScreen = screen => ({
    type: 'SET_SCREEN',
    screen
})

export const setLoader = loader => ({
    type: 'SET_LOADER',
    loader
})

export const setHeader = header => ({
    type: 'SET_HEADER',
    header
})

export const setFooter = footer => ({
    type: 'SET_FOOTER',
    footer
})

let timeout
export const setMsg = msg => {
    return dispatch => {
        dispatch({
            type: 'SET_MSG',
            msg: (typeof msg.txt === 'string' ? msg : 'Error. Please try later.')
        })
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            dispatch({
                type: 'SET_MSG',
                msg: ''
            })
        }, 4000)
    }
}