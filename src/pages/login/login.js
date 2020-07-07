import React, {Component } from 'react';
// import ReactDOM from 'react-dom';
import './login.less'
import EbigInputItem from '../../components/ebigInputItem'
import EbigButton from '../../components/ebigButton'

class Login extends Component {
    // 构造函数初始化
    constructor(props){
        super(props)
        // 初始化事件和state
        this.state = {
            passWord:'',
            userName:''
        }
    }
    // 生命周期
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    // 方法
    onLogin = (arg) => {
        // console.log("父组件调用子组件：" + arg)
        // console.log(this.checkInputTxt._input.value)
        localStorage.setItem("userMsg",JSON.stringify(this.state))
        this.props.history.goBack()
    }
    onUserNameChange = (arg) => {
        this.setState({
            userName:arg
        })
    }
    onPassWordChange = (arg) => {
        this.setState({
            passWord:arg
        })
    }
    // 组件渲染
    render(){
        return (
            <div className="login">
                <div className="login-li"><EbigInputItem value={this.state.userName} onChange={this.onUserNameChange}/></div>
                <div className="login-li"><EbigInputItem value={this.state.passWord} onChange={this.onPassWordChange}/></div>
                <div className="login-li"><EbigInputItem ref={(checkInput) => this.checkInputTxt = checkInput}/></div>
                <div className="login-li"><EbigButton type="primary" onSubmit={this.onLogin}>登录</EbigButton></div>
                <div>
                    账号：{this.state.userName}<br />
                    密码：{this.state.passWord}
                </div>
            </div>
        )
    }
}
export default Login;