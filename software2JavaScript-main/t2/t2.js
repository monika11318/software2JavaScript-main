'use strict';

const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', async function(event) {

    event.preventDefault();

    const value = document.querySelector('#query').value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
        const resultData = await response.json();

        console.log('Search Result:', resultData);

    } catch (error) {
        console.log('Error:', error);
    }
});