import { _decorator, Component, Node, tween } from 'cc'
import { Lobby } from './Lobby'
const { ccclass, property } = _decorator

@ccclass('Cat')
export class Cat extends Component {
  @property(Node)
  moveNode: Node = null

  @property
  movePostionList = []
  @property
  moveList = []

  protected onLoad(): void {
    console.log('++++++++++-----------')
    this.initMovePostionList()
    console.log('++++++++++')
  }

  start() {}

  update(deltaTime: number) {}

  //   this.moveList = []

  moveCat() {
    tween(this.node)
      .to(1, { position: this.moveList.shift() })
      .call(() => {
        if (this.moveList.length <= 0) {
          this.moveList = this.movePostionList
        }
        this.moveCat()
      })
  }

  initMovePostionList() {
    if (this.moveNode == null) {
      console.log('teataeta ------- null')
    }

    const children = this.moveNode.children
    for (let i = 0; i < children.length; i) {
      this.movePostionList.push(children[i].position)
    }
    this.moveList = this.movePostionList
    console.log('-------', this.moveList.length)
  }

  ClickCat() {
    Lobby.instance.openDetailsView()
    console.log('-------')
  }
}
