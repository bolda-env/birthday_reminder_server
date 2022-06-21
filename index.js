const http = require('http');

// @desc Server Config
const { server_name, port, message } = {
  server_name: process.env.SERVER_NAME = 'localhost',
  port: process.env.SERVER_PORT = 5000,
  message: function(){
    return `Server listening on port ${5000}`;
  },
}

// @desc    Local External Dependencies
const {Response} = require('./utils/response');
const { celebrants } = require('./utils/controller');

const app = http.createServer((req, res)=>{
  const { getCelebrants, publicImages } = celebrants ;

  switch (req.url) {
    case '/api/birthday_celebrants':
      getCelebrants(req, res);
      break;

    case /(\/api\/birthday_celebrants\/)\D+_\d+/.test(req.url) ? req.url : '':
      publicImages(req, res);
      break;

    default:
      Response(res);
      break;
  }
})

app.listen(port, ()=> message);
