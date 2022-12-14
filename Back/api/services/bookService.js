const { Book, Genre, Review } = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

exports.findAll = async () => {
  let books = await Book.findAll({
    where: { deleted: false },
    include: [
      {
        model: Review,
        required: false,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    ],
    attributes: { exclude: ["bookOrderId"] },
  });
  await getGenre(books);
  return books;
};

exports.findById = async (id) => {
  let book = await Book.findByPk(id, {
    include: [
      {
        model: Review,
        required: false,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    ],
    attributes: { exclude: ["bookOrderId"] },
  });
  await getGenre([book]);
  return book;
};

exports.create = async (book) => {
  let bookGenre = book.genre;
  let [genre] = await Genre.findOrCreate({
    where: { name: bookGenre },
  });
  let newBook = {
    title: book.title,
    author: book.author,
    genreId: genre.dataValues.id,
    description: book.description,
    editorial: book.editorial,
    front: book.front,
    price: book.price,
    stock: book.stock,
    deleted: book.deleted,
  };
  return await Book.create(newBook);
};

exports.change = async (id, body) => {
  let book = await Book.findByPk(id);
  let genreName = body.genre;
  let genre = await Genre.findOne(
    { where: { name: genreName } },
    {
      attributes: { exclude: ["createdAt", "updatedAt", "bookId", "id"] },
    }
  );
  let newBody = {
    title: body.title,
    author: body.author,
    genreId: genre.dataValues.id,
    description: body.description,
    editorial: body.editorial,
    front: body.front,
    price: body.price,
    stock: body.stock,
    deleted: body.deleted,
  };
  await book.update(newBody);
  return book;
};

exports.delete = async (id) => {
  let book = await Book.findByPk(id);
  book.update({ deleted: true });
  return book;
};

exports.searchByQueryString = async (queryString) => {
  let books = await Book.findAll({
    where: {
      [Op.or]: [
        {
          title: {
            [Op.iLike]: "%" + queryString + "%",
          },
        },
        {
          author: {
            [Op.iLike]: "%" + queryString + "%",
          },
        },
      ],
      deleted: false,
    },
    include: [
      {
        model: Review,
        required: false,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    ],
    attributes: { exclude: ["bookOrderId"] },
  });
  await getGenre(books);
  return books;
};

// ASYNC FUNCTIONS TO GET ALL ADITIONAL INFORMATION

async function getGenre(bookArray) {
  for (let i = 0; i < bookArray.length; i++) {
    let genreId = bookArray[i].genreId;
    let genre = await Genre.findByPk(genreId, {
      attributes: { exclude: ["createdAt", "updatedAt", "bookId", "id"] },
    });
    bookArray[i].dataValues.genre = genre.dataValues;
  }
}
