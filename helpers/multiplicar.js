const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar, hasta ) => {

    try {

        let salida = ''; 
        let consola = ''; 

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index}\n`;
            consola += `${base} ${'x'.blue} ${index} = ${base * index}\n`;
        }

        if (listar) {
            console.log( colors.yellow('=========================='))
            console.log('     TABLA DEL: ', colors.blue(`${base}`))
            console.log( colors.yellow('==========================') )
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return colors.rainbow( `tabla-${base}.txt creada` );

    } catch (error) {
        throw colors.red(error);
    }

}

module.exports = {
    crearArchivo
}
