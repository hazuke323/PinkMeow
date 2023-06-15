import React from 'react'
import './index.css'
import { Row, Col } from 'antd'
import image1 from '../home/borin.gif'
import image2 from '../home/show.gif'
import image3 from '../home/show_har.gif'
import image4 from '../home/wark.gif'


class ComPage extends React.Component {

  render () {
    return (
      <div className="MyComponent2">
        <Row>
          <Col span={12}>
            <div className="content2">
              <h1 className="Title2">欢迎来到<br />PINK MEOW俱乐部</h1>
              <p className="description2">              PINK MEOW是一个基于EOS区块链的猫咪元宇宙社区 </p>
              <br></br>
              <p className="description2"> 空谈是廉价的，让我们一起建设吧！            </p>
            </div>
          </Col>
          <Col span={12}>
            <div className="images2">
              <Row gutter={10}>
                <Col span={12}>
                  <div className="image2">
                    <img src={image1} alt="Image 1" />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="image2">
                    <img src={image2} alt="Image 2" />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="image2">
                    <img src={image3} alt="Image 3" />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="image2">
                    <img src={image4} alt="Image 4" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ComPage
