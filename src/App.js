import React, {Component } from 'react';
// import ReactDOM from 'react-dom';
import {withRouter,Link} from "react-router-dom";
import './App.less'
class AppTop extends Component {
    onLogin = ()=> {
      this.props.history.push("/login");
    }
    onLogout = ()=> {
      localStorage.removeItem("userMsg")
      this.props.onLogout()
    }
    render(){
      let LoginStr
      if(this.props.isLogin){
        LoginStr = <div className="home-head-login">
              <img className="home-head-login-img" alt="医大智能" src={require("./images/icon-user.png")} />
              <div>某某，你好 <span onClick={this.onLogout}>退出</span></div>
            </div>
      }else {
        LoginStr = (<div className="home-head-login" onClick={this.onLogin}>
        <img className="home-head-login-img" alt="医大智能" src={require("./images/icon-user.png")} />
        <div>登陆</div>
      </div>)
      }
      return (<div className="home-head">
        <div className="home-head-logo">
          <img className="home-head-logo-img" alt="医大智能" src={require("./images/logo.png")} />
        </div>
        {LoginStr}
      </div>)
    }
}
function AppLeft(){
  return (<div className="home-left">
    <div className="home-left-li">
      <div className="home-left-ico">
        <img className="home-left-ico-img" alt="医大智能" src={require("./images/icon-sd.png")} />
      </div>
      <div className="home-left-con">
        <div className="home-left-con-tit">08:29</div>
        <div className="home-left-con-sub">2020/04/16 星期四</div>
      </div>
    </div>
    <div className="home-left-li">
      <div className="home-left-ico">
        <img className="home-left-ico-img" alt="医大智能" src={require("./images/icon-sd.png")} />
      </div>
      <div className="home-left-con">
        <div className="home-left-con-sub">温度</div>
        <div className="home-left-con-tit">4.0 °C</div>
      </div>
    </div>
    <div className="home-left-li">
      <div className="home-left-ico">
        <img className="home-left-ico-img" alt="医大智能" src={require("./images/icon-wd.png")} />
      </div>
      <div className="home-left-con">
        <div className="home-left-con-sub">湿度</div>
        <div className="home-left-con-tit">31.6 RH</div>
      </div>
    </div>
  </div>)
}
class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        isLogin:false
      }
    }
    // 生命周期
    componentDidMount() {
      let userMsg = localStorage.getItem("userMsg")
      if(userMsg) {
        this.setState({
          isLogin:true
        })
      }
    }
    componentWillUnmount() {
    }
    onLogout=()=>{
      this.setState({
        isLogin:false
      })
    }
    render(){
        return <div className="home">
            <AppLeft/>
            <AppTop history={this.props.history} isLogin={this.state.isLogin} onLogout={this.onLogout}/>
            <div className="home-right">
                <div className="home-face">人脸识别开门</div>
                <div className="home-nav">
                    <div className="home-nav-tab">
                        <img className="home-nav-tab-img" alt="开盒领用" src={require("./images/btn1.png")} />
                    </div>
                    <div className="home-nav-tab">
                        <img className="home-nav-tab-img" alt="效期预警" src={require("./images/btn2.png")} />
                    </div>
                    <div className="home-nav-tab">
                        <img className="home-nav-tab-img" alt="异常记录" src={require("./images/btn3.png")} />
                    </div>
                    <div className="home-nav-tab">
                        <img className="home-nav-tab-img" alt="操作记录" src={require("./images/btn4.png")} />
                    </div>
                </div>
                <div className="home-bot">
                  <span className="home-bot-li"><Link to="/redux">redux</Link></span>
                  <span className="home-bot-li"><Link to="/test">test</Link></span>
                </div>
            </div>
        </div>
    }
}

export default withRouter(App);