System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, resources, Sprite, SpriteFrame, ListItem, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AnimalItem;

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
      resources = _cc.resources;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      ListItem = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "49ce3RkqG9Dcruh5SNfVwuJ", "AnimalItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'resources', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AnimalItem", AnimalItem = (_dec = ccclass('AnimalItem'), _dec2 = property(Sprite), _dec(_class = (_class2 = class AnimalItem extends (_crd && ListItem === void 0 ? (_reportPossibleCrUseOfListItem({
        error: Error()
      }), ListItem) : ListItem) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "itemSprite", _descriptor, this);

          this.id = 0;
        }

        initCell(id) {
          this.id = id;
          this.setItemSprite(id);
        }

        setItemSprite(id) {
          const path = "animal/1.png"; //

          resources.load(path, SpriteFrame, null, (err, spriteFrame) => {
            if (err) {
              return console.error(err);
            }

            this.itemSprite.spriteFrame = spriteFrame;
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemSprite", [_dec2], {
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
//# sourceMappingURL=071b69bf5b8eab59a9ddbc44dd6a5514c36a3967.js.map