const request = require('request');
const hget = require('hget');
const marked = require('marked');
const Term = require('marked-terminal');

function getRandomPonyFooArticle(gen) {
    let g = gen();
    request('https://ponyfoo.com/articles/random', (err, res, body) => {
        if (err) {
            g.throw(err);
            return;
        }
        g.next(body);
    });
}

getRandomPonyFooArticle(function* printRandomArticle() {
    let html = yield;
    let md = hget(html, {
        markdown: true,
        root: 'main',
        ignore: '.at-subscribe,.mm-comments,.de-sidebar'
    });
    let txt = marked(md, {
        renderer: new Term()
    });
    console.log(txt);
});

try {
    getRandomPonyFooArticle();
} catch (error) {
    console.log(error);
}