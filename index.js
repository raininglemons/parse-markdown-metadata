"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lineRegex = /^([A-Za-z0-9\-]+)(:\s*)(.+)$/;
var emptyRegex = /^\s*$/;

var ParseMarkdownMetadata = function () {
  function ParseMarkdownMetadata(source) {
    _classCallCheck(this, ParseMarkdownMetadata);

    var lines = source.split('\n');

    this.props = {};

    var lastMatch = null;
    var lineMatch = null;
    var keyword = null;
    var whitespaceLength = null;

    while ((lineMatch = lines[0].match(lineRegex)) !== null || lastMatch && !!lines[0].substr(0, whitespaceLength).match(emptyRegex)) {
      if (lineMatch) {
        console.log(lineMatch);
        keyword = lineMatch[1];

        this.props[keyword] = lineMatch[3];

        lastMatch = lineMatch;
        whitespaceLength = (lastMatch[1] + lastMatch[2]).length;
      } else {
        var val = lines[0].substr(whitespaceLength);

        if (this.props[keyword].substr(-2) === '  ') {
          this.props[keyword] += '\n' + val;
        } else {
          this.props[keyword] += val;
        }
      }

      lines.splice(0, 1);
    }

    this.content = lines.join('\n');
  }

  _createClass(ParseMarkdownMetadata, [{
    key: 'toString',
    value: function toString() {
      return this.content;
    }
  }]);

  return ParseMarkdownMetadata;
}();

module.exports = ParseMarkdownMetadata;