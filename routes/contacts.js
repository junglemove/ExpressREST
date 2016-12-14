/**
 * Created by Administrateur on 14/12/2016.
 */
const Router = require('express').Router;

let router = new Router();

router.get('/', (req, res, next) => {
    res.send('<h2>Liste des contacts</h2>');
});

router.get('/:id', (req, res, next) => {
    res.send(`<h2>Liste des contacts ${req.params.id}</h2>`);
});

module.exports = router;