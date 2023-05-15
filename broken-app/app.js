const express = require('express');
let axios = require('axios');
var app = express();
app.use(express.json())

app.post('/',  async function(req, res, next) {
  try {
    
    let results = await  Promise.all(req.body.developers.map(async d => {
      //let result = await axios.get(`https://api.github.com/users/${d}`);
      //console.log(result.data)
      return await await axios.get(`https://api.github.com/users/${d}`);
      
    }));
    console.log(results)
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));
    
    return res.send(JSON.stringify(out));
  } catch {
    
    next(err);
  }
});

//app.listen(3000);
module.exports = {app}