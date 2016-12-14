/**
 * Created by Administrateur on 14/12/2016.
 */
const Router = require('express').Router;

let router = new Router();

const contacts = [{
    prenom:'Bill',
    nom:'Gates',
    id:123
},{
    prenom:'Steve',
    nom:'Jobs',
    id:321
}]

// 1 - Creer la vue liste qui fait le rendu du tableau
// (regader la docs de http://ejs.co)


// 2 - Créer la vue afficher qui affiche le contact reçu
// dans l'url (req.params.id)

router.get('/', (req, res, next) => {
    res.send('<h2>Liste des contacts</h2>');
});

router.get('/:id', (req, res, next) => {
    res.send(`<h2>Liste des contacts ${req.params.id}</h2>`);
});

module.exports = router;