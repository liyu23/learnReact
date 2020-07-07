import React, {Component } from 'react';
// import ReactDOM from 'react-dom';
import EbigInputItem from '../../components/ebigInputItem'
import EbigButton from '../../components/ebigButton'

let listData = [];

class ReduxTest extends Component {
    // 构造函数初始化
    constructor(props){
        super(props)
        // 初始化事件和state
        this.state = {
            len:0,
        }
    }
    // 生命周期
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    // 方法
    onAddRow = (arg) => {
        // console.log("父组件调用子组件：" + arg)
        console.log(this.checkInputTxt._input.value)
        listData.push(this.checkInputTxt._input.value)
        this.setState(prevState => ({
            len:prevState.len+1
        }))
    }
    // 组件渲染
    render(){
        const listItems = listData.map((number,index) =>
            <div key={index}>
                {number}
            </div>
        );
        return (
            <div className="login">
                <div>
                    {listItems}
                </div>
                <div>数据长度：{this.state.len}</div>
                <div className="login-li"><EbigInputItem ref={(checkInput) => this.checkInputTxt = checkInput}/></div>
                <div className="login-li"><EbigButton type="primary" onSubmit={this.onAddRow}>添加一行数据</EbigButton></div>
            </div>
        )
    }
}
export default ReduxTest;