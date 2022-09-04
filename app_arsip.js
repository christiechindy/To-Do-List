let addBtn = document.querySelector(".submitButton");
let items = document.querySelector(".items");
let form = document.querySelector("form");
let titleField = document.querySelector("#title");
let descriptionField = document.querySelector("#description");
const urgencity = document.getElementById("urgencity");
let streak = true; //tdk tercoret

addBtn.onclick = function(event) {
    createTask();
    event.preventDefault();
    
    titleField.value = "";
    descriptionField.value = "";
    urgencity.value = "1";
}

items.addEventListener("click", function(event) {
    if (event.target.classList.contains("trashIcon")) {
        deleteTask(event.target);
    } else if (event.target.classList.contains("ceklist")) {
        crossOut(event.target);
        streak = !streak;
    }
});

function deleteTask(elem) {
    elem.parentNode.parentNode.parentNode.parentNode.remove();
}

function crossOut(elem) {
    let icon_to_choose = elem.parentNode;
    let row = icon_to_choose.parentNode;
    let words = row.parentNode;
    
    let taskTitle = row.querySelector(".taskTitle");
    let taskDescription = words.querySelector(".taskDescription");

    taskTitle.style.textDecoration = streak ? "line-through" : "none";
    taskDescription.style.color = streak ? "grey" : "black";
    taskDescription.style.textDecoration = streak ? "line-through" : "none";
}

//dktau np dk bisa klo bgini
// let trashIcon = document.querySelector(".trashIcon");
// trashIcon.addEventListener("click", function() {
//     trashIcon.parentNode.parentNode.parentNode.parentNode.remove();
//     console.log("rmeove");
// })

function createTask() {
    let item = document.createElement("div");
    item.className = "item";

    const option = urgencity.value;
    if (option === "2") { //urgent
        item.className = "item urgent";
    }

    items.append(item);

    const bar = document.createElement("div");
    bar.className = "bar";
    item.append(bar);

    const words = document.createElement("div");
    words.className = "words";
    item.append(words);

    const row = document.createElement("div");
    row.className = "row";
    words.append(row);

    let taskTitle = document.createElement("h3");
    taskTitle.className = "taskTitle";
    taskTitle.textContent = document.querySelector("#title").value;
    row.append(taskTitle);

    const icon_to_choose = document.createElement("div");
    icon_to_choose.className = "icon-to-choose";
    row.append(icon_to_choose);

    const ceklist = document.createElement("div");
    ceklist.className = "ceklist";
    icon_to_choose.append(ceklist);

    const trashIcon = document.createElement("div");
    trashIcon.className = "trashIcon";
    icon_to_choose.append(trashIcon);

    let taskDescription = document.createElement("p");
    taskDescription.className = "taskDescription";
    taskDescription.textContent = document.querySelector("#description").value;
    words.append(taskDescription);

    items.append(item);
}

function saveLocalList(item) {

}

/*
1. Web dev : learn local storage
2. Android : learn kotlin

title = [web dev, android]
description = [learn local storage, learn kotlin]
*/