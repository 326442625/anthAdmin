/**
 * Created by hao.cheng on 2017/4/16.
 */
import axios from 'axios';
import { get, post } from './tools'; 
 
// easy-mock数据交互
export const login = (param) => post({url: 'login',data:param}); 