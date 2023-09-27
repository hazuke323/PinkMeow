System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AnimalList, FoodAndJewelryList, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, TableView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnimalList(extras) {
    _reporterNs.report("AnimalList", "./AnimalList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFoodAndJewelryList(extras) {
    _reporterNs.report("FoodAndJewelryList", "./FoodAndJewelryList", _context.meta, extras);
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
      AnimalList = _unresolved_2.AnimalList;
    }, function (_unresolved_3) {
      FoodAndJewelryList = _unresolved_3.FoodAndJewelryList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89e78OXtdpO74VRXVsToF1U", "TableView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TableView", TableView = (_dec = ccclass('TableView'), _dec2 = property(_crd && AnimalList === void 0 ? (_reportPossibleCrUseOfAnimalList({
        error: Error()
      }), AnimalList) : AnimalList), _dec3 = property(_crd && FoodAndJewelryList === void 0 ? (_reportPossibleCrUseOfFoodAndJewelryList({
        error: Error()
      }), FoodAndJewelryList) : FoodAndJewelryList), _dec(_class = (_class2 = class TableView extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "leftList", _descriptor, this);

          _initializerDefineProperty(this, "rightList", _descriptor2, this);
        }

        onLoad() {
          this.leftList.intiData([1, 2]); // this.rightList.intiData([{itemId:1,itemCount:10},{itemId:2,itemCount:15}]);   
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "leftList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rightList", [_dec3], {
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
//# sourceMappingURL=3c6dd4c1571edd3f59f7ac0e32ce40d732052d05.js.map