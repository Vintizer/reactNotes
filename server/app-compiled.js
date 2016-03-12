/**
 * Created by Vintizer on 11.03.2016.
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var app = (0, _express2['default'])();

app.get('/', function (req, res) {
    res.send("Hello world");
});

var server = app.listen(8080, function () {
    console.log("Server is up on 8080");
});

//# sourceMappingURL=app-compiled.js.map