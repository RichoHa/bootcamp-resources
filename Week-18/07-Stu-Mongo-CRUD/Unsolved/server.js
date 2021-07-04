const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "notetaker";
const collections = ["notes"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send(index.html);
});

// TODO: You will make six more routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// 1. Save a note to the database's collection
// POST: /submit
// ===========================================
app.get("/submit", (req, res) => {
  const note = req.body
  db.notes.insert(note, (err, data) => {
    if (err) {
      console.log(err)
      res.status(500)
      res.send(err.message)
    } else {
      res.json(data)
    }
  });
});

// 2. Retrieve all notes from the database's collection
// GET: /all
// ====================================================

function gimmeNotes() {
  function gimmeNotesExecutor(resolveFunction, rejectFunction) {
    db.notes.find({}, (err, data) => {
      if (err) {
        rejectFunction(err)
      } else {
        resolveFunction(data)
      }
    })
  }
  return new Promise(gimmeNotesExecutor)
}

app.get("/all", async (req, res) => {

  try {
    const notes = await gimmeNotes()
    res.json(notes)
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }


  // const aPromiseToFetchAllTheNotes = await gimmeNotes()
  // aPromiseToFetchAllTheNotes.then((noteData) => { res.json(noteData) })
  // aPromiseToFetchAllTheNotes.catch((error) => {
  //   res.status(500);
  //   res.send(error.message);
  // });
});
// 3. Retrieve one note in the database's collection by it's ObjectId
// TIP: when searching by an id, the id needs to be passed in
// as (mongojs.ObjectId(IdYouWantToFind))
// GET: /find/:id
// ==================================================================
function gimmeNotes(noteId) {
  function gimmeNotesExecutor(resolveFunction, rejectFunction) {
    db.notes.findone({ _id: mongojs.ObjectId(noteId) }, (err, data) => {
      if (err) {
        rejectFunction(err)
      } else {
        resolveFunction(data)
      }
    })
  }
  return new Promise(gimmeNotesExecutor)
}
app.get("/find/:id", async (req, res) => {
  try {
    const notes = await gimmeNotes(req.params.id)
    res.json(notes)
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
});
// 4. Update one note in the database's collection by it's ObjectId
// (remember, mongojs.ObjectId(IdYouWantToFind)
// POST: /update/:id
// ================================================================

function updateNotes(noteId, updatedNotes) {
  function executorFunction(resolveFunction, rejectFunction) {
    db.notes.update({ _id: mongojs.ObjectId(noteId) }, { $set: updatedNotes }, (error, count, status))
    if (error) {
      rejectFunction(error)
    } else {
      resolveFunction(true)
    }
  }
  return new Promise(executorFunction)
}

app.put("/update/:id", async (req, res) => {
  try {
    const updateNote = req.body;
    const noteId = req.params.id;
    const isUpdatedSuccessful = await updateNotes(noteId, updateNote)

    res.status(204)
    res.send()
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
})


// 5. Delete one note from the database's collection by it's ObjectId
// (remember, mongojs.ObjectId(IdYouWantToFind)
// DELETE: /delete/:id
// ==================================================================
function updateNotes(noteId, updatedNotes) {
  function executorFunction(resolveFunction, rejectFunction) {
    db.notes.update({ _id: mongojs.ObjectId(noteId) }, { $set: updatedNotes }, (error, count, status))
    if (error) {
      rejectFunction(error)
    } else {
      resolveFunction(true)
    }
  }
  return new Promise(executorFunction)
}

app.put("/update/:id", async (req, res) => {
  try {
    const updateNote = req.body;
    const noteId = req.params.id;
    const isUpdatedSuccessful = await updateNotes(noteId, updateNote)

    res.status(204)
    res.send()
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
})



// 6. Clear the entire note collection
// DELETE: /clearall
// ===================================

// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
