//creating variables

const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImageEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");


//addingeventlistener
btnEl.addEventListener("click", async function () {

    //error handling
    try {

        //btn disabled to use while loading
        btnEl.disabled = true;
        btnEl.innerText = "loading...."

        animeNameEl.innerText = "Upadting..."
        animeImageEl.src = "./Spinner.svg";

        //fletching data
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();

        //btn enabled
        btnEl.disabled = false;
        btnEl.innerText = "Get Pics"

        //animecontainer
        animeContainerEl.style.display = "block";
        animeImageEl.src = data.url;
        animeNameEl.innerText = data.artist;

    } catch (error) {
        console.log(error);
        btnEl.disabled = false;
        btnEl.innerText = "Get Pics";
        animeImageEl.style.display = "none";
        animeNameEl.innerText = "Error Happened! pPlease, try again later";
    }


});