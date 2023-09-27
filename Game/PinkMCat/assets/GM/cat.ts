import { _decorator, Component, Node } from 'cc'
const { ccclass, property } = _decorator

@ccclass('cat')
export class cat extends Component {
  start() {}

  update(deltaTime: number) {}

  protected onLoad(): void {
    this.node.on('touchend', this.on_touch_ended, this)
    console.log('cat')
  }

  on_touch_ended() {
    console.log('touch cat')
  }
}
