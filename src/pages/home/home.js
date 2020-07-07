import React, {Component } from 'react';
// import ReactDOM from 'react-dom';
import './home.less'

class Home extends Component {
    render(){
        return <div className="home">
            <div className="home-head">
                <div>logo</div>
                <div>登陆</div>
            </div>
            <div className="home-left">左侧</div>
            <div className="home-right">
                <div className="home-face">人脸识别开门</div>
                <div className="home-nav">
                    <div className="home-nav-tab">
                        <img className="home-nav-tab-img" alt="开盒领用" src={require("../../images/btn1.png")} />
                    </div>
                    <div className="home-nav-tab">
                        <img className="home-nav-tab-img" alt="效期预警" src={require("../../images/btn2.png")} />
                    </div>
                    <div className="home-nav-tab">
                        <img className="home-nav-tab-img" alt="异常记录" src={require("../../images/btn3.png")} />
                    </div>
                    <div className="home-nav-tab">
                        <img className="home-nav-tab-img" alt="操作记录" src={require("../../images/btn4.png")} />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Home;