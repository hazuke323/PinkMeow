import { _decorator, Component, Node, resources, Sprite, SpriteFrame } from 'cc';
import ListItem from '../Tools/ListItem';
const { ccclass, property } = _decorator;

@ccclass('AnimalView')
export class AnimalView extends ListItem {
    @property(Sprite)
    itemSprite: Sprite = null;
    private id: number = 0;

    initCell(id: number): void{
        this.id = id;
        this.setItemSprite(id);
    }

    public setItemSprite(id: number): void {
        const path = "animal/animal"; //+ id
        resources.load(path, SpriteFrame, (err, spriteFrame) => {
            if(err){
               return console.error(err);
            }
            this.itemSprite.spriteFrame = spriteFrame;
        });
    }
}


