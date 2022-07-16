import Book from "../models/Book.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const newBook = async (req, res) => {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);

  const obj = {
    title: req.body.title,
    description: req.body.description,
    image: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  };

  const book = new Book(obj);

  try {
    const storedBook = await book.save();

    res.json(storedBook);
  } catch (error) {
    console.log(error);
  }
};

const getBooks = async (req, res) => {
  Book.find({}, (err, items) => {
    const { image } = items[0];

    console.log(image.toString("base64"));

    if (err) {
      console.log(err);
      res.status(500).send(`An error occurred`, err);
    } else {
      // res.render("booksView", { items: items });
      res.json(items);
    }
  });
};

export { newBook, getBooks };
