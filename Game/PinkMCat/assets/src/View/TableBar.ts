import { _decorator, Component, Node } from 'cc';
import { TableItem } from './TableItem';
const { ccclass, property } = _decorator;

@ccclass('TableBar')
export class TableBar extends Component {
    @property([TableItem])
    tableList: TableItem[] = [];

    public selectId: number = 0;

    protected onLoad(): void {
        for(let i = 0; i < this.tableList.length;i++){
            this.tableList[i].selectId = i;
            this.tableList[i].table = this;
        }

        this.setSelect(0);
    }

    public setSelect(id: number): void{
        for(let i = 0; i < this.tableList.length;i++){
            this.tableList[i].IsSelect = i == id;
        }
    }
}


