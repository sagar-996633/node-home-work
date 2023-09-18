const { BookService } = require("../services");


/** create Category */
const CreateBook = async (req, res) => {
  try {
    const reqBody = req.body;

    const Book = await BookService.CreateBook(reqBody);
    if (!Book) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: reqBody,
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** get Book */

const Booklist = async (req, res) => {
  try {
    const getBook = await BookService.getBookList();
    res.status(200).json({
      success: true,
      message: "Book List!",
      data: {
        getBook,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** delete Category */

const deleteRecord = async (req, res) => {
  try {
    const BookId = req.params.BookId;
    const BookExists = await BookService.getBookList(BookId);
    if (!BookExists) {
      throw new Error("Book not found!");
    }

    await BookService.deleteBook(BookId);

    res.status(200).json({
      success: true,
      message: "Book delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  CreateBook,
  Booklist,
  deleteRecord
};
