const express = require("express");
const router = express.Router();

const Book = require("../../models/book");

router.get("/test", (req, res) => {
    res.send("Book test route");
});

// get all
router.get("/", (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({ nobooksfound: "No books found" }));
});

// get by ID
router.get("/:id", (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({ nobookfound: "No book found" }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    Book.create(req.body)
      .then(book => res.json({ msg: 'Book added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
  });

  // @route GET api/books/:id
  // @description Update book
  // @access Public
  router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
      .then(book => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });

  // @route GET api/books/:id
  // @description Delete book by id
  // @access Public
  router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
      .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a book' }));
  });

module.exports = router;
