const router = require('express').Router()
const db = require('../config/db')
const constants = require('../constants')
const { getAllBooks, insertBook, getBookById, deleteBookById } = require('../controllers/books')


router.get("/", async (req, res, next) => {
    getAllBooks().then(resp => {
        res.json(resp)
    }).catch(next)
})

router.get("/:id", async (req, res, next) => {
    const id = req.params.id
    getBookById(id).then(resp => {
        res.json(resp)
    }).catch(next)
})

router.post("/", async (req, res, next) => {
    const { name, author, publisher } = req.body;
    insertBook(name, author, publisher)
        .then(resp => {
            res.json(resp)
        }).catch(next)
})

router.delete("/:id", async (req, res, next) => {
    const id = req.params.id
    deleteBookById(id).then(resp => {
        res.json(resp)
    }).catch(next)
})

module.exports = router