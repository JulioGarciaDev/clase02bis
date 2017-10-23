const middleware = function (req, res, next) {
    console.log('vino request');

    let random = Math.random();

    if (random > 0.5){
        // te dejo pasar
        next();
    } else {
        res.status(401).json({ message: 'No estás autorizado'});
    }

};

module.exports = middleware;
