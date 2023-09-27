import { _decorator, Component, Node, Director, director } from 'cc'
import Alert from './Alert'

const { ccclass, property } = _decorator

@ccclass('NewComponent')
export class NewComponent extends Component {
  start() {}

  update(deltaTime: number) {}

  startGame() {
    Alert.show('hello', () => {
      console.log('hello')
    })
    console.log('start gaeme')
    director.loadScene('play')
  }
}
