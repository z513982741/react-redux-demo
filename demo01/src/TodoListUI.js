import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
const TodoListUI = (props) => {
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <Input
                    placeholder={props.inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                >
                </Input>
                <Button type="primary" onClick={props.addList}>增加</Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(Item, index) => (<List.Item onClick={() => {props.removeList(index)}}>{Item}</List.Item>)}
                />
            </div>
        </div>
    );
}

export default TodoListUI;