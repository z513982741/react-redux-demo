import React, { Component } from 'react';

import store from './store'
import { changInputAction, addItemAction, deleteItemAction, getTodoList } from './store/actionCreators'
import TodolistUI from './TodoListUI'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.addList = this.addList.bind(this)
        this.removeList = this.removeList.bind(this)
        //----------关键代码-----------start
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
        //----------关键代码-----------end
    }
    render() {
        return (
            <TodolistUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                addList={this.addList}
                list={this.state.list}
                removeList={this.removeList}
            />
        );
    }
    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)
    }
    addList() {
        const action = addItemAction()
        store.dispatch(action)
    }
    removeList(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    changeInputValue(e) {
        const action = changInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange() {
        // 修改视图层
        this.setState(store.getState())
    }
}

export default TodoList;