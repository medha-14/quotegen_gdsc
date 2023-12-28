document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("next");
    const quote = document.querySelector(".quote");
    const aname = document.querySelector(".name");

    button.addEventListener("click", Quotes);

    async function Quotes() {
        const result = await fetch('https://dummyjson.com/quotes/random');
        const data = await result.json();
        quote.innerHTML = data.quote;
        aname.innerHTML = data.author;
    }

    
    Quotes();
});
