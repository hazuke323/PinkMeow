System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ClientEvent, _dec, _class, _crd, ccclass, property, TableView;

  function _reportPossibleCrUseOfAnimalList(extras) {
    _reporterNs.report("AnimalList", "./AnimalList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFoodAndJewelryList(extras) {
    _reporterNs.report("FoodAndJewelryList", "./FoodAndJewelryList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientEvent(extras) {
    _reporterNs.report("ClientEvent", "../clientEvent", _context.meta, extras);
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
      ClientEvent = _unresolved_2.ClientEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89e78OXtdpO74VRXVsToF1U", "TableView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TableView", TableView = (_dec = ccclass('TableView'), _dec(_class = class TableView extends Component {
        constructor() {
          super(...arguments);
          this.leftList = null;
          this.rightList = null;
        }

        onLoad() {
          this.leftList.intiData([1, 2]); // this.rightList.intiData([{itemId:1,itemCount:10},{itemId:2,itemCount:15}]);   
        }

        onEnable() {
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).on((_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).eventNameObj.SELECTTAB, this.onSelectTab, this);
        }

        onDisable() {
          (_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).off((_crd && ClientEvent === void 0 ? (_reportPossibleCrUseOfClientEvent({
            error: Error()
          }), ClientEvent) : ClientEvent).eventNameObj.SELECTTAB, this.onSelectTab, this);
        }

        onSelectTab(id) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=892f2e3940da2e4e98e49d7a813848e24cdc889d.js.map