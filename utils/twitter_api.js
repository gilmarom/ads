
const Tweet = require('twit');
const config = require('../config/config');
const { json, text } = require('express');

tweet = new Tweet(config);

const getTweetByNameLocation =async function (){
  var country ='italy';
  tweet.get('statuses/user_timeline', { screen_name: 'ChiliPeppers',q:'ITALY' },
  function(err, data, response) {
    post=[];
    for (var i in data){
    var string=(data[i]['text']);
    if (string.includes(country) || string.includes(country.toUpperCase())){
      console.log(data[i]['text']);
      post =  string;
    }
   }
  });
}


const searchTweet = async function(){
    tweet.get('search/tweets', { q: 'Black Pumas at austin', count: 5 }, 
    function(err, data, response) {
     if(data.length>0){  
     return data;
     }
     var json=data;
     for (var i in json){
            for (j in json[i][2]){
               console.log(j["id"]);
        }
    }
    });
}
module.exports= { 
                  getTweetByNameLocation,
                  searchTweet 
                }

