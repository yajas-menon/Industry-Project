const { ObjectId } = require("mongodb");
const db = require("../config/db");
const { COLLECTIONS: { BOOKS } } = require("../constants")

const getAllBooks = async () => {
    const dbo = await db;
    const library = dbo.collection(BOOKS)
    const books = await library.find({}).toArray()
    return books
}

const getBookById = async (id) => {
    const dbo = await db;
    const library = dbo.collection(BOOKS)
    const book = await library.findOne({ _id: ObjectId(id) })
    return book
}

const insertBook = async (name, author, publisher) => {
    const dbo = await db;
    const library = dbo.collection(BOOKS)
    const book = { name, author, publisher }
    return library.insertOne(book)
}

const deleteBookById = async (id) => {
    const dbo = await db;
    const library = dbo.collection(BOOKS)
    const book = await library.findOneAndDelete({ _id: ObjectId(id) })
    return book
}



module.exports = {
    getAllBooks, insertBook, getBookById, deleteBookById
}