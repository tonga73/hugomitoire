import Book from "../models/Book.js";

const newBook = async (req, res) => {
  const book = new Book(req.body);

  try {
    // console.log(book);

    const storedBook = await book.save();

    res.json(storedBook);
  } catch (error) {
    console.log(error);
  }
};

export { newBook };
