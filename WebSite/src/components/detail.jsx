import React, { Component } from 'react'
import backgroundSrc from '../imgs/huaban2/back.png'
import catSrc from '../imgs/huaban2/cat.png'
import catBackSrc from '../imgs/huaban2/catBack.png'
import nameSrc from '../imgs/huaban2/name.png'
import presentationSrc from '../imgs/huaban2/presentation.png'
import gradeSrc from '../imgs/huaban2/grade.png'
import empiricalSrc from '../imgs/huaban2/empirical.png'
import empirical1Src from '../imgs/huaban2/empirical1.png'
import gradeNumberSrc from '../imgs/huaban2/9级.png.png'
import gradeValueSrc from '../imgs/huaban2/20_105.png.png'
import basicSrc from '../imgs/huaban2/basic.png'
import birthdaySrc from '../imgs/huaban2/birthday.png'
import weightSrc from '../imgs/huaban2/weight.png'
import accompanySrc from '../imgs/huaban2/accompany.png'
import goldSrc from '../imgs/huaban2/gold.png'
import goldValueSrc from '../imgs/huaban2/goldValue.png'
import iconSrc from '../imgs/huaban2/icon.png'
import operateSrc from '../imgs/huaban2/operate.png'
import operateBorderSrc from '../imgs/huaban2/operateBorder.png'
import "./index.css"

class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // imgList: this.props.imgList.slice(0, 4),
      // moreText: '更多',
      // packUp: '收起',
      // shouMore: true,
    }
  }
  more() {
    console.log(this.props);
    this.props.showTabs()
  }


  render() {
    return (
      <React.Fragment>
        <div>
         <div className="detail-content">
           <img className="detail-back" src={backgroundSrc} alt=""/>
           <img className="detail-cat" src={this.props.info.carSrc} alt=""/>
           <img className="detail-car-back" src={catBackSrc} alt=""/>
           <img className="detail-name" src={this.props.info.carName} alt=""/>
           <img className="detail-presentation" src={this.props.info.carIntro} alt=""/>
           <img className="detail-grade" src={gradeSrc} alt=""/>
           <img className="detail-empirical" src={empiricalSrc} alt=""/>
           <img className="detail-empirical1" src={empirical1Src} alt=""/>
           <div className="detail-grade-number">
               {/* <img  src={gradeNumberSrc} alt=""/> */}
               <span>{this.props.info.carGrade}</span>
           </div>
           <div className="detail-grade-value">
               <img  src={gradeValueSrc} alt=""/>
               {/* <span>{this.props.info.carGradeValAll}</span> */}
           </div>
           <img className="detail-basic" src={basicSrc} alt=""/>
           <div className="detail-birthday">
               <img src={birthdaySrc} alt=""/>
           </div>
           <div className="detail-weight">
               <img  src={weightSrc} alt=""/>
           </div>
           <div className="detail-accompany">
               <img  src={accompanySrc} alt=""/>
           </div>

           <div className="detail-gold">
               <img  src={goldSrc} alt=""/>
           </div>
           <img className="detail-icon" src={iconSrc} alt=""/>
           <div className="detail-gold-value">
               <img  src={goldValueSrc} alt=""/>
           </div>
           <img className="detail-operate" onClick={() => { this.more() }} src={operateSrc}  alt=""/>
           <img className="detail-operate-border" src={operateBorderSrc} alt=""/>

         </div>
      </div>
      </React.Fragment>
    )
  }
}
export default View