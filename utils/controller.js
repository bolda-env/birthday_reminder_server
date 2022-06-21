const fs = require('fs');
const path = require('path');

// @desc    Resources
const celebrants = require('./celebrants').data;
const { Response } = require('./response');

// @desc    GET /api/birthday_celebrants
function getCelebrants(req, res){
  if(req.method === 'GET'){
    Response(res, 200, celebrants);
  }
}

// @desc    GET RegExp Match
function publicImages(req, res){
  if(req.method === 'GET'){
    const imgDir = `${path.dirname(__dirname)}/images`;
    let reqFileName = req.url.split(path.sep)[3];

    fs.readdir(imgDir, (err, files)=>{
      if(files.includes(reqFileName)){
        fs.createReadStream(imgDir+"/"+reqFileName).pipe(res)
      }else{
        Response(res);
      }
    })
  }
}

exports.celebrants = { getCelebrants, publicImages };
