import { _decorator, Component, Node } from 'cc';
import List from '../Tools/List';
import { foodItem, itemData } from './FoodItem';
const { ccclass, property } = _decorator;

@ccclass('FoodAndJewelryList')
export class FoodAndJewelryList extends Component {
    @property(List)
    mList: List = null;

    private data: itemData[] = null;

    intiData(data: any){
        this.data = data;
        this.mList.numItems = this.data.length;
    }

    onListVRender(item: Node, idx: number): void {
        const child = item.getComponent(foodItem);
        child.initCell(this.data[idx]);
    }

    onListSelected(item: any, selectedId: number, lastSelectedId: number, val: number): void {
        if (!item) return;
        selectedId = Math.abs(selectedId);
        console.log(selectedId);
    }
}


