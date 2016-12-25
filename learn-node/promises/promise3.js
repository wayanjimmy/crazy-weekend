const request = require('request');
const hget = require('hget');
const marked = require('marked');
const Term = require('marked-terminal');

function getRandomPonyFooArticle() {
    return new Promise((resolve, reject) => {
        request('https://ponyfoo.com/articles/random', (err, res, body) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(body);
        });
    });
}

async function read() {
    let html = await getRandomPonyFooArticle();
    let md = hget(html, {
        markdown: true,
        root: 'main',
        ignore: '.at-subscribe,.mm-comments,.de-sidebar'
    });
    let txt = marked(md, {
        renderer: new Term()
    });
    console.log(txt);
}