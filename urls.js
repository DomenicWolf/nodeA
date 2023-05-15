const fs = require('fs');
const axios = require('axios');
const process = require('process');
const { type } = require('os');

let path = process.argv[2];

/*function readPath (path){
    fs.readFile(`${path}`, 'utf8', (err,data) => {
        if(err){
            console.log(err);
            process.kill(1)
        }
        //console.log(typeof(data))
        return data
    })
}*/
function readPath(path) {
    try {
      const data = fs.readFileSync(path, 'utf8');
      return data;
    } catch (err) {
      console.log(err);
      process.kill(1);
    }
  }

async function getUrl(url) {
    try {
        let resp = await axios.get(url);
        //console.log(resp)
        return resp.data
    }catch(e){
        throw new Error(`error fetching ${url}:${e}`)
    }
}

function writeHtml(p,c) {
    try {
        fs.writeFile(p,c,{encoding:'utf8',flag:'a'},err => {
        console.log('good')
        })
    } catch(e) {

    }
    
}
//console.log(readPath(path))
    
//let pathArr = Array.from(readPath(path))
//console.log(pathArr)
let newPath = readPath(path)
const lines = newPath.split('\n').filter(line => line.trim() !== '');
const urlsArray = lines.map(line => line.trim());
//console.log(urlsArray)

async function loopUrls() {
    for (url of urlsArray) {
        try {
            let resp = await getUrl(url);
            //const name = url.slice(8)
            console.log(url)
            const name = url.slice(url.indexOf('://') + 3,url.indexOf('.org') !== -1 ? url.indexOf('.org') + 4 : undefined);
            console.log(name)
            writeHtml(`${name}.txt`,resp)
            
        }catch(e){
            console.log('catcha')
            continue;
        }
       
        
    }
}
loopUrls()

