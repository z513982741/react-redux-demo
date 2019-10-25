import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.addList = this.addList.bind(this)
        //----------关键代码-----------start
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
        //----------关键代码-----------end
    }
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input
                        placeholder={this.state.inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        onChange={this.changeInputValue}
                        value={this.state.inputValue}
                    >
                    </Input>
                    <Button type="primary" onClick={this.addList}>增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(Item,index) => (<List.Item onClick={this.removeList.bind(this,index)}>{Item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
    addList(){
        const action = {
            type: 'addList'
        }
        store.dispatch(action)
    }
    removeList(value){
        const action = {
            type: 'removeList',
            value: value
        }
        store.dispatch(action)
    }
    changeInputValue(e) {
        const action = {
            type: 'changeInput',
            value: e.target.value
        }
        store.dispatch(action)
    }
    storeChange() {
        // 修改视图层
        this.setState(store.getState())
    }
}

export default TodoList;