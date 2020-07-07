import React, {Component } from 'react'

class EbigInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            val:"默认值"
        }
        // 原则上需要绑定this 但是这里使用了箭头函数 =()=> 此语法确保 `changeToParent` 内的 `this` 已被绑定。
        // 没有使用回调（函数体内没有使用this）,所以不绑定没有影响
        // this.changeToParent = this.changeToParent.bind(this);
    }
    changeToParent = (event) => {
        this.setState({
            val:event.target.value
        })
        this.props.onChange(event.target.value)
    }
    render(){
        const ebigStyle = {
            input: {
                backgroundColor: "#fff",
                padding: "10px",
                border: "1px solid #ccc",
            },
            //还可以定义其他的样式
        };
        return (
            <input style={ebigStyle.input} type={this.props.type} onChange={this.changeToParent} value={this.state.val}/>
        )
    }
}
export default EbigInput;