import update from 'immutability-helper';
import { COLUMN } from '../../js/constants';
import {
    reorderChildren,
    handleMoveToDifferentParent,
    handleMoveSidebarComponentIntoParent,
    handleMoveSidebarColumnIntoParent,
    handleMoveSidebarInnerSectionIntoParent,
    removeChildFromChildren,
    insert,
    duplicate
} from "../../services/wap.service";

const initialState = {
    _id: null,
    selected: null,
    name: '',
    cmps: [],
    style: {},
    chat: {
        isEnabled: false,
        openingText: "Hello, how can I help you?",
        answerText: "Thank you, we will get back to you soon."
    },
}

export function wapReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_WAP':
            return {
                ...state,
                _id: action._id,
                cmps: action.cmps,
                style: action.style,
                chat: action.chat,
                name: action.name
            }

        case 'REMOVE_ITEM':
            return {
                ...state,
                cmps: removeChildFromChildren(
                    [...state.cmps],
                    action.item
                ),
            }

        case 'DUPLICATE_ITEM':
            return {
                ...state,
                cmps: duplicate(
                    state.cmps,
                    action.item
                )
            }

        case 'MOVE_SIDEBAR_COMPONENT_INTO_PARENT':
            return {
                ...state,
                cmps: handleMoveSidebarComponentIntoParent(
                    state.cmps,
                    action.splitDropZonePath,
                    action.newItem
                )
            }

        case 'MOVE_SIDEBAR_COLUMN_INTO_PARENT':
            return {
                ...state,
                cmps: handleMoveSidebarColumnIntoParent(
                    state.cmps,
                    action.splitDropZonePath
                )
            }

        case 'MOVE_SIDEBAR_INNER_SECTION_INTO_PARENT':
            return {
                ...state,
                cmps: handleMoveSidebarInnerSectionIntoParent(
                    state.cmps,
                    action.splitDropZonePath
                )
            }

        case 'MOVE_WITHIN_PARENT':
            return {
                ...state,
                cmps: reorderChildren(state.cmps, action.splitDropZonePath, action.splitItemPath)
            }

        case 'MOVE_TO_DIFFERENT_PARENT':
            return {
                ...state,
                cmps: handleMoveToDifferentParent(
                    state.cmps,
                    action.splitDropZonePath,
                    action.splitItemPath,
                    action.item
                )
            }

        case 'MOVE_SECTION':
            const { dragIndex, hoverIndex } = action;
            const dragSection = state.cmps[dragIndex];
            return update(state, {
                cmps: {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragSection],
                    ],
                }
            });

        case 'UPDATE_COMPONENT':
            const { comp, field, value } = action;
            if (!comp || (!field && field !== 0) || !value) return state
            var newLayout = JSON.parse(JSON.stringify(state))
            var { path } = comp;
            switch (path.length) {
                case 1:
                    newLayout.cmps[path[0]][field] = value;
                    break;
                case 2:

                    newLayout.cmps[path[0]].cmps[path[1]][field] = value;
                    break;
                case 3:
                    if (comp.type === COLUMN) newLayout.cmps[path[0]].cmps[path[1]].cmps[path[2]][field] = value;
                    else if (comp.component && comp.component.type === 'nav') newLayout.cmps[path[0]].cmps[path[1]].cmps[path[2]].component.data.links[field].txt = value
                    else newLayout.cmps[path[0]].cmps[path[1]].cmps[path[2]].component[field] = value;
                    break;
                default:
                    if (comp.component && comp.component.type === 'nav') {
                        let currPath = newLayout.cmps[path[0]].cmps[path[1]].cmps[path[2]].cmps[path[3]].component.data.links
                        currPath = currPath.filter(link => link.txt)
                        currPath[field].txt = value
                    }
                    else newLayout.cmps[path[0]].cmps[path[1]].cmps[path[2]].cmps[path[3]].component[field] = value;
                    break;
            }
            return newLayout;

        case 'SET_SELECTED':
            return { ...state, selected: action.selected };

        case 'INSERT_ITEM':
            var cmps = insert(state.cmps, action.index, action.newItem);
            return { ...state, cmps: cmps }
        case 'SET_CHAT_ENABLED':
            return { ...state, chat: { ...state.chat, isEnabled: action.isChatEnabled } };
        case 'CHAT_OPENING_TEXT_CHANGE':
            return { ...state, chat: { ...state.chat, openingText: action.openingText } };
        case 'CHAT_ANSWER_TEXT_CHANGE':
            return { ...state, chat: { ...state.chat, answerText: action.answerText } };

        default:
            return state;
    }


}