'use strict';
const form = document.querySelector('#search-form');
const results = document.querySelector('#results');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const val = document.querySelector('#query').value;
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${val}`);
    const data = await response.json();

    results.innerHTML = '';

    data.forEach(item => {
        const show = item.show;
        const article = document.createElement('article');

        const h2 = document.createElement('h2');
        h2.innerText = show.name;

        const a = document.createElement('a');
        a.href = show.url;
        a.target = '_blank';
        a.innerText = 'Details';

        const img = document.createElement('img');
        img.src = show.image?.medium;
        img.alt = show.name;

        const div = document.createElement('div');
        div.innerHTML = show.summary;

        article.appendChild(h2);
        article.appendChild(img);
        article.appendChild(a);
        article.appendChild(div);
        results.appendChild(article);
    });
});