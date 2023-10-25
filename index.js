// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())

let add_btn = document.querySelector(".add_btn");
// let table = document.querySelector(".table");
// let tile = document.querySelector(".tile");
let tasks_box = document.querySelector(".tasks_box");

let modalka_bg = document.querySelector(".modalka_bg");
let close_modal = document.querySelector("#close_modal");
let modal_add_btn = document.querySelector(".modal_add_btn");

let heading = document.querySelector(".heading");
let descr = document.querySelector(".descr");
let time = document.querySelector(".time");
let date = document.querySelector(".date");

let form = document.querySelector("form");
let inps = document.querySelectorAll("input");

add_btn.onclick = () => {
  modalka_bg.style.display = "flex";
};
close_modal.onclick = () => {
  modalka_bg.style.display = "none";
};
modal_add_btn.onclick = () => {
  modalka_bg.style.display = "none";

};

const bas = "http://localhost:8080";

let todos = [
  {
    id: Math.random(),
    title: heading.value,
    description: descr.value,
    time: time.value,
    date: date.value,
  },
];
console.log(todos[0].time);

form.onsubmit = (e) => {
  e.preventDefault();

  let todo = {
    id: Math.random(),
    title: heading.value,
    description: descr.value,
    time: time.value,
    date: date.value,
  };
  todos.push(todo);

  reload(todos);
};

// fetch(bas + "/todos" ,{
//   method: "post",
//   body: JSON.stringify(todo),
//   headers: {
//     "Content-Type": "application/json",
//   },

// })
//   .then((res) => res.json())
//   .then((res) => reload(res));

fetch(bas + "/todos")
  .then((res) => res.json())
  .then((res) => reload(res));

function reload(arr) {
  tasks_box.innerHTML = "";
  
  for (let item of arr) {
    let task = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let date_and_time = document.createElement("div");
    let date = document.createElement("div");
    let time = document.createElement("div");
    let option = document.querySelector("option");

    task.classList.add("task");
    date_and_time.classList.add("date_and_time");
    date.classList.add("date");
    time.classList.add("time");

    // option.innerHTML = "progress";
    console.log(item);


    
    h2.innerHTML = item.title;
    time.innerHTML = item.time;
    date.innerHTML = item.date;
    p.innerHTML = item.description;

    tasks_box.append(task);
    task.append(h2, p, date_and_time);
    date_and_time.append(date, time);

    console.log();




    /*
    var elem = document.querySelector("#elem");

    createTable(elem, 5, 1);

    function createTable(parent, cols, rows) {
      var table = document.createElement("table");

      for (var i = 0; i < rows; i++) {
        var tr = document.createElement("tr");
        
        for (var j = 0; j < cols; j++) {
          var td = document.createElement("td");
          tr.appendChild(td);

          td.innerHTML = '666'
        }

        table.appendChild(tr);
      }

      parent.appendChild(table);
      console.log(td);

    }
    */
  }
}
