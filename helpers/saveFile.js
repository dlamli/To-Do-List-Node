const fs = require('fs');
const file = './db/data.json';

// Guarda la información en un archivo.JSON
const saveInformation = (data) => {
    fs.writeFileSync(file, JSON.stringify(data));
};

// Recibe la información del archivo.JSON
const listenData = () => {
    // Si no se encuentra el archivo.JSON
    if (!fs.existsSync(file)) {
        return null;
    }
    const info = fs.readFileSync(file, { encoding: 'utf-8' });
    const data = JSON.parse(info);
    // console.log(data);

    return data;
};

module.exports = {
    saveInformation,
    listenData
};