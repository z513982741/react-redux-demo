import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
const defaultState = {
    inputValue: '',
    list: []
}
export default (state = defaultState, action) => {
    // reducer 不允许直接修改state
    if (action.type === CHANGE_INPUT) {
        // 深拷贝
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
        newState.inputValue = ''
        return newState
    }

    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1);
        return newState
    }

    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data.list;
        return newState
    }

    return state;
}