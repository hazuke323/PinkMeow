import { _decorator, Component, Node } from 'cc';
import List from '../Tools/List';
import { AnimalItem } from './AnimalItem';
const { ccclass, property } = _decorator;

@ccclass('AnimalList')
export class AnimalList extends Component {
    @property(List)
    mList: List = null;

    private data: any[] = null;

    intiData(data: any){
        this.data = data;
        this.mList.numItems = this.data.length;
    }

    protected onEnable(): void {
        
    }

    protected onDisable(): void {
        
    }

    onListVRender(item: Node, idx: number): void {
        const child = item.getComponent(AnimalItem);
        child.initCell(this.data[idx]);
    }

    onListSelected(item: any, selectedId: number, lastSelectedId: number, val: number): void {
        if (!item) return;
        selectedId = Math.abs(selectedId);
        console.log(selectedId);
    }
}


