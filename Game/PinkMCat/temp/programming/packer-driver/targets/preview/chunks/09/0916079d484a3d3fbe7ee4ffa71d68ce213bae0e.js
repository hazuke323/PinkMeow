System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Lobby, _dec, _class, _crd, ccclass, property, Cat;

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
    }, function (_unresolved_2) {
      Lobby = _unresolved_2.Lobby;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae946lZTUtBaZtYuUq6poad", "Cat", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Cat", Cat = (_dec = ccclass('Cat'), _dec(_class = class Cat extends Component {
        start() {}

        update(deltaTime) {}

        ClickCat() {
          (_crd && Lobby === void 0 ? (_reportPossibleCrUseOfLobby({
            error: Error()
          }), Lobby) : Lobby).instance.openDetailsView();
          console.log('-------');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0916079d484a3d3fbe7ee4ffa71d68ce213bae0e.js.map