System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, cat;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "af8d7CM6B9DKqezMWobs3+a", "cat", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("cat", cat = (_dec = ccclass('cat'), _dec(_class = class cat extends Component {
        start() {}

        update(deltaTime) {}

        onLoad() {
          this.node.on('touchend', this.on_touch_ended, this);
        }

        on_touch_ended() {
          console.log('touch cat');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=239c771a3cf93daac4f2e934994899f92f3e5746.js.map