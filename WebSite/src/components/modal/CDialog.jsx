import { Grid } from 'antd'
import React, { useMemo, useEffect, useState } from 'react'
import ReactDOM, { createPortal } from 'react-dom'

import fishicon from '../../resource/fish_icon.png'

/**
 *
 * 需要把元素渲染到组件之外，用 createPortal 把元素直接渲染到 document.body 下，为了防止函数组件每一次执行都触发 createPortal， 所以通过 useMemo 做性能优化。

 因为需要渐变的动画效果，所以需要两个变量 modelShow / modelShowAync 来控制显示/隐藏，modelShow 让元素显示/隐藏，modelShowAync 控制动画执行。

 当弹窗要显示的时候，要先设置 modelShow 让组件显示，然后用 setTimeout 调度让 modelShowAync 触发执行动画。
 当弹窗要隐藏的时候，需要先让动画执行，所以先控制 modelShowAync ，然后通过控制 modelShow 元素隐藏，和上述流程相反。
 用一个控制器 controlShow 来流畅执行更新任务。

 */

// 控制弹窗隐藏以及动画效果
const controlShow = (f1, f2, value, timer) => {
  f1(value)
  return setTimeout(() => {
    f2(value)
  }, timer)
}

export const Portal = (props) => {
  return props.visible && <div className={'portal-container'}></div>
}

export const SellGoods = (props) => {
  const [numRows, setNumRos] = useState(1)

  return (
    <div className="warp-item-container">
      <div className="goods-header">
        <div className="goods-type-name">{'测试'}</div>
        <div className="goods-tag-more">更多</div>
      </div>
      {/* <Grid columns={4} gap={8}> */}
      {/* {props.list.slice(0, 1).map((item) => (
          <Grid.Item key={item.id}>
            <div
              style={{
                padding: '8px',
                background: '#f0f0f0',
                textAlign: 'center',
              }}>
              <img src="" alt="" />
              <div>
                <img src={fishicon}></img>
                <div>{'测试'}</div>
              </div>
            </div>
          </Grid.Item>
        ))} */}
      {/* </Grid> */}
    </div>
  )
}

export const Dialog = (props) => {
  const { width, visible, closeCb, onClose } = props
  // 控制 modelShow动画效果
  const [modelShow, setModelShow] = useState(visible)
  const [modelShowAsync, setModelShowAsync] = useState(visible)

  const renderPortal = useMemo(() => {
    console.log(document.getElementById('content_root'))
    return (
      <div className="protal_container_content">
        {createPortal(
          <div style={{ display: modelShow ? 'block' : 'none' }}>
            <div
              className="model_container"
              style={{ opacity: modelShowAsync ? 1 : 0 }}>
              <div
                className="model_wrap"
                style={{ backgroundColor: 'rgba(0,0,0,0.0)' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <div
                    style={{
                      color: 'white',
                      backgroundColor: 'rgba(220, 67, 167)',
                      width: '60px',
                      height: '30px',
                      textAlign: 'center',
                    }}>
                    tab1
                  </div>
                  <div
                    style={{
                      color: 'white',
                      backgroundColor: 'rgba(220, 67, 167)',
                      width: '60px',
                      height: '30px',
                      textAlign: 'center',
                      borderRadius: '5px',
                    }}>
                    tab2
                  </div>
                </div>
                <div
                  style={{
                    width: '100%',
                    borderRadius: '5px',
                    border: '2px solid rgba(220, 67, 167)',
                    backgroundColor: 'rgba(253, 194, 242)',
                  }}>
                  <SellGoods />
                </div>
                <div style={{ width: width + 'px' }}> {props.children} </div>
              </div>
            </div>
            <div
              className="model_container mast"
              onClick={() => onClose && onClose()}
              style={{ opacity: modelShowAsync ? 0.6 : 0 }}
            />
          </div>,
          document.getElementById('root')
        )}
      </div>
    )
  })

  const renderChildren = useMemo(() => {
    // 把元素渲染到组件之外的document.body 上
    return ReactDOM.createPortal(
      <div style={{ display: modelShow ? 'block' : 'none' }}>
        <div
          className="model_container"
          style={{ opacity: modelShowAsync ? 1 : 0 }}>
          <div
            className="model_wrap"
            style={{ backgroundColor: 'rgba(253, 194, 242)' }}>
            <div style={{ marginLeft: '10px', marginRight: '10px' }}>
              {' '}
              {props.children}{' '}
            </div>
          </div>
        </div>
        <div
          className="model_container mast"
          onClick={() => onClose && onClose()}
          style={{ opacity: modelShowAsync ? 0.6 : 0 }}
        />
      </div>,
      document.body
    )
  }, [modelShow, modelShowAsync])

  useEffect(() => {
    let timer
    if (visible) {
      // 打开弹窗，
      timer = controlShow(setModelShow, setModelShowAsync, visible, 30)
    } else {
      timer = controlShow(setModelShowAsync, setModelShow, visible, 1000)
    }
    return () => {
      timer && clearTimeout(timer)
    }
  }, [visible])
  return renderPortal
}
