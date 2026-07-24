const button = document.querySelector(".btn");

button.addEventListener("click", () => {

    console.log("Telegram Clicked");
    if (typeof fbq === 'function') {
        fbq('track', 'Lead');
        fbq('track', 'Subscribe');
    }

});
