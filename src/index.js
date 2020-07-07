// react 入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // 引入全局样式？
import App from './App'; // 加载app模块
import Home from './pages/home/home'; // 加载app模块
import Login from './pages/login/login'; // 加载app模块
import Test from './pages/test/test'; // 加载app模块
import ReduxTest from './pages/reduxTest/reduxTest'; // 加载app模块

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import allReducers from './reducers'


import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route } from 'react-router-dom'

let store = createStore(allReducers)

// 打印初始状态
console.log("打印初始状态")
console.log(store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
store.subscribe(() =>
  console.log(store.getState())
)
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <Router>
          <Route exact path="/" component={App} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/test" component={Test} />
          <Route path="/redux" component={ReduxTest} />
        </Router>
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
