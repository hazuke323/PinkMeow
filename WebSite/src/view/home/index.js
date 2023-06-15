import React, { useRef } from 'react'
import './index.css'

import { useNavigate } from 'react-router-dom'
import CatCalutPage from '../calut'
import AboutPage from '../about'
import PathPage from '../path'

import iconTwitter from './icon_twitter_120.png'
import iconDiscord from './icon_discord_120.png'

import ComPage from '../comu'

import ScatterJS from '@scatterjs/core'
import ScatterEOS from '@scatterjs/eosjs'

ScatterJS.plugins(new ScatterEOS())

class HomePage extends React.Component {

  constructor(props) {
    super(props)
    this.catRef = React.createRef()
    this.aboutRef = React.createRef()
    this.pathRef = React.createRef()
    this.state = {
      render: ''
    }
  }

  // componentWillMount () {
  // const network = ScatterJS.network.fromJson({
  //   blockchain: 'eos',
  //   chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
  //   host: 'https://eos.greymass.com',
  //   port: 443,
  //   protocol: 'https',
  // })
  // }


  handleDeclaration = () => {

    this.catRef.current.scrollIntoView({ behavior: 'smooth' })

  }

  handleAbout = () => {
    // let { history } = this.props
    // history.push('/about')
    // window.location.href = '/about'
    this.aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  }

  handlePath = () => {
    this.pathRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  handleConnect = () => {
    // window.location.href = 'https://discord.gg/xVJNUHNT'

  }

  handleDiscord = () => {
    window.location.href = 'https://discord.gg/xVJNUHNT'
  }

  handleTwitter = () => {
    window.location.href = 'https://twitter.com/PinkMeow_'
  }

  ShowComponent (name) {
    this.setState({ render: name })
  }

  bodyRender = () => {
    return (
      <div className="Body1">
        <div className="Container">
          <img src={require('./home_pic.png')} alt="placeholder" />
        </div>
        <div className="Container1">
          <div><ComPage></ComPage></div>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className="Home">
        <header className="Header">
          <div className="Logo">PINK MEOW</div>
          <div className="ButtonContainer">
            <button className="Button" onClick={this.handleDeclaration}>猫文化</button>
            <button className="Button" onClick={this.handleAbout}>关于</button>
            <button className="Button" onClick={this.handlePath}>路线图</button>
            <button className="Button" onClick={this.handleConnect}>连接</button>
            <img src={iconDiscord} onClick={this.handleDiscord} alt={'discord'} className='Icon discord' />
            <img src={iconTwitter} onClick={this.handleTwitter} alt={'twitter'} className='Icon twitter' />
          </div>
        </header>
        <div className="Body">
          <div> {this.bodyRender()}</div>
          <p class="gray-line mb-5"></p>
          <div ref={this.catRef}><AboutPage /></div>
          <p class="gray-line mb-5"></p>
          <div ref={this.aboutRef}><CatCalutPage /></div>
          <p class="gray-line mb-5"></p>
          <div ref={this.pathRef} className='pathPage'><PathPage /></div>
        </div>
      </div>
    )
  }
}





export default HomePage
