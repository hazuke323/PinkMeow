System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, resources, Sprite, SpriteFrame, ListItem, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, foodItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfListItem(extras) {
    _reporterNs.report("ListItem", "../Tools/ListItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      resources = _cc.resources;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      ListItem = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "160300rVThGkL5uKWa79/iE", "FoodItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'resources', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("foodItem", foodItem = (_dec = ccclass('foodItem'), _dec2 = property(Label), _dec3 = property(Sprite), _dec(_class = (_class2 = class foodItem extends (_crd && ListItem === void 0 ? (_reportPossibleCrUseOfListItem({
        error: Error()
      }), ListItem) : ListItem) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "itemCount", _descriptor, this);

          _initializerDefineProperty(this, "itemSprite", _descriptor2, this);

          this.m_Data = null;
        }

        initCell(data) {
          this.m_Data = data;

          if (!data) {
            return;
          }

          this.setItemSprite(data.itemId);
          this.itemCount.string = "" + data.itemCount;
        }

        setItemSprite(id) {
          const path = "food/food"; //+ id

          resources.load(`${path}/spriteFrame`, SpriteFrame, (error, spriteFrame) => {
            this.itemSprite.spriteFrame = spriteFrame;
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemCount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e4a4af04733d4152cb975d54d601fd6c11e63ad0.js.map