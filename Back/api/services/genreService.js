const { Genre, Book, Review } = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

exports.findAll = () => {
  return Genre.findAll({ attributes: { exclude: ["bookId"] } });
};

exports.findById = (id) => {
  return Genre.findByPk(id, { attributes: { exclude: ["bookId"] } });
};

exports.findBooksByGenreIdOrName = async (queryString) => {
  if (!isNumeric(queryString)) {
    let searchId = await Genre.findOne({
      where: {
        name: {
          [Op.iLike]: queryString,
        },
      },
    });
    queryString = searchId.dataValues.id;
  }
  let books = await Book.findAll({
    where: { genreId: queryString, deleted: false },
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

exports.create = (genre) => {
  return Genre.create(genre);
};

exports.change = async (id, changes) => {
  let genre = await Genre.findByPk(id);
  genre.update(changes);
  return genre;
};

exports.delete = (id) => {
  return Genre.destroy({ where: { id } });
};

// ADITIONAL FUNCTIONS

function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

async function getGenre(bookArray) {
  for (let i = 0; i < bookArray.length; i++) {
    let genreId = bookArray[i].genreId;
    let genre = await Genre.findByPk(genreId, {
      attributes: { exclude: ["createdAt", "updatedAt", "bookId", "id"] },
    });
    bookArray[i].dataValues.genre = genre.dataValues;
  }
}
