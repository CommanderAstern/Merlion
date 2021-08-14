const axios = require('axios');
module.exports = {
    name: 'cat',
    description: 'USes an API to grab cat images ',
    execute(message, args) {
        axios.get('https://api.thecatapi.com/v1/images/search') 
        .then(response => {
          message.channel.send(JSON.stringify(response.data, 0, 4));
          console.log(response.data);
        });  
    },
};


axios.get('https://api.thecatapi.com/v1/images/search') 
.then(response => {
  console.log(response.data);
});  