jsonFetchValues();
jsonFetchWifi();


//UserStory 1
function jsonFetchValues() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((data) => {
            let val = [];
            let keys = Object.keys(data);
            keys.forEach(function (key){
                val.push(data[key])
            });
            document.querySelector("#jsonVal")
                .innerHTML=val;
            console.log(data);
        })
        .catch((error) => console.log(error));
}

//UserStory 2
function jsonFetchWifi() {
    fetch("./OpenJsonData.json")
        .then((response) => response.json())
        .then((data) => {
            document.querySelector("#jsonAll");
            console.log(data);
        })
        .catch((error) => console.log(error));
}

//UserStory 3
const jobs = ["Zimmermann", "Drogendealer", "Busfahrer", "Putzkraft"];

document.querySelector("#jobButton").addEventListener("click", function (){
    document.querySelector("#jobs").innerHTML=jobs[Math.floor(Math.random()*jobs.length)];
});

//UserStory 4
let job = {title: "Tischler", place_of_work: "Werkstatt", description: "Stellt Möbel her"}

document.getElementById("#job").innerHTML= "Job: " + job.title + "<br>" + " arbeitet in: "
    +  job.place_of_work + "<br>" + "Beschreibung: " + job.description;

