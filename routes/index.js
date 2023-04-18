var express = require ('express');
var router = express.Router();
var fetch = require ('node-fetch');

router.get('/movies', (req,res) => {
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MY_API_KEY}`
  )
  .then((res)=> res.json())
  .then((date)=>{
    res.json({movies: DataTransfer.results});
  });
});

module.exports = router;
