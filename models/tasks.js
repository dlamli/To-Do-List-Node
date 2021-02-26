// Importación de librerías
const Task = require('./task');

class Tasks {
    //Declaración e inicialización de variables
    taskList = {};

    // Metodo get
    get taskListArr() {
        const list = [];

        Object.keys(this.taskList).forEach(key => {
            const task = this.taskList[key];
            list.push(task);
        });

        return list;
    };

    constructor() {
        this.taskList = {};
    };

    // Lista las tareas 
    listTask() {

        this.taskListArr.forEach((task, index) => {
            const idx = `${index + 1}`.green,
                { desc, completed } = task,
                status = (completed) ?
                'Completed'.green :
                'Pending'.red

            console.log(`${idx} ${desc} :: ${status}`);
        });
    };

    // List completed task
    listStatus(isCompleted = true) {
        let counter = 0;

        this.taskListArr.forEach((task, index) => {

            const idx = `${index + 1}`.green,
                { desc, completed } = task,
                status = (completed) ?
                'Completed'.green :
                'Pending'.red

            if (isCompleted) {
                //Completado
                if (completed) {
                    counter += 1;
                    console.log(`${counter.toString().green+'.'} ${desc} :: ${status}`);
                }
            } else {
                //Pendiente
                if (!completed) {
                    counter += 1;
                    console.log(`${counter.toString().green+'.'} ${desc} :: ${status}`);
                }
            }

        });
    };
    // Carga tareas por array
    loadTasksFromArray(tasks = []) {
        tasks.forEach(task => {
            this.taskList[task.id] = task;
        });
    };
    // Crear tarea
    createTask(desc = '') {
        const task = new Task(desc);
        this.taskList[task.id] = task;
    };
    //Delete task
    deleteTask(id = '') {

        if (this.taskList[id]) {
            delete this.taskList[id];
        }
    };
    //Marca Pendiente o Completado
    toggleStatus(ids = []) {

        ids.forEach(id => {
            const task = this.taskList[id];
            if (!task.completed) {
                task.completed = new Date().toISOString();
            }

        });
        this.taskListArr.forEach(task => {

            if (!ids.includes(task.id)) {
                this.taskList[task.id].completed = null;
            }
        });

    };
};

module.exports = Tasks;