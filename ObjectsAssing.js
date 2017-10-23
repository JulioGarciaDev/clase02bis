let usuario = {
    name: 'pepe',
    apellido: 'rodriguez',
    dni: 2020202
};


function copyUser(user){
    return{
        name: user.name,
        apellido: user.apellido,
        dni: user.dni
    }
}

let usuario2 = copyUser(usuario);

usuario2.name= 'Pedro';


let usuario3 = Object.assign({}, usuario );

usuario3.name = 'roberto';

console.log(usuario3);