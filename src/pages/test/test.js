import React, {Component } from 'react';
// import ReactDOM from 'react-dom';
import EbigInput from '../../components/ebigInput'
import EbigInputItem from '../../components/ebigInputItem'
import EbigButton from '../../components/ebigButton'


function WarnTip(props){
    if(!props.show) {
        return null
    }
    return (<div>警告：这里是警告组件的显示和隐藏控制</div>)
}

function btnClick(){
    console.log("使用类以外的点击方法")
}
function otherClassFuc(){
    console.log("类以外的其他方法")
}
class Test extends Component {
    // 构造函数初始化
    constructor(props){
        super(props)
        // 初始化事件和state
        this.state = {
            num:0,
            showWarn:false,
            inputVal:'受控组件'
        }
        this.str = "普通文本内容，看看修改是否能更新？"
        this.tick = this.tick.bind(this)
        this.btnClick = btnClick.bind(this)
        this.changeStr = this.changeStr.bind(this)
    }
    // 生命周期
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    // 方法
    tick(){
        //通过接收函数更新state
        /* this.setState(prevState => ({
            num:prevState.num++
        })) */
        // 接收直接值更新 
        // 建议使用函数更新 当一次更改多个值的时候直接值更改可能是异步更新state
        this.setState({
            num:this.state.num + 1
        })
        this.otherFuc()
    }
    parantFuc(arg){
        console.log("父组件调用子组件：" + arg)
    }
    inputChange(arg){
        console.log("input组件值：" + arg)
    }
    inputItemChange = (arg) => {
        console.log(arg)
        this.setState({
            inputVal:arg
        })
    }
    changeStr(){
        console.log("修改前：" + this.str)
        this.str = "普通文本内容，删掉后面部分，页面不会更新"
        console.log("修改后：" + this.str)
    }
    otherFuc(){
        console.log("类内部的其他事件")
        otherClassFuc()
    }
    onShowTips =()=> {
        this.setState(prevState => ({
            showWarn:!prevState.showWarn
        }))
    }
    onGetInputVal =()=>{
        console.log(this.ebigInputItemTxt._input.value)
    }
    // 组件渲染
    render(){
        return (
            <div>
                <WarnTip show={this.state.showWarn}/>
                <div onClick={this.onShowTips}>显示警告内容</div>
                <hr />
                <div>当前数值state：{this.state.num}</div>
                <div onClick={this.tick}>修改数值state</div>
                <hr />
                <div>{this.str}</div>
                <div onClick={this.changeStr}>修改文本，不用state</div>
                <div onClick={this.btnClick}>使用类以外的方法</div>
                <hr />
                <EbigInput onChange={this.inputChange}/>
                <EbigButton type="primary" onSubmit={this.parantFuc}>按钮组件</EbigButton>
                <hr />
                <h4>受控组件与非受控组件组合</h4>
                <EbigInputItem value={this.state.inputVal} onChange={this.inputItemChange}/>
                <br/>
                非受控组件
                {/* <EbigInputItem onRef={(ref)=>{ this.notCtrl = ref}}/> */}
                <EbigInputItem ref={(ebigInputItem) => this.ebigInputItemTxt = ebigInputItem}/>
                <div onClick={this.onGetInputVal}>获取非受控组件值</div>
            </div>
        )
    }
}
export default Test;