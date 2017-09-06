const fetch = require('node-fetch');

function fetchAvatarUrl(userId) {
    return fetch(`https://catappapi.herokuapp.com/users/${userId}`);
}

const result = fetchAvatarUrl(123);
