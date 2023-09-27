System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, tween, Lobby, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Cat;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLobby(extras) {
    _reporterNs.report("Lobby", "./Lobby", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      Lobby = _unresolved_2.Lobby;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae946lZTUtBaZtYuUq6poad", "Cat", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Cat", Cat = (_dec = ccclass('Cat'), _dec2 = property(Node), _dec(_class = (_class2 = class Cat extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "moveNode", _descriptor, this);

          _initializerDefineProperty(this, "movePostionList", _descriptor2, this);

          _initializerDefineProperty(this, "moveList", _descriptor3, this);
        }

        onLoad() {
          console.log('++++++++++-----------');
          this.initMovePostionList();
          console.log('++++++++++');
        }

        start() {}

        update(deltaTime) {} //   this.moveList = []


        moveCat() {
          tween(this.node).to(1, {
            position: this.moveList.shift()
          }).call(() => {
            if (this.moveList.length <= 0) {
              this.moveList = this.movePostionList;
            }

            this.moveCat();
          });
        }

        initMovePostionList() {
          const children = this.moveNode.children;

          for (let i = 0; i < children.length; i) {
            this.movePostionList.push(children[i].position);
          }

          this.moveList = this.movePostionList;
          console.log('-------', this.moveList.length);
        }

        ClickCat() {
          (_crd && Lobby === void 0 ? (_reportPossibleCrUseOfLobby({
            error: Error()
          }), Lobby) : Lobby).instance.openDetailsView();
          console.log('-------');
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "movePostionList", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "moveList", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=04899e4751cb1ddebebc74f08cda49c4a36e295a.js.map