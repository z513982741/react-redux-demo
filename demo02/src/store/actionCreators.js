import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes';
import axios from 'axios'
export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})
export const addItemAction = () => ({
    type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

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