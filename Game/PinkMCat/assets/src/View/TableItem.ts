import { _decorator, Component, Node } from 'cc';
import { TableBar } from './TableBar';
const { ccclass, property } = _decorator;

@ccclass('TableItem')
export class TableItem extends Component {
    @property([Node])
    private stateList: Node[] = [];
    
    public table: TableBar = null;

    set IsSelect(select: boolean){
        let id = select ? 0 : 1;
        this.setSelect(id);
    }

    public selectId: number = 0;

    protected onLoad(): void {
       
    }

    public setSelect(id: number): void{
        for(let i = 0; i < this.stateList.length;i++){
            this.stateList[i].active = i == id;
        }
    }

    ClickButton(){
        this.table.setSelect(this.selectId);
    }
}


