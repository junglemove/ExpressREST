/**
 * Created by Administrateur on 14/12/2016.
 */
const Router = require('express').Router;
const Contact = require('../model/contact');

let router = new Router();


// 1 - Creer la vue liste qui fait le rendu du tableau
// (regader la docs de http://ejs.co)
router.get('/', (req, res, next) => {

    Contact.find((err, contacts) =>{
        res.render('contact/list', {contacts});
    });
});


// 2 - Créer la vue afficher qui affiche le contact reçu
// dans l'url (req.params.id)
router.get('/:id', (req, res, next) => {
    var id = req.params.id;
    Contact.findById(id, (err, contacts) =>{

        if(err){
            return next(err);
        }

        if(!contacts){
            req.message = "Le contact n'existe pas";
            return next();
        }

        res.render('contact/show', {contacts}); // since ES6 {contacts} can replace {contacts:contacts}
    });
});

router.get('/add', (req, res, next) =>{
    res.render('contact/add');
});

router.post('/add', (req, res, next) =>{
    console.log(req.body);
    //contacts.push({})
    res.redirect('/');
});

module.exports = router;