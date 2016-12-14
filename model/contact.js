/**
 * Created by Administrateur on 14/12/2016.
 */

const contacts = [{
    prenom:'Bill',
    nom:'Gates',
    id:123
},{
    prenom:'Steve',
    nom:'Jobs',
    id:321
}]

class Contact{
    static find(cb){
        //cb(false, contacts);  Synchrone
        /*setTimeout(() =>{     //Asynch
            cb(false, contacts);
        },0);
        setImmediate(()=>{
            cb(false, contacts);
        },0);*/
        process.nextTick(() => { // Asynch
            cb(false, contacts);
        });
    }

    static findById(id, cb){
        process.nextTick(() => { // Asynch
            let contact = contacts.find(c => c.id === Number(id));
            cb(false, contact);
        });
    }

}

module.exports = Contact;