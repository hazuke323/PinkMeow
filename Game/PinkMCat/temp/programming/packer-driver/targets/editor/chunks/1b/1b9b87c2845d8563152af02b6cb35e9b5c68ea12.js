System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, TableItem, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, TableBar;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTableItem(extras) {
    _reporterNs.report("TableItem", "./TableItem", _context.meta, extras);
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
      TableItem = _unresolved_2.TableItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3cfcaHxRVpCgq1eaCXewfKH", "TableBar", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TableBar", TableBar = (_dec = ccclass('TableBar'), _dec2 = property([_crd && TableItem === void 0 ? (_reportPossibleCrUseOfTableItem({
        error: Error()
      }), TableItem) : TableItem]), _dec(_class = (_class2 = class TableBar extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tableList", _descriptor, this);

          this.selectId = 0;
        }

        onLoad() {
          for (let i = 0; i < this.tableList.length; i++) {
            this.tableList[i].selectId = i;
            this.tableList[i].table = this;
          }
        }

        setSelect(id) {
          for (let i = 0; i < this.tableList.length; i++) {
            this.tableList[i].IsSelect = i == id;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tableList", [_dec2], {
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
//# sourceMappingURL=1b9b87c2845d8563152af02b6cb35e9b5c68ea12.js.map