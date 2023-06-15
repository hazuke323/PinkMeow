import React from 'react'
import './index.css'

class AboutPage extends React.Component {

  render () {
    return (
      <div>
        <h1 className="title">猫文化</h1>
        <h2 className="subtitle">猫咪宣言</h2>
        <ul className="declarations">
          <p className="description">•	不要为了追求你不需要的东西，而失去你已经拥有的东西。</p>
          <p className="description">•	不要为了符合别人的期待，而忽视你自己的感受。</p>
          <p className="description">•	不要为了逃避你害怕的事情，而错过你喜欢的事情。</p>
        </ul>
        <h2 className="subdanantitle">猫咪档案</h2>
        <p className="description">
          猫的历史起源于6500万~4800万年前，地球上出现一种名为“细齿兽”的动物，它的外形与黄鼠狼相似，是猫科动物的祖先。猫的驯化过程则是在人类开始从事农耕活动之后，由于猫捕食老鼠，进而保护了农作物，于是两者间的关系也转变为共生关系。最早饲养猫的记录可追溯到9500年前的塞浦路斯岛，但是饲养持续时间的长短则不得而知。
        </p>
        <p className='description'>不过，在5000年前的埃及，长时间的饲养行为使猫被人类驯化。据推测，这便是现代家猫的直接起源。埃及人对猫非常尊敬，甚至将其神化为巴斯特女神。杀死或伤害一只猫被认为是死罪。猫的尸体会被防腐处理为木乃伊，并埋葬在特殊的墓地或寺庙里。猫随着人类的贸易和航海活动逐渐传播到了世界各地，形成了不同的品种和特征。</p>
      </div>
    )
  }
}

export default AboutPage

