import React, { Component } from 'react'
import TabsCell from './tabs-cell'
import imgsrc from '../imgs/huaban1/鸡肉 拷贝.png.png'
import icon from '../imgs/huaban1/椭圆 1 拷贝.png.png'
import poullDown from '../imgs/huaban6/矩形 2 拷贝 2.png.png'
import "./tabs.css"
class View extends Component{
  constructor(props) {
    super(props)
    this.state = {
      tab: {
        current: 1
      },
      tabCell:[
        {
          title:'肉类',
          key:1,
          imgList: [
            {
              imgSrc: imgsrc,
              icon: icon,
              num: 222,
              key:1
            },
            {
              imgSrc: imgsrc,
              icon: icon,
              num: 222,
              key:2
            },
            {
              imgSrc: imgsrc,
              icon: icon,
              num: 222,
              key:3
            },
            {
              imgSrc: imgsrc,
              icon: icon,
              num: 222,
              key:4
            },
            {
              imgSrc: imgsrc,
              icon: icon,
              num: 222,
              key:5
            }
          ]
        },
        {
          title:'鱼类',
          key:2,
          imgList: [
            {
              imgSrc: imgsrc,
              icon: icon,
              num: 222,
              key:1
            },
            {
              imgSrc: imgsrc,
              icon: icon,
              num: 222,
              key:2
            },
            {
              imgSrc: imgsrc,
              icon: icon,
              num: 222,
              key:3
            },
            {
              imgSrc: imgsrc,
              icon: icon,
              num: 222,
              key:4
            }
          ]
        },
        {
          title:'奶类制品',
          key:3,
          imgList: [
            {
              imgSrc: imgsrc,
              icon: icon,
              num: 222,
              key:1
            },
            {
              imgSrc: imgsrc,
              icon: icon,
              num: 222,
              key:2
            },
            {
              imgSrc: imgsrc,
              icon: icon,
              num: 222,
              key:3
            },
            {
              imgSrc: imgsrc,
              icon: icon,
              num: 222,
              key:4
            },
          ]
        },
        
      ]
    }
  }
  tabSwitch(index=1) {
    this.setState({
      tab: {
        ...this.state.tab,
        current:index
      }
    })
  }
  componentDidMount() {
    this.tabSwitch()
  }
  render() {
    const {tab} = this.state
    return (
      <React.Fragment>
        <div className="tab_box">
          <div className="tab-title">
            <span onClick={() => {this.tabSwitch(1)}} className={tab.current ===1 ? 'active':'title-item'}>食品</span>
            <span onClick={() => {this.tabSwitch(2)}} className={tab.current ===2 ? 'active':'title-item'}>饰品</span>
          </div>
          <div className="tab_con">
            <div className={tab.current ===1 ? 'tab_con_li con':'tab_con_li'}>
                {this.state.tabCell.map((item) => (
                  <TabsCell  key={item.key} title={item.title} imgList={item.imgList}/>
                 ))}
                <img className="poullDown_icon" src={poullDown} alt="" />
            </div>
            <div className={tab.current ===2 ? 'tab_con_li con':'tab_con_li'}>
                {this.state.tabCell.map((item) => (
                    <TabsCell  key={item.key} title={item.title} imgList={item.imgList}/>
                ))}
                <img className="poullDown_icon" src={poullDown} alt="" />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default View