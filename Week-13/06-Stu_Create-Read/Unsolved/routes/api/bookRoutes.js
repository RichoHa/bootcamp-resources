const router = require('express').Router();
const Book = require('../../models/Book');

// TODO: Get Response - routes/api/books/
router.get('/', (req, res) => {
  // TODO: Reads the whole table from the database (e.g. select * Table)
  Book.findAll().then((bookData) => {
    res.json(bookData);
  });
});

// Get Response - routes/api/books/paperbacks
router.get('/paperbacks', (req, res) => {
  Book.findAll({
    // TODO: sort order of "title", a-z default
    order: ['title'],
    // TODO: filtering query is_paperback
    where: {
      is_paperback: true
    },
    attributes: {
      // TODO: leave out column is_paperback & edition
      exclude: ['is_paperback', 'edition']
    }
  }).then((bookData) => {  //return the search
    res.json(bookData);
  });
});

// TODO: return get request for /"id"
router.get('/:id', (req, res) => {
  // TODO: find by primary key, by paramaters given after the /.
  // return everything in the row with the matched id.
  Book.findByPk(req.params.id).then((bookData) => {
    res.json(bookData);
  });
});

// CREATE a book
router.post('/', (req, res) => {
  Book.create(req.body)
    .then((newBook) => {
      res.json(newBook);
    })
    .catch((err) => {
      res.json(err);
    });
});

// CREATE multiple books
router.post('/seed', (req, res) => {
  Book.bulkCreate([
    {
      title: 'Make It Stick: The Science of Successful Learning',
      author: 'Peter Brown',
      isbn: '978-0674729018',
      pages: 336,
      edition: 1,
      is_paperback: false
    },
    {
      title: 'Essential Scrum: A Practical Guide to the Most Popular Agile Process',
      author: 'Kenneth Rubin',
      isbn: '978-0137043293',
      pages: 500,
      edition: 1,
      is_paperback: true
    },
    {
      title: "White Fragility: Why It's So Hard for White People to Talk About Racism",
      author: 'Robin DiAngelo',
      isbn: '978-0807047415',
      pages: 192,
      edition: 2,
      is_paperback: true
    },
    {
      title: 'The Pragmatic Programmer: Your Journey To Mastery',
      author: 'David Thomas',
      isbn: '978-0135957059',
      pages: 352,
      edition: 2,
      is_paperback: false
    },
    {
      title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
      author: 'Donald Knuth',
      isbn: '978-0201896831',
      pages: 672,
      edition: 3,
      is_paperback: false
    },
    {
      title: 'Algorithms of Oppression: How Search Engines Reinforce Racism',
      author: 'Safiya Umoja Noble',
      isbn: '978-1479837243',
      pages: 256,
      edition: 1,
      is_paperback: true
    }
  ])
    .then(() => {
      res.send('Database seeded!');
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
