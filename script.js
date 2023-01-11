jsonFetchValues();
jsonFetchWifi();


//UserStory 1
function jsonFetchValues() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((data) => {
            let val = [];
            let keys = Object.keys(data);
            keys.forEach(function (key) {
                val.push(data[key])
            });
            document.querySelector("#jsonVal")
                .innerHTML = val;
            console.log(data);
        })
        .catch((error) => console.log(error));
}

//UserStory 2
function jsonFetchWifi() {
    fetch("./OpenJsonData.json")
        .then((response) => response.json())
        .then((data) => {
            //document.querySelector("#jsonAll");
            console.log(data)
            //UserStory 3 Component
            randomJobButton(data);
        })
        .catch((error) => console.log(error));
}

//UserStory 3 wird in UserStory 2 ausgefuehrt
function randomJobButton(jobs) {
    document.querySelector("#jobButton").addEventListener("click", function () {
        let selJob = jobs[Math.floor(Math.random() * jobs.length)];

        document.querySelector("#jobs").innerHTML = selJob.Titel;
        getSingleJobInfo(selJob);
    });
}

//UserStory 4

function getSingleJobInfo(selJob) {
    document.getElementById("#job").innerHTML = "<span class='hervorheben'>Job:</span>" + " " + selJob.Titel + "<br><br>" + " <span class='hervorheben'>arbeitet in:</span>"
        + " " + selJob.Place + "<br><br>" + "<span class='hervorheben'>Beschreibung:</span><br>" + " " + selJob.Description;
}
