function _inheritsLoose(subClass, superClass) { subClass.prototype.__proto__ = superClass && superClass.prototype; subClass.__proto__ = superClass; }

import React, { Component } from 'react';

var Calendar =
/*#__PURE__*/
function (_Component) {
  function Calendar() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Calendar.prototype;

  _proto.render = function render() {
    return React.createElement("div", null, "Calendar Component");
  };

  _inheritsLoose(Calendar, _Component);

  return Calendar;
}(Component);

export default Calendar;