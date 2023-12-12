// структура задачи
const taskData = [
  {
    id: 700,
    title: "Имя задачи",
    description: "Описание задачи",
    isComplete: false,
  },
  {
    id: 701,
    title: "Имя задачи",
    description: "Описание задачи",
    isComplete: true,
  },
  {
    id: 702,
    title: "Имя задачи",
    description: "Описание задачи",
    isComplete: false,
  },
  {
    id: 703,
    title: "Имя задачи",
    description: "Описание задачи",
    isComplete: true,
  },
  {
    id: 704,
    title: "Имя задачи",
    description: "Описание задачи",
    isComplete: false,
  },
];

const toDoList = {
  data: [],

  render(tasks) {
    this.data = tasks;
    const container = document.querySelector(".task-container");
    let html = "";
    console.log(this.data);
    this.data.forEach((task) => (html += this.createTask(task)));
    container.insertAdjacentHTML("beforeend", html);
    console.log(html);
  },

  createTask(task) {
    const isChecked = task.isComplete ? "checked" : "";

    const html = ` <div class="item"> 
            <input class="complete" type="checkbox" id="${task.id}" name="${task.id}"  ${isChecked}/> 
            <div class="info"> 
              <h3 class="title">${task.title}</h3>
              <p class="description">${task.description}</p>
            </div> 
          </div> `;
    return html;
  },
};

toDoList.render(taskData);
