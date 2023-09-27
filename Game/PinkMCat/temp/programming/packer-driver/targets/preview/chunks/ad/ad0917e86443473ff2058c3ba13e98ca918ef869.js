System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Alert, _dec, _class, _crd, ccclass, property, NewComponent;

  function _reportPossibleCrUseOfAlert(extras) {
    _reporterNs.report("Alert", "./Alert", _context.meta, extras);
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
      director = _cc.director;
    }, function (_unresolved_2) {
      Alert = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5cbe3HILqFL45cwJqacaGQV", "Start", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Director', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NewComponent", NewComponent = (_dec = ccclass('NewComponent'), _dec(_class = class NewComponent extends Component {
        start() {}

        update(deltaTime) {}

        startGame() {
          (_crd && Alert === void 0 ? (_reportPossibleCrUseOfAlert({
            error: Error()
          }), Alert) : Alert).show('hello', () => {
            console.log('hello');
          });
          console.log('start gaeme');
          director.loadScene('play');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ad0917e86443473ff2058c3ba13e98ca918ef869.js.map