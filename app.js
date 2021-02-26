// Importacion de librerías
require('colors');
const { inquirerMenu, pause, listenInput, listTaskToDelete, confirm, showCheckList } = require('./helpers/inquirer');
const { saveInformation, listenData } = require('./helpers/saveFile');

//Instancia de la clase "Tasks"
const Tasks = require('./models/tasks');

const main = async() => {

    let opt = '';
    const tasks = new Tasks();

    const taskDB = listenData();

    if (taskDB) {
        tasks.loadTasksFromArray(taskDB);
    }
    // await pause();


    do {
        // Imprime el menú
        opt = await inquirerMenu();

        switch (opt) {
            case '0':
                console.log('Cerrando el programa...'.yellow);
                break;

            case '1':
                const desc = await listenInput('Enter a Task: ');
                tasks.createTask(desc);
                await pause();
                break;

            case '2':
                tasks.listTask();
                await pause();
                break;

            case '3':
                tasks.listStatus(true);
                await pause();
                break;

            case '4':
                tasks.listStatus(false);
                await pause();
                break;
            case '5':
                const ids = await showCheckList(tasks.taskListArr);
                tasks.toggleStatus(ids);
                break;
            case '6':
                const id = await listTaskToDelete(tasks.taskListArr);
                if (id !== '0') {
                    const confirmDelete = await confirm('Confirm to deleted the task?');
                    if (confirmDelete) {
                        tasks.deleteTask(id);
                        console.log('Tarea borrada'.magenta);
                        await pause();
                    }
                }

                break;
            default:
                console.log('Ingrese una de las opciones del menu!');
                break;
        };

        saveInformation(tasks.taskListArr);

    } while (opt !== '0');

};

main();