const quoteTextElement = document.getElementById("quoteText");
const quoteAuthorElement = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");
newQuoteBtn.addEventListener("click", getNewQuote);

    function getNewQuote() {
    const script = document.createElement("script");
    script.src = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=parseQuote";
    document.body.appendChild(script);
}

    function parseQuote(data) {
    quoteTextElement.textContent = data.quoteText;
    quoteAuthorElement.textContent = `- ${data.quoteAuthor || "Unknown"}`;
}

    // Fetch a new quote when the page loads
    getNewQuote();