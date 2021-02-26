// Importación de librerías
const inquirer = require('inquirer');
require('colors');

const question = [{
    type: 'list',
    name: 'option',
    message: 'Choose an option',
    choices: [{
            value: '1',
            name: `${'1'.green} Create Task`
        },
        {
            value: '2',
            name: `${'2'.green} List Task`
        },
        {
            value: '3',
            name: `${'3'.green} List completed task`
        },
        {
            value: '4',
            name: `${'4'.green} List pending task`
        },
        {
            value: '5',
            name: `${'5'.green} Complete task`
        },
        {
            value: '6',
            name: `${'6'.green} Delete task`
        },
        {
            value: '0',
            name: `${'0'.green} Exit`
        }
    ]
}];
// Menu
const inquirerMenu = async() => {
    console.clear();
    console.log('=====================  '.blue);
    console.log('  SELECT AN OPTION     '.white);
    console.log('=====================\n'.blue);
    const { option } = await inquirer.prompt(question);
    return option;
};
// Pausa
const pause = async() => {
    const question = [{
        type: 'input',
        name: 'enter',
        message: `Presione ${'ENTER'.green} para continuar.`
    }];
    console.log('\n');
    await inquirer.prompt(question);
};
// Input
const listenInput = async(message) => {
    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Please enter a value.'
            }
            return true;
        }
    }];

    const { desc } = await inquirer.prompt(question);
    return desc;
};

const listTaskToDelete = async(tasks = []) => {
    const choices = tasks.map((task, i) => {
        const idx = `${i + 1}`.green;

        return {
            value: task.id,
            name: `${idx} ${task.desc}`
        }

    });

    choices.unshift({
        value: '0',
        name: '0 '.green + 'Cancelar'
    });

    const question = [{
        type: 'list',
        name: 'id',
        message: 'Delete',
        choices
    }];

    const { id } = await inquirer.prompt(question);
    return id;
};

const confirm = async(message) => {

    const question = [{
        type: 'confirm',
        name: 'ok',
        message
    }];

    const { ok } = await inquirer.prompt(question);
    return ok;
};

const showCheckList = async(tasks = []) => {

    const choices = tasks.map((task, i) => {
        const idx = `${i + 1}`.green;

        return {
            value: task.id,
            name: `${idx} ${task.desc}`,
            checked: (task.completed) ? true : false
        }
    });

    const question = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Select',
        choices
    }];

    const { ids } = await inquirer.prompt(question);
    return ids;
};


module.exports = {
    inquirerMenu,
    pause,
    listenInput,
    listTaskToDelete,
    confirm,
    showCheckList
};