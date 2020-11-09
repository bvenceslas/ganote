const router = require('express').Router();
const Note = require('../models/note.model');
const ObjectID = require('mongoose').Types.ObjectId; // Using ID

router.get('/test', async (req, res) => {
    await res.send('GaNote API is working perfectly .......');
});

// get all notes
router.get('/note', async (req, res) => {
    await Note.find()
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json({msg: err}));
});


//get note by id
router.get('/note/:id', async (req, res) => {
    await Note.findById(req.params.id)
        .then(userFound => res.json(userFound))
        .catch(err => res.status(400).json({msg: err}));
});

// post a note
router.post('/note', async function (req, res){

    const noteData = new Note(req.body);
    await noteData.save()
        .then(note => res.json(note))
        .catch(err => res.status(400).json({msg: err}));

    // ou encore

    // (1)
    // let noteData = new Note({
    //     subject: req.body.subject,
    //     note: req.body.note,
    //     decision: req.body.decision
    // });

    // noteData.save((err, success) => {
    //     if(!err) res.send(success)
    //     else console.log('Error while adding a note: ' +JSON.stringify(err, undefined, 2));
    // });

    // (2)
    // Note.create(req.body)
    //     .then(note => res.json(note))
    //     .catch(err => res.status(400).json({msg: err}));

});

// update a note
router.route('/note/:id').put(async (req, res) => {
    await Note.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => res.send('The Note has been updated !'))
        .catch(err => res.status(400).json({msg: err}));
});


// delete a note
router.delete('/note/:id', async (req, res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('No Data with given id: ' + req.params.id);
    
    await Note.findByIdAndRemove(req.params.id, (err) => {
        if(!err) res.send('The data has been deleted !')
        else res.status(400).json({msg: err});
    });
});

module.exports = router;