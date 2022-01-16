import { socketService } from "../../services/socket.service";
import { wapService } from "../../services/waps.service";
import { setMsg } from "./general.actions";

export function saveWap(wap) {
    return async dispatch => {
        try {
            const savedWap = await wapService.save(wap)
            dispatch({
                type: 'SET_WAP',
                _id: savedWap._id,
                name: savedWap.name,
                cmps: savedWap.cmps,
                style: savedWap.style,
                chat: wap.chat || {
                    isEnabled: false,
                    openingText: "Hello, how can I help you?",
                    answerText: "Thank you, we will get back to you soon."
                }
            });
        }
        catch (err) {
            dispatch(setMsg({ type: 'error', txt: 'Failed to save app.' }))
        }
    }
}

export function loadWap(wapId, wapName) {
    return async dispatch => {
        try {
            let wap
            if (wapId) wap = await wapService.getById(wapId);
            else wap = await wapService.getByName(wapName);

            dispatch({
                type: 'SET_WAP',
                _id: wap._id,
                owner: wap?.owner ? wap.owner : '',
                cmps: wap.cmps,
                name: wap.name,
                style: wap.style,
                chat: wap.chat || {
                    isEnabled: false,
                    openingText: "Hey ☺ \n I'm the digital representative, how can I help you?",
                    answerText: "Thank you for contacting us, we will reach back to you in a short time."
                }
            })
        } catch (err) {
            dispatch(setMsg({ type: 'error', txt: 'Failed to find app.' }))
            throw err
        }
    }
}

export function setWap(_id, cmps, style = {}, chat, name) {
    return dispatch => dispatch({
        type: 'SET_WAP',
        _id,
        cmps,
        style,
        chat,
        name
    });
}

export function removeItem(splitItemPath, type) {
    const action = {
        type: 'REMOVE_ITEM',
        item: { splitItemPath, type }
    }
    socketService.emit('wap new change', action);
    return dispatch => dispatch(action);
}

export function duplicateItem(splitItemPath, type) {
    const action = {
        type: 'DUPLICATE_ITEM',
        item: { splitItemPath, type }
    }
    socketService.emit('wap new change', action);
    return dispatch => dispatch(action);

}

export function moveSidebarComponentIntoParent(splitDropZonePath, newItem) {
    const action = {
        type: 'MOVE_SIDEBAR_COMPONENT_INTO_PARENT',
        splitDropZonePath,
        newItem
    }
    socketService.emit('wap new change', action);
    return dispatch => dispatch(action);
}

export function moveSidebarColumnIntoParent(splitDropZonePath) {
    const action = {
        type: 'MOVE_SIDEBAR_COLUMN_INTO_PARENT',
        splitDropZonePath
    }
    socketService.emit('wap new change', action);
    return dispatch => dispatch(action);
}

export function moveSidebarInnerSectionIntoParent(splitDropZonePath) {
    const action = {
        type: 'MOVE_SIDEBAR_INNER_SECTION_INTO_PARENT',
        splitDropZonePath
    }
    socketService.emit('wap new change', action);
    return dispatch => dispatch(action);
}

export function moveWithinParent(splitDropZonePath, splitItemPath) {
    const action = {
        type: 'MOVE_WITHIN_PARENT',
        splitDropZonePath,
        splitItemPath
    }
    socketService.emit('wap new change', action);
    return dispatch => dispatch(action);
}

export function moveToDifferentParent(splitDropZonePath, splitItemPath, item) {
    const action = {
        type: 'MOVE_TO_DIFFERENT_PARENT',
        splitDropZonePath,
        splitItemPath,
        item
    }
    socketService.emit('wap new change', action);
    return dispatch => dispatch(action);
}

export function updateCmp(comp, field, value) {
    const action = {
        type: 'UPDATE_COMPONENT',
        comp,
        field,
        value
    }
    socketService.emit('wap new change', action);
    return dispatch => dispatch(action);
}

export function setSelected(selected) {
    return dispatch => dispatch({
        type: 'SET_SELECTED',
        selected
    });
}

export function insert(index, newItem) {
    const action = {
        type: 'INSERT_ITEM',
        index,
        newItem
    }
    socketService.emit('wap new change', action);
    return dispatch => dispatch(action);
}

export function reorderColumns(cmps, itemIdx, hoverIdx, path) {
    return dispatch => dispatch({
        type: 'REORDER_COLUMNS',
        props: { cmps, path, itemIdx, hoverIdx }
    })
}

export function setChatIsEnabled(isChatEnabled) {
    const action = {
        type: 'SET_CHAT_ENABLED',
        isChatEnabled
    }
    socketService.emit('wap new change', action);
    return dispatch => dispatch(action);
}

export function chatOpeningTextChange(openingText) {
    const action = {
        type: 'CHAT_OPENING_TEXT_CHANGE',
        openingText
    }
    socketService.emit('wap new change', action);
    return dispatch => dispatch(action);
}

export function chatAnswerTextChange(answerText) {
    const action = {
        type: 'CHAT_ANSWER_TEXT_CHANGE',
        answerText
    }
    socketService.emit('wap new change', action);
    return dispatch => dispatch(action);
}

export function dispatchAction(action) {
    return dispatch => dispatch(action);
}