import React, {Component } from 'react'

class EbigInputItem extends Component {
    changeToParent = (event) => {
        try {
            if(typeof this.props.onChange){
                this.props.onChange(event.target.value)
            }else {
                throw new Error();
            }
        }
        catch(err) {
            console.warn("input是受控组件，未绑定onChange事件：" + err);
        }
    }
    changeToCurrent =()=> {
        console.log(this._input.value)
    }
    componentDidMount() {
        console.log(this.props.value)
        // !this.props.value&&this.props.onRef(this)
    }
    render(){
        const ebigStyle = {
            input: {
                backgroundColor: "#fff",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius:"5px",
                width:"100%"
            },
            //还可以定义其他的样式
        };
        const value = this.props.value
        const defaultVal = this.props.defaultVal || ""
        return (
            value!== undefined?
            <input style={ebigStyle.input} onChange={this.changeToParent} value={value}/>:
            <input style={ebigStyle.input} ref={(input) => this._input = input} defaultValue={defaultVal} onChange={this.changeToCurrent}/>
        )
    }
}
export default EbigInputItem;