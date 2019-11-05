"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use('/api', function (req, res) {
  return res.send({
    data: 'content from the backend'
  });
});
app.use(_express["default"]["static"]('public'));
var PORT = 8080;
app.listen(PORT, function () {
  return console.log("Listening on ".concat(PORT));
});