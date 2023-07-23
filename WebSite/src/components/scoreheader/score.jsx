import React, { Component } from 'react'
import { Space, Button, Col } from 'antd'

import fish from '../../resource/矢量智能对象.png.png'
import cart from '../../resource/cart.png.png'
import score from '../../resource/score.png.png'
import setting from '../../resource/setting.png.png'
import book from '../../resource/book.png.png'
import mark from '../../resource/mark.png.png'

import './score.css'

class Score extends Component {
  render() {
    return (
      <div style={{ height: 30, display: 'flex' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex' , alignItems: 'center', }}>
            <img src={fish} alt="" style={{ padding:'0px 10px 0px 15px', }} />
            {/* <Text>20220</Text> */}
          </div>
          <div>
            <img src={cart} alt="" style={{ padding:'0px 28px 0px 5px', }}/>
          </div>
          <div style={{ display: 'flex' , alignItems: 'center', }}>
            <img src={score} alt="" style={{ padding:'0px 5px 0px 0px', }}/>
            {/* <Text>1246</Text> */}
          </div>
        </div>
        <div style={{ display: 'flex', position: 'absolute', right: 0 }}>
          <div>
            <img src={setting} alt="" style={{ paddingRight:'5px', }}/>
          </div>
          <div>
            <img src={book} alt="" style={{ paddingRight:'5px', }} />
          </div>
          <div>
            <img src={mark} alt="" style={{ paddingRight:'8px', }}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Score
