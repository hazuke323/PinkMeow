import React, { Component } from 'react'
import backgroundSrc from '../../resource/back.png'
import catSrc from '../../resource/金-走路.png.png'
import polygonSrc from '../../resource/polygon.png'
import foodSrc from '../../resource/food.png'
import boxSrc from '../../resource/box.png'
import homeSrc from '../../resource/home.png'
import cancelSrc from '../../resource/cancel.png'
import Detail from '../../components/detail'
import Tabs from '../../components/tabs'
import Score from '../../components/scoreheader/score'
import CatState from '../../components/scoreheader/catstate'


import catSrcs from '../../imgs/huaban2/cat.png'
import nameSrc from '../../imgs/huaban2/name.png'
import presentationSrc from '../../imgs/huaban2/presentation.png'




import './playing.css'

class Record extends Component {
  state = {
    isShowDetail: false,
    isShowTabs: false,
    detailInfo:{
      carSrc: catSrcs,
      carName:nameSrc,
      carIntro:presentationSrc,
      carGrade:'9级',
      carGradeVal:20,
      carGradeValAll:185,
      carDay:'511天',
      carWeight:'5千克',
      carBirthday:'2022/04/02',
      gold:'902102'
    }
  }
  detailCancel = () => {
    this.setState({
      isShowDetail: !this.state.isShowDetail,
    })
  }
  tabCancel = () => {
    this.setState({
      isShowTabs: !this.state.isShowTabs,
    })
  }

  showTabs = () => {
    this.setState({
      isShowTabs: true,
      isShowDetail: false
    });
  };


  render() {
    return (
      <div className="play-content">
        <div className="cat-state">
          <CatState />
        </div>
        <div className="score-back">
          <Score />
        </div>
        <img className="playing-background" src={backgroundSrc} alt="" />
        <img
          className="playing-cat"
          src={catSrc}
          onClick={this.detailCancel}
          alt=""
        />
        <img className="playing-polygon" src={polygonSrc} alt="" />
        <img className="playing-food" src={foodSrc} alt="" />
        <img className="playing-box" src={boxSrc} alt="" />
        <img className="playing-home" src={homeSrc} alt="" />
        <div
          className={`play-detail ${
            !this.state.isShowDetail || !this.state.isShowTabs  ? '' : 'play-active'
          }`}>
            {
              this.state.isShowDetail ? <Detail info={this.state.detailInfo}  showTabs={this.showTabs} /> :  null
            }
            {this.state.isShowTabs ? < Tabs/> : null}
         
        </div>
        <img
          className={`playing-cancel ${
            !this.state.isShowDetail   ? 'play-active' : ''
          }`}
          onClick={this.detailCancel}
          src={cancelSrc}
          alt=""
        />
         <img
          className={`playing-cancel ${
            !this.state.isShowTabs   ? 'play-active' : ''
          }`}
          onClick={this.tabCancel}
          src={cancelSrc}
          alt=""
        />
      </div>
    )
  }
}
export default Record
