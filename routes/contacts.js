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
router.get('/', (req, res, next) => {
    res.render('contacts', {users:contacts});
});


// 2 - Créer la vue afficher qui affiche le contact reçu
// dans l'url (req.params.id)
router.get('/:id', (req, res, next) => {
    var id = req.params.id;
    var oneContact = contacts.find((contact) =>   contact.id == id );
    console.log("Found: "+ id + "/" + oneContact);
    res.render('contacts', {users:oneContact});
});

module.exports = router;