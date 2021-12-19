// Need to set time and date at top of page!
var currentDay= moment().format('MMMM Do YYYY, h:mm:ss a')
$("#currentDay").append(currentDay);

var update= function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}

setInterval(update,1000);

//Tasks to store in page/local storage

var tasks = {
    "text9": "",
    "text10": "",
    "text11": "",
    "text12": "",
    "text1": "",
    "text2": "",
    "text3": "",
    "text4": "",
    "text5": ""
};

 
//Save task on click

$(".saveBtn").on("click", function(event) {
    save(event.target.id);
});



//Save tasks to local storage

function save(id) {
    tasks["text"+id]=document.getElementsByClassName('task')["text"+id].value;
    localStorage.setItem("tasks", JSON.stringify(tasks));

};

//Retrieve tasks from local storage

function retrieve() {
    var text=JSON.parse (localStorage.getItem("tasks"))
    if (text!==null){
        tasks=text;

    }

    for (var i=0; i<document.getElementsByClassName('task').length; i++){
        var task= document.getElementsByClassName('task')[i];
        task .innerHTML = tasks[task.id];
        console.log("task"+i, task)
    }
};

retrieve();