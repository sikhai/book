const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    let books
    try {
        books = Book.find().sort({ createAt: 'desc' }).limit(10).exec()
    } catch {
        books = []
    }
    res.render('index', { books: books })
})

module.exports = router