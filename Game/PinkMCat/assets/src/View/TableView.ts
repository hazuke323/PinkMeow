import { _decorator, Component, Node } from 'cc';
import List from '../Tools/List';
import { AnimalList } from './AnimalList';
import { FoodAndJewelryList } from './FoodAndJewelryList';
import { ClientEvent } from '../clientEvent';
const { ccclass, property } = _decorator;

@ccclass('TableView')
export class TableView extends Component {
    leftList: AnimalList = null;
    rightList: FoodAndJewelryList = null;

    
    protected onLoad(): void {
        const leftNode = this.node.getChildByName("leftNode");
        this.leftList = leftNode.getComponent(AnimalList);
        this.leftList.intiData([1,2]);

        const rightNode = this.node.getChildByName("foodNode");
        this.rightList = rightNode.getComponent(FoodAndJewelryList);
        this.rightList.intiData([{itemId:1,itemCount:10},{itemId:2,itemCount:15}]);   
    }

    protected onEnable(): void {
        ClientEvent.on(ClientEvent.eventNameObj.SELECTTAB, this.onSelectTab, this);
    }

    protected onDisable(): void {
        ClientEvent.off(ClientEvent.eventNameObj.SELECTTAB, this.onSelectTab, this);
    }

    private onSelectTab(id: number): void{
        
    }

    private ClickClose(): void  {
        this.node.active = false;
    }
}


