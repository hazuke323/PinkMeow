import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Lobby')
export class Lobby extends Component {
    @property(Node)
    detalisView: Node = null;
    @property(Node)
    tableVieww: Node = null;

    public static instance: Lobby;

    protected onLoad(): void {
        Lobby.instance = this;
    }

    openDetailsView(){
        this.detalisView.active = true;
    }

    openTableView(){
        this.tableVieww.active = true;
    }
}


