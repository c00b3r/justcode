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
  container: document.querySelector(".task-container"),

  render(tasks) {
    this.data = tasks;

    let html = "";
    this.data.forEach((task) => (html += this.createTask(task)));

    this.container.insertAdjacentHTML("beforeend", html);
    console.log(html);
  },

  renderTask(task) {
    this.data = this.data.concat(task);
    this.container.insertAdjacentHTML("beforeend", this.createTask(task));
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

  generateID() {
    return this.data.length + 1;
  },
};

toDoList.render(taskData);

const addTask = document.querySelector("#add-task");
const modalWrapper = document.querySelector(".modal-wrapper");
const modalCancel = document.querySelector("#modal-cancel");
const modal = document.querySelector(".modal");

const setModalVisible = (visible) => {
  if (visible) {
    modalWrapper.classList.add("visible");
  } else {
    modalWrapper.classList.remove("visible");
  }
};

const handleAddTask = () => {
  setModalVisible(true);
};

const handleModalOverlay = (event) => {
  if (event.target.classList.contains("modal-wrapper")) {
    setModalVisible(false);
  }
};

addTask.addEventListener("click", handleAddTask);
modalCancel.addEventListener("click", () => setModalVisible(false));
modalWrapper.addEventListener("click", handleModalOverlay);

const modalForm = document.querySelector(".modal-form");

modalForm.addEventListener("submit", (e) => {
  const data = serializeForm(modalForm);
  e.preventDefault();
  console.log(data);
  data.id = toDoList.generateID();

  toDoList.renderTask(data);
  modalForm.reset();
  setModalVisible(false);
});

const serializeForm = (form) => {
  const elements = form.elements;
  const data = {};

  const arrayElement = Array.from(elements);
  const mainArray = arrayElement.filter((element) => {
    return element.name;
  });
  console.log(mainArray);
  mainArray.forEach((element) => {
    if (element.type === "checkbox") data[element.name] = element.checked;
    else data[element.name] = element.value;
  });

  return data;
};
