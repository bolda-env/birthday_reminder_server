exports.Response = function(res, statusCode = 404, message = {msg: 'Not Found!'}){
  res.writeHead(statusCode, {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(message))
}
