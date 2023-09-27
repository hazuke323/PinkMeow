System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, _dec, _class, _crd, ccclass, property, Alert;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1abadIIIxlETJnFrnxOwUqW", "Alert", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'rect', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Alert", Alert = (_dec = ccclass('Alert'), _dec(_class = class Alert extends Component {
        start() {}

        update(deltaTime) {
          this.node.getComponent(UITransform).height = 100;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c01792d90e4c81aa363fc23c209e3c003ec6a19d.js.map