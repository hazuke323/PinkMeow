import { _decorator, Component, Label, Node, resources, Sprite, SpriteFrame } from 'cc';
import ListItem from '../Tools/ListItem';
const { ccclass, property } = _decorator;

export interface itemData {
    itemId: number,
    itemCount: number,
}

@ccclass('foodItem')
export class foodItem extends ListItem {
    @property(Label)
    itemCount: Label = null;
    @property(Sprite)
    itemSprite: Sprite = null;

    private m_Data: itemData = null;
    
    public initCell(data: itemData): void {
        this.m_Data = data;
        if(!data){
            return
        }      

        this.setItemSprite(data.itemId);
        this.itemCount.string = "" + data.itemCount;
    }

    public setItemSprite(id: number): void {
        const path = "food/food"; //+ id
        resources.load(`${path}/spriteFrame`,SpriteFrame,(error,spriteFrame)=>{
            this.itemSprite.spriteFrame = spriteFrame;
        })
    }


}


