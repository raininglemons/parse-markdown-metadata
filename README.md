Title:  Parse Markdown Metadata
Author: Dom England
Date:   May 17, 2016

# parse-markdown-metadata

Simple helper to parse a markdown formatted string and pull out any metadata / properties present. This module assumes
the format being used is like [this](https://github.com/fletcher/MultiMarkdown/wiki/MultiMarkdown-Syntax-Guide). In
short it expects:

1. all metadata to appear at the top of the markdown source.
1. wrapped values to start aligned in same position as first line
1. multilined values to end each preceeding line with two spaces

## Example

```markdown
Title: Parse Markdown Metadata
Description: Description of this npm module is that it helps you out
             by pulling out metadata from markdown sources for you.
Multilined: line one
            line two
            line three

# Welcome to my markdown page

Let's write some things...
```
This string can be parsed as follows;

```javascript
var ParseMarkdownMetadata = require('parse-markdown-metadata');
var fs = require('fs');

var source = fs.readFileSync('README.md').toString();
var md = new ParseMarkdownMetadata(source);

console.log(md);
```
The `ParseMarkdownMetadata` object, has the following useful values;

    {
        props: {Object}
        content: {String}
    }

`props` is an object of parameters to their corresponding value.
`content` is the markdown string with the metadata stripped from it.