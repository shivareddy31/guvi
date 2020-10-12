const $pretag = document.querySelector("pre");
fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(response) {
    if (response.statusText === "OK") {
        console.log(response);

        response.json().then(function(data) {
            console.log(data);
        });
    } else {
        alert("failed")
    }
});