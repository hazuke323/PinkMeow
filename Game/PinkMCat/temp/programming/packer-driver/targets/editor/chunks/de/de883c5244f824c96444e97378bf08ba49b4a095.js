System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, DetailsView;

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

      _cclegacy._RF.push({}, "bc7d5UXiAhLeaA/8D2j5jb7", "DetailsView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DetailsView", DetailsView = (_dec = ccclass('DetailsView'), _dec(_class = class DetailsView extends Component {
        constructor(...args) {
          super(...args);
          this.catName = null;
          this.catMs = null;
          this.lvLoad = null;
          this.lvLab = null;
          this.dayLab = null;
          this.birthday = null;
          this.weight = null;
          this.pinKLab = null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=de883c5244f824c96444e97378bf08ba49b4a095.js.map