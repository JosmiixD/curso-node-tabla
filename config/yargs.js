const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Referencia a la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        description: 'Muestra la tabla en consola'
    })
    .option( 'h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        description: 'Limite hasta el cual sera multiplicada la base'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero'
        }
        if( isNaN(argv.h)) {
            throw 'El limite debe ser numerico'
        }
        if( argv.h < 1 ) {
            throw 'El limite no puede ser menor a 1'
        }
        return true;
    })
    .argv;

module.exports = argv;