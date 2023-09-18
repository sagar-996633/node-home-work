const { Book } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<Book>}
 */
const CreateBook = async (reqBody) => {
  return Book.create(reqBody);
};

const getBookList = async (req, res) => {
  return Book.find()
};

const deleteBook = async (BookId) => {
  return Book.findByIdAndDelete(BookId);
};

module.exports = {
  CreateBook,
  getBookList,
  deleteBook
};