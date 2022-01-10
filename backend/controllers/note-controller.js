const Note = require("../models/note.model");

exports.testAPI = async (req, res) => {
    await res.status(200).send('Ganote API is working perfectly ...');
}

exports.findAll = async (req, res) => {
    try {
        const notes = await Note.find();
        return res.status(200).json(notes);
    } catch (error) {
        return res.status(400).json({ message: error.message})
    }
}

exports.findOne = async (req, res) => {
    try {
        const note = await Note.findOne(req.params.id);
        return res.status(200).json(note);
    } catch (error) {
        return res.status(404).json({ message: error.message})
    }
}

exports.create = async (req, res) => {
    try {

        const newNote = new Note(req.body);
        const savedNote = await newNote.save();
        return res.status(201).json(savedNote);
    } catch (error) {
        return res.status(400).json({ message: error.message})
    }
}

exports.update = async (req, res) => {
    try {
        const updatedNote = await Note.findOneAndUpdate({_id: req.params.id}, {...req.body}, {new: true});
        return res.status(201).json(updatedNote);
    } catch (error) {
        return res.status(400).json({ message: error.message})
    }
}

exports.delete = async (req, res) => {
    try {
        const deletedNote = await Note.findOneAndDelete(req.params.id);
        if(!deletedNote) {
            return res.status(404).json({ message: 'Note not found'});
        }else{
            return res.status(200).json(deletedNote);
        }
    } catch (error) {
        return res.status(400).json({ message: error.message})
    }
    
}