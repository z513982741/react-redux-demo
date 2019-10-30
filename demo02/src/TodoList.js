import React, { Component } from 'react';
import store from './store'
import {connect} from 'react-redux'
import {changeInputAction, addItemAction, deleteItemAction,getTodoList} from './store/actionCreators'

class TodoList extends Component {
    render() {
        let {inputValue,inputChang,addItem,list,deleteItem} = this.props
        return (  
            <div>
                <div>
                    <input 
                        value={inputValue}
                        onChange={inputChang}
                        />
                    <button onClick={addItem}>提交</button>
                </div>
                <div>
                    <ul>
                        {
                            list.map((item,index) =>{
                                return (
                                    <li 
                                        key={index+item} 
                                        onClick={() => {deleteItem(index)}}
                                    >{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)
    }
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChang(e){
            let action = changeInputAction(e.target.value)
            dispatch(action)
        },
        addItem(){
            let action = addItemAction()
            dispatch(action)
        },
        deleteItem(index){
            let action = deleteItemAction(index)
            dispatch(action)
        },
    }
}
export default connect(stateToProps,dispatchToProps)(TodoList);