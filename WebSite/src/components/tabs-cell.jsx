import React, { Component } from 'react'
import icon from '../imgs/huaban6/矩形 2 拷贝.png.png'
import "./tabs-cell.css"

class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgList: this.props.imgList.slice(0, 4),
      moreText: '更多',
      packUp: '收起',
      shouMore: true,
    }
  }
  more() {
    if(this.props.imgList.length >4){
      console.log(this.props, 'this.props');
      this.setState({
        imgList: this.props.imgList,
        shouMore: !this.state.shouMore
      })
    }
   
  }
  up() {
    if(this.props.imgList.length >4){
      console.log(this.props, 'this.props');
      this.setState({
        imgList: this.props.imgList.slice(0, 4),
        shouMore: !this.state.shouMore
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="tab_cell">
          <div className="tab_top">
            <div className="title">
              {this.props.title}
            </div>
            <div className="title_icon">
              {
                this.state.shouMore ? 
                <div onClick={() => { this.more() }}>{this.state.moreText} 
                <img className="icon" src={icon} alt="" /></div> 
                : <div onClick={() => { this.up() }}>{this.state.packUp} 
                <img className="icon" src={icon} alt="" /></div>
              }
            </div>
          </div>
          <div className="tab_bottom">
            {this.state.imgList.map((item) => (
              <div className="tab_bottom_item" key={item.key}>
                <img className="img" src={item.imgSrc} alt="" />
                <div className='num'>
                  <img className="icon" src={item.icon} alt="" />
                  {item.num}
                </div>
              </div>

            ))}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default View