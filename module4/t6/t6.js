'use strict';
const form = document.querySelector('#joke-form');
const container = document.querySelector('#joke-results');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = document.querySelector('#joke-query').value;
    const res = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
    const data = await res.json();

    container.innerHTML = '';
    data.result.forEach(joke => {
        const article = document.createElement('article');
        const p = document.createElement('p');
        p.innerText = joke.value;
        article.appendChild(p);
        container.appendChild(article);
    });
});