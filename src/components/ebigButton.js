import React, {Component } from 'react'

function btnDeafaultClick() {
    console.log("默认的按钮事件")
}

class EbigButton extends Component {
    
    // 构造函数初始化 
    /* constructor(props){
        super(props)
        this.onSubmit = props.onSubmit
    } */
    toParent = () => {
        this.props.onSubmit("按钮子组件参数00")
    }
    render(){
        const ebigStyle = {
            btn: {
                backgroundColor: "#3485FB",
                padding: "10px",
                border: "1px solid #3485FB",
                borderRadius:"5px",
                width:"100%",
                cursor: "pointer",
                color: "#fff",
                textAlign: "center"
            },
            //还可以定义其他的样式
        };
        let htmlStr = ""
        if (this.props.children) {
            htmlStr = <div style={ebigStyle.btn} onClick={this.toParent}>{this.props.children}</div>
        }else if(this.props.template) {
            htmlStr = this.props.template()
        }else {
            htmlStr = (<div onClick={btnDeafaultClick.bind(this)}>默认按钮</div>)
        }
        return htmlStr
    }
}
export default EbigButton;