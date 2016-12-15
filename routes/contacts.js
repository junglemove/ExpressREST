/**
 * Created by Administrateur on 14/12/2016.
 */
const Router = require('express').Router;
const Contact = require('../model/contact');
var bodyParser = require('body-parser');
// use bodyParser here to use it "on demand" instead of use it as middleware (for every requests)

let router = new Router();

router.get('/', (req, res, next) => {

    Contact.find((err, contacts) =>{
        res.json(contacts);
    });
});



router.post('/', bodyParser.urlencoded({extended: false}),(req, res, next) =>{
    console.log(req.body); // parsé par le middleware bodyParser
    //contacts.push({})
    var contact = new Contact(req.body);
    contact.save((err, save) => {
        res.statusCode = 201;
        res.json(contact);
    });
});


// 2 - Créer la vue afficher qui affiche le contact reçu
// dans l'url (req.params.id)
router.get('/:id', (req, res, next) => {
    var id = req.params.id;
    Contact.findById(id, (err, contact) =>{

        if(err){
            return next(err);
        }

        if(!contact){
            req.message = "Le contact n'existe pas";
            return next();
        }

        res.json(contact); // since ES6 {contacts} can replace {contacts:contacts}
    });
});

module.exports = router;