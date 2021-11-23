const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( message => console.log( message ))
    .catch( err => console.log( err ) )
