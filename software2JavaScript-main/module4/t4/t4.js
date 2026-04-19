"use strict";

const search = document.querySelector("#searchShows");

search.addEventListener("submit", async function (evt) {
    evt.preventDefault();

    const value_from_input = document.querySelector("#query").value;

    try {
        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${value_from_input}`,
        );

        const data = await response.json();
        showResults(data);
    } catch (error) {
        console.log(error.message);
    }
});

const results = document.querySelector("#results");

function showResults(data) {
    results.innerHTML = "";

    data.forEach((element) => {
        if (!element.show) return;

        const show = element.show;
        const article = document.createElement("article");

        const resultName = document.createElement("h2");
        resultName.textContent = show.name || "No title";

        const resultLink = document.createElement("a");
        resultLink.href = show.url || "#";
        resultLink.textContent = "View details";
        resultLink.target = "_blank";

        const resultImg = document.createElement("img");
        resultImg.src = show.image
            ? show.image.medium
            : "https://placehold.co/210x295?text=Not%20Found";
        resultImg.alt = show.name || "No title";

        const summary = document.createElement("div");
        summary.innerHTML = show.summary || "No summary available";

        article.appendChild(resultName);
        article.appendChild(resultLink);
        article.appendChild(resultImg);
        article.appendChild(summary);

        results.appendChild(article);
    });
}
