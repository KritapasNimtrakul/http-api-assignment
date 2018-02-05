const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  '/': htmlHandler.getIndex,
  '/style.css': htmlHandler.getCSS,
  '/success': jsonHandler.success,
  '/badRequest': jsonHandler.badRequest,
  '/unauthorized': jsonHandler.unauthorized,
  '/forbidden': jsonHandler.forbidden,
  '/internal': jsonHandler.internal,
  '/notImplemented': jsonHandler.notImplemented,
  notFound: jsonHandler.notFound,
};

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);


  const params = query.parse(parsedUrl.query);
  // console.log(params);
  if (urlStruct[parsedUrl.pathname]) {
    if (parsedUrl.pathname === '/badRequest' && params.valid === 'true') {
      urlStruct['/success'](request, response, params);
    } else if (parsedUrl.pathname === '/unauthorized' && params.loggedIn === 'yes') {
      urlStruct['/success'](request, response, params);
    } else {
      urlStruct[parsedUrl.pathname](request, response, params);
    }
  } else {
    urlStruct.notFound(request, response, params);
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
