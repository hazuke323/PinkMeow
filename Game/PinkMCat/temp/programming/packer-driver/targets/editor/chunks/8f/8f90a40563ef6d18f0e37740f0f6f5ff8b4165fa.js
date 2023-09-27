System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Sprite, Lobby, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, DetailsView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLobby(extras) {
    _reporterNs.report("Lobby", "../Lobby", _context.meta, extras);
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
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      Lobby = _unresolved_2.Lobby;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc7d5UXiAhLeaA/8D2j5jb7", "DetailsView", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Component', 'error', 'Label', 'loader', 'Node', 'resources', 'SpringJoint2D', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DetailsView", DetailsView = (_dec = ccclass('DetailsView'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Sprite), _dec(_class = (_class2 = class DetailsView extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "catName", _descriptor, this);

          _initializerDefineProperty(this, "catMs", _descriptor2, this);

          _initializerDefineProperty(this, "lvLoad", _descriptor3, this);

          _initializerDefineProperty(this, "lvLab", _descriptor4, this);

          _initializerDefineProperty(this, "dayLab", _descriptor5, this);

          _initializerDefineProperty(this, "birthday", _descriptor6, this);

          _initializerDefineProperty(this, "weight", _descriptor7, this);

          _initializerDefineProperty(this, "pinKLab", _descriptor8, this);

          _initializerDefineProperty(this, "lvProgress", _descriptor9, this);
        }

        onLoad() {}

        initConfig(data) {
          this.catName.string = data.name;
          this.catMs.string = data.ms;
          this.lvLab.string = data.lv;
          this.dayLab.string = data.dayLab;
          this.birthday.string = data.birthday;
          this.weight.string = data.weight;
        }

        ClickFeeding() {
          (_crd && Lobby === void 0 ? (_reportPossibleCrUseOfLobby({
            error: Error()
          }), Lobby) : Lobby).instance.openTableView();
        }

        SetPinkNum(pinkCount) {
          this.pinKLab.string = "" + pinkCount;
        }

        SetExpData(exp, max) {
          this.lvLoad.string = "" + exp + "/" + max;
        } //Experience Progress Range 0 - 1


        SetProgress(num) {
          this.lvProgress.fillRange = num;
        }

        ClickClose() {
          this.node.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "catName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "catMs", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lvLoad", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lvLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "dayLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "birthday", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "weight", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "pinKLab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lvProgress", [_dec10], {
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
//# sourceMappingURL=8f90a40563ef6d18f0e37740f0f6f5ff8b4165fa.js.map