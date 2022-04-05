const express = require('express');
const app = express();

app.set('port', process.env.port || 3000) 

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('0223f90004ca4a288a0f604bbf9605b6');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them


app.get('/', (req, res, next)=>{
  
  newsapi.v2.topHeadlines({
    q: 'apple',
  
  }).then(response => {
    console.log(response);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
  });
})

app.listen(app.get('port'), server =>{
  console.info(`Server listen on port ${app.get('port')}`);
})