const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url= "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,sexist&type=single";


let getJoke = () =>{
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(response => {jokeContainer.textContent = `${response.joke}`;
    jokeContainer.classList.add("fade");

});
}
btn.addEventListener("click",getJoke);
getJoke();