import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios'

// 文本框值改变
export const changInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})
// 添加数据
export const addItemAction = () => ({
    type: ADD_ITEM
})
// 删除数据
export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

// 删除数据
export const getListAction = (data) => ({
    type: GET_LIST,
    data
})
// 获取LIST数据
export const getTodoList = (dispatch) => {
    return (dispatch) =>{
        // dispatch redux-thunk 自动生成
        axios.get('http://rap2api.taobao.org/app/mock/234915/api/getList')
            .then(res => {
                const { status, data } = res;
                if (status === 200) {
                    const action = getListAction(data)
                    dispatch(action)
                }
            })
    }
    
}