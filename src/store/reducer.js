const defaultState = {
    inputValue: '',
    list: [
        '09.55到公司楼下打卡',
        '10.55点外卖',
        '11.55开始吃午饭'
    ]
}
export default (state = defaultState, action) => {
    // reducer 不允许直接修改state
    if(action.type === 'changeInput'){
        // 深拷贝
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if(action.type === 'addList'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
        newState.inputValue = ''
        return newState
    }

    if(action.type === 'removeList'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value,1);
        return newState
    }
    return state;
}