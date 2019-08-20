var Movie = require('../../models/movie');
var Performer = require('../../models/performer');

module.exports = {
  index,
  show,
  new: newMovie,
  create,
  update,
  delete: deleteOne
};

function index(req, res) {
  Movie.find({})
  .then(function(movies){
    res.status(200).json(movies)
  })
  .then(function(err){
    res.status(500).json(err)
  })
}

function show(req, res){
  Movie.findById(req.params.id)
  .then(function(movie){
    res.status(200).json(movie);
  })
}

function newMovie(req, res) {
  res.render('movies/new', { title: 'Add Movie' });
}

function create(req, res) {
  Movie.create(req.body)
  .then(function(movie){
    res.status(201).json(movie)
  })
}

function update(req,res){
  Movie.findByIdAndUpdate(req.params.id, req.body)
  .then(function(movie){
    res.status(200).json(movie)
  })
}

function deleteOne(req,res){
  Movie.findByIdAndRemove(req.params.id)
  .then(function(movie){
    res.status(200).json(movie);
  })
}