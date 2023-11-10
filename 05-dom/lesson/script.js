// структура задачи
const taskData = {
  id: 700,
  title: "Имя задачи",
  description: "Описание задачи",
  isComplete: false,
};

// контейнер для задач
const taskItem = document.querySelector(".task-container");

const createCheckBox = (id, isComplete) => {
  const input = document.createElement("input");

  input.classList = "complete";
  input.type = "checkbox";
  input.id = `${id}`;
  input.name = `${id}`;
  input.checked = isComplete;

  return input;
};

const createInfo = (title, description) => {
  const info = document.createElement("div");
  info.classList = "info";

  const titleElement = document.createElement("h3");
  titleElement.classList = "title";
  titleElement.textContent = `${title}`;

  const descriptionElement = document.createElement("p");
  descriptionElement.classList = "description";
  descriptionElement.textContent = `${description}`;

  info.append(titleElement, descriptionElement);

  return info;
};

const createTask = (task) => {
  const taskEl = document.createElement("div");
  taskEl.classList = "item";
  taskEl.append(
    createCheckBox(taskData.id, taskData.isComplete),
    createInfo(taskData.title, taskData.description)
  );

  return taskEl;
};

taskItem.append(createTask(taskData));

aboba/
// createTask(task)
