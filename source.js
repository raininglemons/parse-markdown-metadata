"use strict";
const lineRegex = /^([A-Za-z0-9\-]+)(:\s*)(.+)$/;
const emptyRegex = /^\s*$/;

class ParseMarkdownMetadata {
  constructor(source) {
    var lines = source.split('\n');

    this.props = {};

    let lastMatch = null;
    let lineMatch = null;
    let keyword = null;
    let whitespaceLength = null;

    while ((lineMatch = lines[0].match(lineRegex)) !== null ||
    (lastMatch && !!lines[0].substr(0, whitespaceLength).match(emptyRegex))) {
      if (lineMatch) {
        keyword = lineMatch[1];

        this.props[keyword] = lineMatch[3];

        lastMatch = lineMatch;
        whitespaceLength = (lastMatch[1] + lastMatch[2]).length;
      } else {
        const val = lines[0].substr(whitespaceLength);

        if (this.props[keyword].substr(-2) === '  ') {
          this.props[keyword] += `\n${val}`;
        } else {
          this.props[keyword] += val;
        }
      }

      lines.splice(0, 1);
    }

    this.content = lines.join('\n');
  }

  toString() {
    return this.content;
  }
}

module.exports = ParseMarkdownMetadata;
