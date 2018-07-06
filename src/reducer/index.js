/**
 * Created by 叶子 on 2017/7/30.
 */
import { combineReducers } from 'redux';
import * as type from '../action/type';

const userInfo=(state = {}, action)=>{
    switch (action.type) {
        case type.USERINFO:
            return action.data;
        default:
            return state
    }
}
const responsive=(state = {}, action)=>{
    switch (action.type) {
        case type.RESPONSIVE:
            return action.data;
        default:
            return state
    }
}

export default combineReducers({
    userInfo,responsive
});
