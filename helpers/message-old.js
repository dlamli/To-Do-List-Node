require('colors');



const showMenu = () => {

    return new Promise(resolve => {

        console.clear();
        console.log('====================='.blue);
        console.log('  SELECT AN OPTION'.blue);
        console.log('=====================\n'.blue);

        console.log('====================='.red);
        console.log(`${'|'.red}${'|1|'.green} ${'Crear tarea'.blue}${'|'.red} `);
        console.log(`${'|'.red}${'|2|'.green} ${'Listar tareas'.blue}${'|'.red}`);
        console.log(`${'|'.red}${'|3|'.green} ${'Listar tareas completadas'.blue}${'|'.red}`);
        console.log(`${'|'.red}${'|4|'.green} ${'Crear tareas pendientes'.blue}${'|'.red}`);
        console.log(`${'|'.red}${'|5|'.green} ${'Completar tarea'.blue}${'|'.red}`);
        console.log(`${'|'.red}${'|6|'.green} ${'Borrar tarea'.blue}${'|'.red}`);
        console.log(`${'|'.red}${'|0|'.green} ${'Salir'.blue}${'|'.red}`);
        console.log('====================='.red);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione un opcion: ', (opt) => {
            readline.close();
            resolve(opt);
        });

    });
};

const pause = () => {
    return new Promise(resolve => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`Presione ${'ENTER'.red} para continuar\n`, (opt) => {
            readline.close();
            resolve();
        });

    });

};

module.exports = {
    showMenu,
    pause

};