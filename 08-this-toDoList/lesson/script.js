// структура задачи
const taskData = [
  {
    id: 1,
    title: "Сделать дз",
    description: "сделаь",
    isComplete: true,
  },
  {
    id: 2,
    title: "Имя задачи",
    description: "Описание задачи",
    isComplete: true,
  },
  {
    id: 3,
    title: "Имя задачи",
    description: "Описание задачи",
    isComplete: false,
  },
  {
    id: 4,
    title: "Имя задачи",
    description: "Описание задачи",
    isComplete: true,
  },
  {
    id: 5,
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

    const html = ` <div class="item" data-id=${task.id}> 
            <input class="complete" type="checkbox" id="${task.id}" name="${task.id}"  ${isChecked}/> 
            <div class="info"> 
              <h3 class="title">${task.title}</h3>
              <p class="description">${task.description}</p>
            </div> 
            <div class="button">
              <button class="btn outline" id="task-edit" type="button" data-id=${task.id}> 
                Редактировать
              </button>
              <button class="btn outline" id="task-delete" type="button"s>
                Удалить
              </button>
            </div>
          </div> `;
    return html;
  },

  generateID() {
    return this.data.length + 1;
  },

  editTask() {

  }
};

toDoList.render(taskData);

const addTask = document.querySelector("#add-task");
const modalWrapper = document.querySelector(".modal-wrapper");
const modalCancel = document.querySelector("#modal-cancel");
const modal = document.querySelector(".modal");
const editTask = document.querySelector("#task-edit");
const deleteTask = document.querySelector("#task-delete");

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

// пофиксить
const handleEditTask = (element) => {
  console.log(element)
  setModalVisible(true);
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const isChecked = document.querySelector("#isComplete");
  const id = element.dataset.id
  console.log(id)
  
  toDoList.data.forEach((element) => {
    if(element.id == id){
      title.value = element.title;
      description.value = element.description;
      isChecked.checked = element.isComplete;
    }
  })
};

document.addEventListener('click', function (event) {
  if (event.target.matches('#task-edit')){
    console.log(event.target)
    handleEditTask(event.target)
  } else return
});
// editTask.addEventListener("click", handleEditTask);

const handleModalOverlay = (event) => {
  if (event.target.classList.contains("modal-wrapper")) {
    setModalVisible(false);
  }
};

addTask.addEventListener("click", handleAddTask);
modalCancel.addEventListener("click", () => setModalVisible(false));
modalWrapper.addEventListener("click", handleModalOverlay);

const modalForm = document.querySelector(".modal-form");
// разделить сабмит
modalForm.addEventListener("submit", (e) => {
  const data = serializeForm(modalForm);
  e.preventDefault();
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
  mainArray.forEach((element) => {
    if (element.type === "checkbox") data[element.name] = element.checked;
    else data[element.name] = element.value;
  });
  
  return data;
};
