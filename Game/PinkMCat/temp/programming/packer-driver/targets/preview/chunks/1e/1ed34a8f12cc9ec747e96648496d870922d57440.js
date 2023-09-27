System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, List, AnimalItem, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AnimalList;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfList(extras) {
    _reporterNs.report("List", "../Tools/List", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimalItem(extras) {
    _reporterNs.report("AnimalItem", "./AnimalItem", _context.meta, extras);
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
    }, function (_unresolved_2) {
      List = _unresolved_2.default;
    }, function (_unresolved_3) {
      AnimalItem = _unresolved_3.AnimalItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7cfb6EjqRxMHbBKtB/h8fpU", "AnimalList", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AnimalList", AnimalList = (_dec = ccclass('AnimalList'), _dec2 = property(_crd && List === void 0 ? (_reportPossibleCrUseOfList({
        error: Error()
      }), List) : List), _dec(_class = (_class2 = class AnimalList extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "mList", _descriptor, this);

          this.data = null;
        }

        intiData(data) {
          this.data = data;
          this.mList.numItems = this.data.length;
        }

        onEnable() {}

        onDisable() {}

        onListVRender(item, idx) {
          var child = item.getComponent(_crd && AnimalItem === void 0 ? (_reportPossibleCrUseOfAnimalItem({
            error: Error()
          }), AnimalItem) : AnimalItem);
          child.initCell(this.data[idx]);
        }

        onListSelected(item, selectedId, lastSelectedId, val) {
          if (!item) return;
          selectedId = Math.abs(selectedId);
          console.log(selectedId);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1ed34a8f12cc9ec747e96648496d870922d57440.js.map