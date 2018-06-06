import React from 'react';
import PropTypes from 'prop-types';

var Widget = function Widget() {
  var string = 'Widget';
  return React.createElement("div", null, string, " Component");
};

Widget.propTypes = {};
export default Widget;