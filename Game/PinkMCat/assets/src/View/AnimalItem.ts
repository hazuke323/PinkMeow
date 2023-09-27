import { _decorator, Component, Label, Node, resources, Sprite, SpriteFrame } from 'cc';
import ListItem from '../Tools/ListItem';
const { ccclass, property } = _decorator;

@ccclass('AnimalItem')
export class AnimalItem extends ListItem {
    @property(Sprite)
    itemSprite: Sprite = null;
    private id: number = 0;

    initCell(id: number): void{
        this.id = id;
        this.setItemSprite(id);
    }

    public setItemSprite(id: number): void {
        const path = `animal/${id}`;
        resources.load(`${path}/spriteFrame`,SpriteFrame,(error,spriteFrame)=>{
            this.itemSprite.spriteFrame = spriteFrame;
        })
    }
}


