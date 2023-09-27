import { _decorator, Component, Node, rect, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Alert')
export class Alert extends Component {
    start() {
        
    }

    update(deltaTime: number) {
        this.node.getComponent(UITransform).height = 100
        
    }

}

