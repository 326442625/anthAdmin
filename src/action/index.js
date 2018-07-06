/**
 * Created by 叶子 on 2017/7/30.
 */
import {USERINFO,RESPONSIVE} from './type'; 

export const updateUser = (data) => ({
    type: USERINFO,
    data
});
export const responsive = (data) => ({
    type: RESPONSIVE,
    data
});