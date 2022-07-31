
const tasksContainer = document.getElementById('tasksContainer');

const addNewTask = event => {
    event.preventDefault(); //no nos lleve a otra pagina
    const { value } = event.target.taskText;
    if(!value) return; // si no ha escrito nada, no se añade.
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task); //para agregar al principio de la lista
    event.target.reset(); //para limpiar el input
};

const changeTaskState = event => {
    event.target.classList.toggle('done');//si no tiene la clase, se le agrega, si no se le saca
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}

