import React, { Component } from 'react'
import { Link } from "react-router-dom"
import backgroundSrc from '../../imgs/huaban3/back.png'
import startSrc from '../../imgs/huaban3/start.png'
import startBorderSrc from '../../imgs/huaban3/startBorder.png'
import pinkSrc from '../../imgs/huaban3/pink.png'
import nonftSrc from '../../imgs/huaban3/nonft.png'
import borderSrc from '../../imgs/huaban3/border.png'
import buySrc from '../../imgs/huaban3/buy.png'
import cancelSrc from '../../imgs/huaban3/cancel.png'
import buyBorderSrc from '../../imgs/huaban3/buyBorder.png'

import "./prepare.css"
class Home extends Component {
  state = {    
    isShowWindow: false   
  }
  cancel = () => {    
    this.setState({    
      isShowWindow: !this.state.isShowWindow   
    })  
    console.log(111);  
  }

  componentWillMount() {

  }
  componentDidMount() {
    // 组件渲染之后调用，只调用一次
    console.log('componentDidMount')
  }
  componentWillReceiveProps(nextProps) {
    // 组件初始化不调用，组件接收新的props时调用
  }
  componentWillUpdate(nextProps, nextState) {
    // 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
  }
  componentDidUpdate() {

    // 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点
  }
  componentWillUnmount() {
    // 组件将要卸载时调用，一些事件监听和定时器需要在此时清除
  }

  render() {
    return (
      <div>
         <div className="content">
           <img className="pink" src={pinkSrc} alt=""/>
           <img className="background" src={backgroundSrc} alt=""/>
           <Link to="/playing"><img className="start" src={startSrc} alt=""/></Link>
           <img className="start-border" src={startBorderSrc} alt=""/>
           <img className= {`border ${this.state.isShowWindow ? 'active' : ''}`} src={borderSrc} alt=""/>
           <img className= {`nonft ${this.state.isShowWindow ? 'active' : ''}`} src={nonftSrc} alt=""/>
           <img className= {`buy ${this.state.isShowWindow ? 'active' : ''}`} src={buySrc} alt=""/>
           <img className= {`buy-border ${this.state.isShowWindow ? 'active' : ''}`} src={buyBorderSrc} alt=""/>
           <div className={`mack ${this.state.isShowWindow ? 'active' : ''}`}>
              <img className= {`cancel ${this.state.isShowWindow ? 'active' : ''}`} onClick={ this.cancel } src={cancelSrc} alt=""/>
           </div>
         </div>
      </div>
    )
  }
}
export default Home
