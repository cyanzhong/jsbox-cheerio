const cheerio = require("cheerio");
const html =
`
<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Pear</li>
</ul>
`;

const $ = cheerio.load(html, {
  xml: {
    normalizeWhitespace: true,
  }
});

console.log($(".apple", "#fruits").text());
//=> Apple

console.log($("ul .pear").attr("class"));
//=> pear

console.log($("li[class=orange]").html());
//=> Orange

console.log($.root().html());
//=> html

console.log(cheerio.html($(".pear")));
//=> <li class="pear">Pear</li>