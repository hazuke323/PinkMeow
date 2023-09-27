import { _decorator, assetManager, Component, error, Label, loader, Node, resources, SpringJoint2D, Sprite } from 'cc';
import { Lobby } from '../Lobby';
const { ccclass, property } = _decorator;

@ccclass('DetailsView')
export class DetailsView extends Component {
    @property(Label)
    catName: Label = null;
    @property(Label)
    catMs: Label = null
    @property(Label)
    lvLoad:Label = null;
    @property(Label)
    lvLab: Label = null;
    @property(Label)
    dayLab: Label = null;
    @property(Label)
    birthday: Label = null;
    @property(Label)
    weight: Label = null;
    @property(Label)
    pinKLab: Label = null;
    @property(Sprite)
    lvProgress: Sprite = null;

    protected onLoad(): void {
    
    }

    public initConfig(data: any): void{
        this.catName.string = data.name;
        this.catMs.string = data.ms;
        this.lvLab.string = data.lv;

        this.dayLab.string = data.dayLab;
        this.birthday.string = data.birthday;
        this.weight.string = data.weight;
    }


    public ClickFeeding(){
        Lobby.instance.openTableView();
    }

    public SetPinkNum(pinkCount: number): void {
        this.pinKLab.string = "" + pinkCount;
    }

    private SetExpData(exp: number,max: number): void {
        this.lvLoad.string = "" + exp + "/" + max;
    }

    //Experience Progress Range 0 - 1
    private SetProgress(num: number): void {
        this.lvProgress.fillRange = num;
    }

    private ClickClose(): void  {
        this.node.active = false;
    }

}


