import React, { Component } from 'react'
import { Space, Col } from 'antd'

import cat_sleep from '../../resource/金-睡觉 (1) 拷贝2.png'
import cat_boring from '../../resource/空闲 (6) (1) 拷贝1.png'

class CatState extends Component {
  render() {
    return (
      <div style={{ height: 30, display: 'flex', backgroundColor: 'clear' }}>
        <Col>
          <img style={{ width: 25, height: 25, paddingLeft:'15px' }} src={cat_boring} alt="" />
          <Space />
          <img style={{ width: 25, height: 25, paddingLeft:'8px' }} src={cat_sleep} alt="" />
        </Col>
      </div>
    )
  }
}

export default CatState
