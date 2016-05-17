const MarkdownParser = require("parse-markdown-metadata");

const source = `Title: Parse Markdown Metadata
Description: Description of this npm module is that it helps you out
             by pulling out metadata from markdown sources for you.
Multilined: line one  
            line two  
            line three  
 
# Welcome to my markdown page
 
Let's write some things...`;

const md = new MarkdownParser(source);

console.log(md);